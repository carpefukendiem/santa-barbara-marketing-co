import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { PricingCard } from '@/components/pricing/PricingCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { pricingPlan } from '@/data/pricing';
import { ppcManagement } from '@/data/ppc-management';
import { publicAddons } from '@/lib/addons';
import { formatUsd } from '@/lib/utils';
import { CancelBanner } from '@/components/get-started/CancelBanner';
import { StickyEnrollBar } from '@/components/get-started/StickyEnrollBar';
import { primaryCta } from '@/data/navigation';

type GetStartedPageProps = {
  searchParams: Promise<{ checkout?: string }>;
};

export const metadata: Metadata = buildMetadata({
  title: 'Get Started',
  description:
    'Enroll in the Local Lead Plan from this page. $297/mo, or $2,970/yr with 2 months free. Optional Voice AI, Chat AI, and PPC Management are separate. Payment enrolls you automatically.',
  path: '/get-started',
});

export default async function GetStartedPage({ searchParams }: GetStartedPageProps) {
  const { checkout } = await searchParams;
  return (
    <>
      {checkout === 'cancelled' ? <CancelBanner href={primaryCta.href} /> : null}
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Get Started', path: '/get-started' },
        ])}
      />
      <PageHero
        variant="simple"
        eyebrow="Get Started"
        title="Enroll in the Local Lead Plan."
        subhead="Website, Local SEO, review requests, and missed-call text back. $297/mo, or $2,970/yr with 2 months free. Add-ons are optional and not included. Rather talk first? Book a call."
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { label: 'Get Started' },
        ]}
        primaryCta={null}
        compact
        disableReveal
        align="start"
        tightMobile
        overlay={checkout !== 'cancelled'}
        rightSlot={
          <div className="lg:sticky lg:top-8 space-y-4">
            <PricingCard
              variant="checkout"
              cancelled={checkout === 'cancelled'}
              addons={publicAddons()}
            />
            <div className="rounded-xl border border-cream/20 bg-navy/80 px-4 py-4 text-left text-sm text-cream/80">
              <p className="font-medium text-cream">
                {ppcManagement.name} · {formatUsd(ppcManagement.monthlyAmount)}/mo
              </p>
              <p className="mt-2">{ppcManagement.addonBlurb}</p>
              <p className="mt-2">
                Display only on this page (not in checkout yet). After you enroll,
                ask us to add it, or{' '}
                <Link href={primaryCta.href} className="text-ochre underline">
                  book a 20-Minute Call
                </Link>{' '}
                for standalone. See{' '}
                <Link href={ppcManagement.href} className="text-ochre underline">
                  Google Ads management
                </Link>
                .
              </p>
            </div>
          </div>
        }
      />

      <Section bg="navy">
        <p className="text-eyebrow text-cream/50">What you get</p>
        <Heading as="h2" className="mt-4 !text-cream">
          Same system. You skip the pitch.
        </Heading>
        <ul className="mt-10 max-w-2xl divide-y divide-cream/15">
          {pricingPlan.included.map((item) => (
            <li key={item.title} className="py-5">
              <p className="font-display text-2xl text-cream">{item.title}</p>
              <p className="mt-2 text-cream/70">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <StickyEnrollBar targetId="pricing-start-cta" ctaHref={primaryCta.href} />
    </>
  );
}
