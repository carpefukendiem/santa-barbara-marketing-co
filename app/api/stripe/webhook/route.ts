import { NextResponse } from 'next/server';
import type Stripe from 'stripe';
import { enrollPaidClient, type PaidEnrollment } from '@/lib/ghl';
import { getStripe, type CheckoutInterval } from '@/lib/stripe';

export const runtime = 'nodejs';

function intervalFrom(
  value: string | null | undefined,
): CheckoutInterval {
  return value === 'year' ? 'year' : 'month';
}

function customBusinessName(session: Stripe.Checkout.Session): string {
  const field = session.custom_fields?.find((item) => item.key === 'business_name');
  const text = field?.text?.value?.trim();
  return text || session.customer_details?.name || 'New 805 System client';
}

async function enrollFromSession(
  session: Stripe.Checkout.Session,
  status: PaidEnrollment['status'],
): Promise<void> {
  if (status === 'paid' && session.payment_status === 'unpaid') return;
  const email = session.customer_details?.email ?? session.customer_email;
  if (!email) {
    console.error('[stripe] session missing email');
    return;
  }
  const subscriptionId =
    typeof session.subscription === 'string'
      ? session.subscription
      : session.subscription?.id;
  const customerId =
    typeof session.customer === 'string' ? session.customer : session.customer?.id;

  await enrollPaidClient({
    name: session.customer_details?.name || email,
    email,
    phone: session.customer_details?.phone || undefined,
    businessName: customBusinessName(session),
    interval: intervalFrom(session.metadata?.interval),
    stripeCustomerId: customerId,
    stripeSubscriptionId: subscriptionId,
    status,
  });
}

async function sessionFromInvoice(
  stripe: Stripe,
  invoice: Stripe.Invoice,
): Promise<Stripe.Checkout.Session | null> {
  const customerId =
    typeof invoice.customer === 'string' ? invoice.customer : invoice.customer?.id;
  if (!customerId) return null;
  const sessions = await stripe.checkout.sessions.list({
    customer: customerId,
    limit: 1,
  });
  return sessions.data[0] ?? null;
}

export async function POST(request: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) {
    return NextResponse.json({ error: 'Webhook is not configured.' }, { status: 503 });
  }

  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature.' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const body = await request.text();
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch (error) {
    console.error('[stripe] signature failed', error);
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
      case 'checkout.session.async_payment_succeeded': {
        const session = event.data.object as Stripe.Checkout.Session;
        await enrollFromSession(session, 'paid');
        break;
      }
      case 'checkout.session.async_payment_failed': {
        const session = event.data.object as Stripe.Checkout.Session;
        await enrollFromSession(session, 'failed');
        break;
      }
      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice;
        if (invoice.billing_reason !== 'subscription_cycle') break;
        const session = await sessionFromInvoice(stripe, invoice);
        if (session) await enrollFromSession(session, 'paid');
        break;
      }
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        const invoiceCustomer = invoice.customer;
        const email =
          invoice.customer_email ||
          (invoiceCustomer &&
          typeof invoiceCustomer === 'object' &&
          !invoiceCustomer.deleted
            ? invoiceCustomer.email
            : undefined);
        if (!email) break;
        await enrollPaidClient({
          name: invoice.customer_name || email,
          email,
          businessName: invoice.customer_name || email,
          interval: 'month',
          stripeCustomerId:
            typeof invoice.customer === 'string' ? invoice.customer : invoice.customer?.id,
          status: 'failed',
        });
        break;
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId =
          typeof subscription.customer === 'string'
            ? subscription.customer
            : subscription.customer.id;
        const customer = await stripe.customers.retrieve(customerId);
        if (customer.deleted || !('email' in customer) || !customer.email) break;
        await enrollPaidClient({
          name: customer.name || customer.email,
          email: customer.email,
          phone: customer.phone || undefined,
          businessName: customer.name || customer.email,
          interval: intervalFrom(subscription.metadata?.interval),
          stripeCustomerId: customerId,
          stripeSubscriptionId: subscription.id,
          status: 'cancelled',
        });
        break;
      }
      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge;
        const email = charge.billing_details.email;
        if (!email) break;
        await enrollPaidClient({
          name: charge.billing_details.name || email,
          email,
          businessName: charge.billing_details.name || email,
          interval: 'month',
          stripeCustomerId:
            typeof charge.customer === 'string' ? charge.customer : charge.customer?.id,
          status: 'refunded',
        });
        break;
      }
      case 'charge.dispute.created':
      case 'radar.early_fraud_warning.created': {
        const object = event.data.object as { charge?: string | { id?: string } };
        const chargeId =
          typeof object.charge === 'string' ? object.charge : object.charge?.id;
        if (!chargeId) break;
        const charge = await stripe.charges.retrieve(chargeId);
        const email = charge.billing_details.email;
        if (!email) break;
        await enrollPaidClient({
          name: charge.billing_details.name || email,
          email,
          businessName: charge.billing_details.name || email,
          interval: 'month',
          stripeCustomerId:
            typeof charge.customer === 'string' ? charge.customer : charge.customer?.id,
          status: 'disputed',
        });
        break;
      }
      default:
        break;
    }
  } catch (error) {
    console.error('[stripe] webhook handler failed', error);
    return NextResponse.json({ error: 'Handler failed.' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
