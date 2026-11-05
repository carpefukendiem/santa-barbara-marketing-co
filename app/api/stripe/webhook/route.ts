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

function intervalFromRecurring(
  value: Stripe.Price.Recurring.Interval | null | undefined,
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

async function loadCustomerDetails(
  stripe: Stripe,
  invoice: Stripe.Invoice,
): Promise<{ customerId?: string; email?: string; name?: string; phone?: string }> {
  const invoiceCustomer = invoice.customer;
  const customerId =
    typeof invoiceCustomer === 'string' ? invoiceCustomer : invoiceCustomer?.id;
  let email =
    invoice.customer_email ||
    (invoiceCustomer &&
    typeof invoiceCustomer === 'object' &&
    !invoiceCustomer.deleted
      ? invoiceCustomer.email ?? undefined
      : undefined);
  let name = invoice.customer_name || email;
  let phone: string | undefined = undefined;
  if ((!email || !name || !phone) && customerId) {
    const customer = await stripe.customers.retrieve(customerId);
    if (!customer.deleted && 'email' in customer) {
      email = email || customer.email || undefined;
      name = name || customer.name || email || undefined;
      phone = (customer as { phone?: string }).phone || undefined;
    }
  }
  return { customerId, email, name, phone };
}

async function invoiceInterval(
  stripe: Stripe,
  invoice: Stripe.Invoice,
): Promise<CheckoutInterval> {
  const line = invoice.lines?.data?.[0] as unknown as { price?: { recurring?: { interval?: Stripe.Price.Recurring.Interval } } } | undefined;
  const priceRecurring = line?.price?.recurring?.interval ?? null;
  if (priceRecurring) return intervalFromRecurring(priceRecurring);
  // fallback to subscription metadata if needed
  const invAny = invoice as unknown as { subscription?: string | { id?: string } | null };
  const subId =
    typeof invAny.subscription === 'string'
      ? invAny.subscription
      : invAny.subscription?.id;
  if (!subId) return 'month';
  const subscription = await stripe.subscriptions.retrieve(subId);
  const fromMeta = intervalFrom(subscription.metadata?.interval);
  if (fromMeta) return fromMeta;
  const subItem = subscription.items.data[0];
  return intervalFromRecurring(subItem?.price?.recurring?.interval ?? null);
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
        const { customerId, email, name, phone } = await loadCustomerDetails(stripe, invoice);
        const interval = await invoiceInterval(stripe, invoice);
        const subscriptionId =
          typeof (invoice as any).subscription === 'string'
            ? (invoice as any).subscription
            : (invoice as any).subscription?.id;
        if (email) {
          await enrollPaidClient({
            name: name || email,
            email,
            phone,
            businessName: name || email,
            interval,
            stripeCustomerId: customerId,
            stripeSubscriptionId: subscriptionId,
            status: 'paid',
          });
        }
        break;
      }
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        const { customerId, email, name } = await loadCustomerDetails(stripe, invoice);
        const interval = await invoiceInterval(stripe, invoice);
        if (!email) break;
        await enrollPaidClient({
          name: name || email,
          email,
          businessName: name || email,
          interval,
          stripeCustomerId: customerId,
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
        let interval: CheckoutInterval = 'month';
        try {
          const chAny = charge as unknown as { invoice?: string | { id?: string } | null };
          if (chAny.invoice) {
            const invoiceId =
              typeof chAny.invoice === 'string' ? chAny.invoice : chAny.invoice.id;
            if (invoiceId) {
              const invoice = await stripe.invoices.retrieve(invoiceId);
              interval = await invoiceInterval(stripe, invoice);
            }
          }
        } catch {
          // keep default
        }
        await enrollPaidClient({
          name: charge.billing_details.name || email,
          email,
          businessName: charge.billing_details.name || email,
          interval,
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
        let interval: CheckoutInterval = 'month';
        try {
          const chAny = (charge as Stripe.Response<Stripe.Charge>) as unknown as { invoice?: string | { id?: string } | null };
          if (chAny.invoice) {
            const invoiceId =
              typeof chAny.invoice === 'string' ? chAny.invoice : chAny.invoice.id;
            if (invoiceId) {
              const invoice = await stripe.invoices.retrieve(invoiceId);
              interval = await invoiceInterval(stripe, invoice);
            }
          }
        } catch {
          // keep default
        }
        await enrollPaidClient({
          name: charge.billing_details.name || email,
          email,
          businessName: charge.billing_details.name || email,
          interval,
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
