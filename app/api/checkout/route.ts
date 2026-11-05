import { NextResponse } from 'next/server';
import { clientIp, rateLimit } from '@/lib/rateLimit';
import { checkoutInterval, getOrCreatePriceId, getStripe } from '@/lib/stripe';
import { absoluteUrl } from '@/lib/utils';
import { recordCheckoutStart } from '@/lib/ghl';
import { z } from 'zod';

export const runtime = 'nodejs';

const INTEGRATION_IDENTIFIER = 'sbmc-pricing-kjwpmrqa';

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

  const bodySchema = z.object({
    interval: z.enum(['month', 'year']),
    name: z.string().trim().min(2).max(120),
    email: z.string().trim().email(),
    phone: z.string().trim().max(40).optional().or(z.literal('')),
  });
  const parse = bodySchema.safeParse(json);
  const interval = checkoutInterval(
    json && typeof json === 'object' && 'interval' in json
      ? (json as { interval?: unknown }).interval
      : null,
  );
  if (!interval) {
    return NextResponse.json({ ok: false, error: 'Choose monthly or annually.' }, { status: 400 });
  }
  if (!parse.success) {
    return NextResponse.json(
      { ok: false, error: 'Enter your name and a valid email.' },
      { status: 400 },
    );
  }
  const { name, email, phone } = parse.data;

  try {
    const priceId = await getOrCreatePriceId(stripe, interval);
    // Best-effort GHL upsert; never blocks checkout
    try {
      await recordCheckoutStart({ name, email, phone: phone || undefined });
    } catch {
      // logged in the helper; continue to Stripe
    }
    const origin = absoluteUrl('/');
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
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
      metadata: { plan: '805-system', interval, pre_name: name, pre_phone: phone || '' },
      subscription_data: {
        metadata: { plan: '805-system', interval, pre_name: name, pre_phone: phone || '' },
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

    return NextResponse.json({ ok: true, url: session.url });
  } catch (error) {
    console.error('[checkout] session create failed', error);
    return NextResponse.json(
      { ok: false, error: 'Checkout could not start. Book a free call and we will enroll you from there.' },
      { status: 502 },
    );
  }
}
