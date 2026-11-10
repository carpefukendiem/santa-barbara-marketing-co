import Stripe from 'stripe';

const STRIPE_API_VERSION = '2026-10-28.endive' as const;

/** Existing live prices. Env vars override these when set. */
export const CORE_PRICE_IDS = {
  month: 'price_1UYAa9CxPOau7mkvKDQqCtw0',
  year: 'price_1UYAYnCxPOau7mkv23BByTvT',
} as const;

export type CheckoutInterval = 'month' | 'year';

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key, { apiVersion: STRIPE_API_VERSION });
}

export async function getOrCreatePriceId(
  stripe: Stripe,
  interval: CheckoutInterval,
): Promise<string> {
  const fromEnv =
    interval === 'year'
      ? process.env.STRIPE_PRICE_ANNUAL
      : process.env.STRIPE_PRICE_MONTHLY;
  const priceId = fromEnv || CORE_PRICE_IDS[interval];
  await stripe.prices.retrieve(priceId);
  return priceId;
}

export function checkoutInterval(
  value: unknown,
): CheckoutInterval | null {
  if (value === 'month' || value === 'year') return value;
  return null;
}
