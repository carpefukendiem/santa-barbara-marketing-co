import type Stripe from 'stripe'
import { addonPriceId } from '@/lib/addons'
import { getStripe } from '@/lib/stripe'
import {
  summarizeCheckoutSession,
  type CheckoutSessionSnapshot,
  type PurchaseSummary,
} from '@/lib/purchaseSummary'

function priceIdOf(price: Stripe.LineItem['price']): string | null {
  if (!price) return null
  return typeof price === 'string' ? price : price.id
}

export function snapshotFromSession(session: Stripe.Checkout.Session): CheckoutSessionSnapshot {
  const lines = session.line_items?.data ?? []
  return {
    id: session.id,
    amountTotal: session.amount_total,
    paymentStatus: session.payment_status,
    currency: session.currency,
    metadata: session.metadata,
    lineItems: lines.map((line) => ({
      priceId: priceIdOf(line.price),
      amountTotal: line.amount_total,
    })),
  }
}

export async function loadPurchaseSummary(sessionId: string): Promise<PurchaseSummary | null> {
  if (!/^cs_[A-Za-z0-9_]+$/.test(sessionId)) return null
  const stripe = getStripe()
  if (!stripe) return null
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items.data.price'],
    })
    return summarizeCheckoutSession(snapshotFromSession(session), {
      voice: addonPriceId('voice_ai'),
      chat: addonPriceId('chat_ai'),
    })
  } catch (error) {
    console.error('[checkout] session lookup failed', error)
    return null
  }
}
