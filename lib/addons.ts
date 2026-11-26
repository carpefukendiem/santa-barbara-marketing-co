import { pricingPlan } from '@/data/pricing'
import { ppcManagement } from '@/data/ppc-management'

export const ADDONS = {
  voice_ai: {
    id: 'voice_ai',
    tag: 'voice-ai-addon',
    name: 'Voice AI',
    blurb: "Answers your calls when you can't.",
    monthlyAmount: 99,
    envVar: 'STRIPE_PRICE_VOICE_AI_MONTHLY',
  },
  chat_ai: {
    id: 'chat_ai',
    tag: 'chat-ai-addon',
    name: 'Chat AI',
    blurb: "Handles website chats when you can't.",
    monthlyAmount: 29,
    envVar: 'STRIPE_PRICE_CHAT_AI_MONTHLY',
  },
  ppc_management: {
    id: 'ppc_management',
    tag: 'ppc-management-addon',
    name: 'PPC Management',
    blurb: ppcManagement.addonBlurb,
    monthlyAmount: ppcManagement.monthlyAmount,
    envVar: 'STRIPE_PRICE_PPC_MONTHLY',
  },
} as const

export type AddonId = keyof typeof ADDONS

export type PublicAddon = {
  id: AddonId
  name: string
  blurb: string
  monthlyAmount: number
}

const ADDON_IDS = Object.keys(ADDONS) as AddonId[]

export function isAddonId(value: unknown): value is AddonId {
  return typeof value === 'string' && value in ADDONS
}

export function parseAddonList(value: unknown): AddonId[] {
  const raw = Array.isArray(value)
    ? value
    : typeof value === 'string'
      ? value.split(',')
      : []
  const ids: AddonId[] = []
  for (const item of raw) {
    const id = typeof item === 'string' ? item.trim() : ''
    if (!isAddonId(id) || ids.includes(id)) continue
    ids.push(id)
  }
  return ids
}

export function addonTags(ids: readonly AddonId[]): string[] {
  return ids.map((id) => ADDONS[id].tag)
}

export function addonListParam(ids: readonly AddonId[]): string {
  return ids.join(',')
}

export type ChargePlan = {
  /** Amount Stripe Checkout collects in the first session. */
  checkoutDollars: number
  /** Amount billed immediately on the separate monthly subscription. */
  separateAddonDollars: number
  /** What the customer is charged today across both subscriptions. */
  dueToday: number
}

export function chargePlan(interval: 'month' | 'year', addons: readonly AddonId[]): ChargePlan {
  const core = interval === 'year' ? pricingPlan.annualAmount : pricingPlan.monthlyAmount
  const addonMonthly = addons.reduce((sum, id) => sum + ADDONS[id].monthlyAmount, 0)
  const separateAddonDollars = interval === 'year' ? addonMonthly : 0
  const checkoutDollars = interval === 'year' ? core : core + addonMonthly
  return {
    checkoutDollars,
    separateAddonDollars,
    dueToday: checkoutDollars + separateAddonDollars,
  }
}

export function publicAddons(): PublicAddon[] {
  const available: PublicAddon[] = []
  for (const id of ADDON_IDS) {
    const addon = ADDONS[id]
    const priceId = process.env[addon.envVar]
    if (!priceId) continue
    available.push({
      id,
      name: addon.name,
      blurb: addon.blurb,
      monthlyAmount: addon.monthlyAmount,
    })
  }
  return available
}

export function configuredAddonIds(requested: readonly AddonId[]): AddonId[] {
  return requested.filter((id) => Boolean(process.env[ADDONS[id].envVar]))
}

export function isAddonConfigured(id: AddonId): boolean {
  return Boolean(process.env[ADDONS[id].envVar])
}

export function addonPriceId(id: AddonId): string | null {
  const value = process.env[ADDONS[id].envVar]
  return value && value.length > 0 ? value : null
}

export function knownAddonPriceIds(): Record<AddonId, string | null> {
  const prices = {} as Record<AddonId, string | null>
  for (const id of ADDON_IDS) {
    prices[id] = addonPriceId(id)
  }
  return prices
}

/** Zod-friendly tuple of every AddonId, derived from ADDONS. */
export function addonIdEnumValues(): [AddonId, ...AddonId[]] {
  const [first, ...rest] = ADDON_IDS
  if (!first) {
    throw new Error('ADDONS must define at least one add-on')
  }
  return [first, ...rest]
}
