import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { primaryCta } from '@/data/navigation';
import { site } from '@/data/site';
import { CheckoutRecap } from '@/components/get-started/CheckoutRecap';
import { PurchaseTracker } from '@/components/analytics/PurchaseTracker';
import { loadPurchaseSummary } from '@/lib/loadPurchaseSummary';

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'You are in | Santa Barbara Marketing Co.',
    description:
      'Payment received for the Local Lead Plan. We enroll you from the payment, then email next steps.',
    path: '/get-started/started',
    noIndex: true,
  }),
};

type StartedPageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function GetStartedCompletePage({ searchParams }: StartedPageProps) {
  const { session_id: sessionId } = await searchParams;
  const summary = sessionId ? await loadPurchaseSummary(sessionId) : null;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Get Started', path: '/get-started' },
          { name: 'Started', path: '/get-started/started' },
        ])}
      />
      <PageHero
        variant="simple"
        eyebrow="The Local Lead Plan"
        title="You are in."
        subhead="Stripe confirmed the payment. Enrollment runs from that event, not from this page, so a dropped connection after checkout does not lose you. We email next steps to the address you paid with."
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/get-started', label: 'Get Started' },
          { label: 'Started' },
        ]}
        primaryCta={null}
        compact
      />
      <Section bg="cream">
        {summary ? (
          <>
            <PurchaseTracker summary={summary} />
            <CheckoutRecap summary={summary} />
          </>
        ) : null}
        <Heading>What happens next</Heading>
        <ol className="mt-10 max-w-2xl space-y-8">
          <li>
            <p className="font-mono text-sm text-tile">01</p>
            <p className="mt-2 font-display text-3xl">You are tagged as a paid client</p>
            <p className="mt-3 text-stone">
              The payment creates or updates your contact in our system with the Local
              Lead Plan you chose, including any add-ons.
            </p>
          </li>
          <li>
            <p className="font-mono text-sm text-tile">02</p>
            <p className="mt-2 font-display text-3xl">We look at the listing and the site</p>
            <p className="mt-3 text-stone">
              Same intake as a free call, minus the pitch. If you want that conversation
              on the calendar, book it.
            </p>
          </li>
          <li>
            <p className="font-mono text-sm text-tile">03</p>
            <p className="mt-2 font-display text-3xl">Receipts live in email</p>
            <p className="mt-3 text-stone">
              Stripe sends the receipt. Billing continues monthly or annually until you
              cancel. Questions go to {site.email}.
            </p>
          </li>
        </ol>
        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          <Button variant="ghost" href="/pricing">
            Back to pricing
          </Button>
        </div>
      </Section>
    </>
  );
}
