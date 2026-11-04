import Stripe from 'stripe';
import { pricingPlan } from '@/data/pricing';

const STRIPE_API_VERSION = '2026-10-28.endive' as const;

export type CheckoutInterval = 'month' | 'year';

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key, { apiVersion: STRIPE_API_VERSION });
}

function lookupKey(interval: CheckoutInterval): string {
  return interval === 'year' ? '805_system_annual' : '805_system_monthly';
}

async function getOrCreateProduct(stripe: Stripe): Promise<string> {
  const existing = await stripe.products.list({
    active: true,
    limit: 20,
  });
  const match = existing.data.find(
    (product) => product.metadata.plan === '805-system',
  );
  if (match) return match.id;

  const product = await stripe.products.create({
    name: pricingPlan.name,
    description:
      'Website, Local SEO, review requests, missed-call follow-up, and on-site SEO as one system.',
    metadata: { plan: '805-system' },
  });
  return product.id;
}

export async function getOrCreatePriceId(
  stripe: Stripe,
  interval: CheckoutInterval,
): Promise<string> {
  const fromEnv =
    interval === 'year'
      ? process.env.STRIPE_PRICE_ANNUAL
      : process.env.STRIPE_PRICE_MONTHLY;
  if (fromEnv) return fromEnv;

  const key = lookupKey(interval);
  const listed = await stripe.prices.list({
    lookup_keys: [key],
    active: true,
    limit: 1,
  });
  if (listed.data[0]) return listed.data[0].id;

  const productId = await getOrCreateProduct(stripe);
  const unitAmount =
    interval === 'year'
      ? pricingPlan.annualAmount * 100
      : pricingPlan.monthlyAmount * 100;

  const price = await stripe.prices.create({
    product: productId,
    currency: 'usd',
    unit_amount: unitAmount,
    recurring: { interval },
    lookup_key: key,
    transfer_lookup_key: true,
    metadata: { plan: '805-system', interval },
  });
  return price.id;
}

export function checkoutInterval(
  value: unknown,
): CheckoutInterval | null {
  if (value === 'month' || value === 'year') return value;
  return null;
}
