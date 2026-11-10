import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { PricingCard } from '@/components/pricing/PricingCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { pricingPlan } from '@/data/pricing';
import { publicAddons } from '@/lib/addons';
import { CancelBanner } from '@/components/get-started/CancelBanner';
import { StickyEnrollBar } from '@/components/get-started/StickyEnrollBar';
import { primaryCta } from '@/data/navigation';

type GetStartedPageProps = {
  searchParams: Promise<{ checkout?: string }>;
};

export const metadata: Metadata = buildMetadata({
  title: 'Get Started | Santa Barbara Marketing Co.',
  description:
    'Enroll in the Local Lead Plan from this page. $297/mo, or $2,970/yr with 2 months free. Optional Voice AI and Chat AI are separate. Payment enrolls you automatically.',
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
        rightSlot={
          <div className="lg:sticky lg:top-8">
            <PricingCard
              variant="checkout"
              cancelled={checkout === 'cancelled'}
              addons={publicAddons()}
            />
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
