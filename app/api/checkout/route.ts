import { NextResponse } from 'next/server';
import { clientIp, rateLimit } from '@/lib/rateLimit';
import { checkoutInterval, getOrCreatePriceId, getStripe } from '@/lib/stripe';
import { absoluteUrl } from '@/lib/utils';

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

  const interval = checkoutInterval(
    json && typeof json === 'object' && 'interval' in json
      ? (json as { interval?: unknown }).interval
      : null,
  );
  if (!interval) {
    return NextResponse.json({ ok: false, error: 'Choose monthly or annually.' }, { status: 400 });
  }

  try {
    const priceId = await getOrCreatePriceId(stripe, interval);
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
      metadata: { plan: '805-system', interval },
      subscription_data: {
        metadata: { plan: '805-system', interval },
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
