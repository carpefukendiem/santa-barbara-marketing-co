import { ADDONS, parseAddonList, type AddonId } from '@/lib/addons'
import { pricingPlan } from '@/data/pricing'

export type GaItem = {
  item_id: string
  item_name: string
  price: number
  quantity: number
}

export type PurchaseSummary = {
  transactionId: string
  currency: 'USD'
  billingInterval: 'month' | 'year'
  planName: 'The Local Lead Plan'
  planPrice: number
  addons: string
  addonDetails: Array<{ id: AddonId; name: string; price: number }>
  items: GaItem[]
  chargedToday: number
  paymentStatus: string
}

export type CheckoutLineSnapshot = {
  priceId: string | null
  amountTotal: number | null
}

export type CheckoutSessionSnapshot = {
  id: string
  amountTotal: number | null
  paymentStatus: string | null
  currency: string | null
  metadata: Record<string, string> | null
  lineItems: CheckoutLineSnapshot[]
}

export type KnownPriceIds = {
  voice: string | null
  chat: string | null
}

function dollars(cents: number | null | undefined): number {
  if (cents == null || !Number.isFinite(cents)) return 0
  return Math.round(cents) / 100
}

function intervalOf(value: string | undefined): 'month' | 'year' {
  return value === 'year' ? 'year' : 'month'
}

export function summarizeCheckoutSession(
  session: CheckoutSessionSnapshot,
  prices: KnownPriceIds,
): PurchaseSummary {
  const metadata = session.metadata ?? {}
  const billingInterval = intervalOf(metadata.interval)
  const addonIds = parseAddonList(metadata.addons)
  const priceByAddon = new Map<AddonId, string | null>([
    ['voice_ai', prices.voice],
    ['chat_ai', prices.chat],
  ])
  const addonPriceIds = new Set(
    [prices.voice, prices.chat].filter((id): id is string => Boolean(id)),
  )

  const seenAddonPrices = new Set<string>()
  let coreCents = 0
  let sawCore = false
  for (const line of session.lineItems) {
    if (line.priceId && addonPriceIds.has(line.priceId)) {
      seenAddonPrices.add(line.priceId)
      continue
    }
    coreCents += line.amountTotal ?? 0
    sawCore = true
  }

  const catalogCore = billingInterval === 'year' ? pricingPlan.annualAmount : pricingPlan.monthlyAmount
  const planPrice = sawCore ? dollars(coreCents) : catalogCore

  const addonDetails = addonIds.map((id) => {
    const priceId = priceByAddon.get(id) ?? null
    const line = priceId
      ? session.lineItems.find((item) => item.priceId === priceId)
      : undefined
    const price = line?.amountTotal != null ? dollars(line.amountTotal) : ADDONS[id].monthlyAmount
    return { id, name: ADDONS[id].name, price }
  })

  const separateCents = addonDetails.reduce((sum, addon) => {
    const priceId = priceByAddon.get(addon.id) ?? null
    if (priceId && seenAddonPrices.has(priceId)) return sum
    return sum + Math.round(addon.price * 100)
  }, 0)

  const paid = session.paymentStatus === 'paid' || session.paymentStatus === 'no_payment_required'
  const sessionCents = session.amountTotal ?? (sawCore ? coreCents : Math.round(catalogCore * 100))
  const chargedToday = paid ? dollars(sessionCents + separateCents) : 0

  const items: GaItem[] = [
    {
      item_id: 'local_lead_plan',
      item_name: 'The Local Lead Plan',
      price: planPrice,
      quantity: 1,
    },
    ...addonDetails.map((addon) => ({
      item_id: addon.id,
      item_name: addon.name,
      price: addon.price,
      quantity: 1,
    })),
  ]

  return {
    transactionId: session.id,
    currency: 'USD',
    billingInterval,
    planName: 'The Local Lead Plan',
    planPrice,
    addons: addonIds.join(','),
    addonDetails,
    items,
    chargedToday,
    paymentStatus: session.paymentStatus ?? 'unpaid',
  }
}
