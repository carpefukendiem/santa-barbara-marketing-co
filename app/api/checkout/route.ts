import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  ADDONS,
  addonListParam,
  addonPriceId,
  chargePlan,
  configuredAddonIds,
  parseAddonList,
} from '@/lib/addons';
import { attributionMetadata, resolveAttribution } from '@/lib/attribution';
import { recordCheckoutStart } from '@/lib/ghl';
import { clientIp, rateLimit } from '@/lib/rateLimit';
import { checkoutInterval, getOrCreatePriceId, getStripe } from '@/lib/stripe';
import { absoluteUrl } from '@/lib/utils';

export const runtime = 'nodejs';

const INTEGRATION_IDENTIFIER = 'sbmc-pricing-kjwpmrqa';

const bodySchema = z.object({
  interval: z.enum(['month', 'year']),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email(),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  addons: z.array(z.enum(['voice_ai', 'chat_ai'])).optional(),
  attribution: z.record(z.string(), z.string()).optional(),
});

export async function POST(request: Request) {
  const ip = clientIp(request.headers);
  if (!rateLimit(`checkout:${ip}`)) {
    return NextResponse.json(
      { ok: false, error: 'Too many attempts. Try again shortly.' },
      { status: 429 },
    );
  }

  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Checkout is not live yet. Book a free call and we will enroll you from there.',
      },
      { status: 503 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const interval = checkoutInterval(
    json && typeof json === 'object' && 'interval' in json
      ? (json as { interval?: unknown }).interval
      : null,
  );
  if (!interval) {
    return NextResponse.json({ ok: false, error: 'Choose monthly or annually.' }, { status: 400 });
  }
  const parse = bodySchema.safeParse(json);
  if (!parse.success) {
    return NextResponse.json(
      { ok: false, error: 'Enter your name and a valid email.' },
      { status: 400 },
    );
  }
  const { name, email, phone } = parse.data;
  const addons = configuredAddonIds(parseAddonList(parse.data.addons));
  const attribution = resolveAttribution(request.headers.get('cookie'), parse.data.attribution);
  const charges = chargePlan(interval, addons);

  try {
    const priceId = await getOrCreatePriceId(stripe, interval);
    const lineItems: Array<{ price: string; quantity: number }> = [{ price: priceId, quantity: 1 }];
    if (interval === 'month') {
      for (const id of addons) {
        const addonPrice = addonPriceId(id);
        if (!addonPrice) continue;
        lineItems.push({ price: addonPrice, quantity: 1 });
      }
    }

    try {
      await recordCheckoutStart({
        name,
        email,
        phone: phone || undefined,
        addons,
        attribution,
      });
    } catch {
      // logged in the helper; continue to Stripe
    }

    const origin = absoluteUrl('/');
    const metadata = {
      plan: '805-system',
      offer: 'local_lead_plan',
      interval,
      pre_name: name,
      pre_phone: phone || '',
      addons: addonListParam(addons),
      addon_billing: interval === 'year' && addons.length > 0 ? 'separate_monthly' : 'included',
      due_today: String(charges.dueToday),
      ...attributionMetadata(attribution),
    };
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: lineItems,
      success_url: `${origin}/get-started/started?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/get-started?checkout=cancelled`,
      billing_address_collection: 'required',
      phone_number_collection: { enabled: true },
      custom_fields: [
        {
          key: 'business_name',
          label: { type: 'custom', custom: 'Business name' },
          type: 'text',
          optional: true,
        },
      ],
      customer_email: email,
      metadata,
      subscription_data: {
        metadata,
      },
      client_reference_id: `805-system-${interval}`,
      integration_identifier: INTEGRATION_IDENTIFIER,
    });

    if (!session.url) {
      return NextResponse.json(
        { ok: false, error: 'Checkout could not start. Email us and we will send a link.' },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      url: session.url,
      dueToday: charges.dueToday,
      currency: 'USD',
      addons: addons.map((id) => ADDONS[id].id),
    });
  } catch (error) {
    console.error('[checkout] session create failed', error);
    return NextResponse.json(
      { ok: false, error: 'Checkout could not start. Book a free call and we will enroll you from there.' },
      { status: 502 },
    );
  }
}
