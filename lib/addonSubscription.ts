import Stripe from 'stripe'
import { addonPriceId, parseAddonList, type AddonId } from '@/lib/addons'

function paymentMethodId(
  value: string | Stripe.PaymentMethod | null | undefined,
): string | undefined {
  if (!value) return undefined
  return typeof value === 'string' ? value : value.id
}

async function paymentMethodForSession(
  stripe: Stripe,
  session: Stripe.Checkout.Session,
): Promise<string | undefined> {
  const subscriptionId =
    typeof session.subscription === 'string' ? session.subscription : session.subscription?.id
  if (subscriptionId) {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    const fromSubscription = paymentMethodId(subscription.default_payment_method)
    if (fromSubscription) return fromSubscription
  }
  const customerId = typeof session.customer === 'string' ? session.customer : session.customer?.id
  if (!customerId) return undefined
  const customer = await stripe.customers.retrieve(customerId)
  if (customer.deleted) return undefined
  return paymentMethodId(customer.invoice_settings.default_payment_method)
}

/**
 * Stripe Checkout cannot mix a yearly price and monthly prices on one subscription.
 * The annual plan is charged in Checkout. Selected add-ons are a second subscription
 * on the same customer and payment method, created once per Checkout session.
 */
export async function ensureSeparateAddonSubscription(
  stripe: Stripe,
  session: Stripe.Checkout.Session,
): Promise<void> {
  if (session.metadata?.addon_billing !== 'separate_monthly') return
  if (session.payment_status !== 'paid') return
  const addons = parseAddonList(session.metadata.addons)
  if (addons.length === 0) return
  const customerId = typeof session.customer === 'string' ? session.customer : session.customer?.id
  if (!customerId) {
    throw new Error('Checkout session is missing a customer for add-on billing.')
  }

  const items: Array<{ price: string }> = []
  for (const id of addons) {
    const price = addonPriceId(id)
    if (!price) {
      console.error('[stripe] add-on price is unset', id)
      return
    }
    items.push({ price })
  }

  const paymentMethod = await paymentMethodForSession(stripe, session)
  const metadata: Record<string, string> = {}
  for (const [key, value] of Object.entries(session.metadata ?? {})) {
    if (typeof value === 'string') metadata[key] = value
  }
  metadata.interval = 'month'
  metadata.addon_subscription = 'true'
  metadata.parent_checkout_session = session.id
  metadata.addons = addons.join(',')

  try {
    await stripe.subscriptions.create(
      {
        customer: customerId,
        items,
        ...(paymentMethod ? { default_payment_method: paymentMethod } : {}),
        metadata,
      },
      { idempotencyKey: `addon-sub-${session.id}` },
    )
  } catch (error) {
    if (
      error instanceof Stripe.errors.StripeConnectionError ||
      error instanceof Stripe.errors.StripeAPIError
    ) {
      throw error
    }
    console.error('[stripe] monthly add-on subscription was not created', error)
  }
}

export function addonIdsFromMetadata(
  metadata: Stripe.Metadata | null | undefined,
): AddonId[] {
  return parseAddonList(metadata?.addons)
}
