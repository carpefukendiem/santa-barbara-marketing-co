import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { PricingCard } from '@/components/pricing/PricingCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { pricingPlan } from '@/data/pricing';
import { primaryCta } from '@/data/navigation';

export const metadata: Metadata = buildMetadata({
  title: 'Pricing | Santa Barbara Marketing Co.',
  description:
    'One monthly rate for the 805 System — website, Local SEO, follow-up, and missed-call text back. $297/mo, or $2,970/yr with 2 months free. Book a free call to start.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ])}
      />
      <PageHero
        variant="simple"
        eyebrow="Pricing"
        title="One rate for the system."
        subhead="Website, Local SEO, review requests, and follow-up under one monthly number. $297/mo, or $2,970/yr with 2 months free. Book a free call and we will look at your listing and site. Google Ads media and print production stay separate."
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { label: 'Pricing' },
        ]}
        primaryCta={null}
        compact
      />

      <Section bg="cream">
        <PricingCard />
      </Section>

      <Section bg="navy">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-eyebrow text-cream/50">The 805 System</p>
            <Heading as="h2" className="mt-4 !text-cream">
              What is in the monthly rate.
            </Heading>
          </div>
          <ul className="divide-y divide-cream/15">
            {pricingPlan.included.map((item) => (
              <li key={item.title} className="py-6">
                <Link href={item.href} className="font-display text-2xl text-cream hover:text-ochre">
                  {item.title}
                </Link>
                <p className="mt-2 text-cream/70">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section bg="cream">
        <p className="text-eyebrow text-stone">Outside the system</p>
        <Heading as="h2" className="mt-4">
          Other work, quoted separately.
        </Heading>
        <ul className="mt-10 divide-y divide-rule">
          {pricingPlan.extras.map((item) => (
            <li key={item.title} className="py-6">
              <Link href={item.href} className="font-display text-2xl text-ink hover:text-tile">
                {item.title}
              </Link>
              {item.note ? <p className="mt-2 text-stone">{item.note}</p> : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section bg="tile">
        <p className="text-eyebrow text-cream/60">How it starts</p>
        <Heading as="h2" className="mt-4 !text-cream">
          What working together looks like.
        </Heading>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {pricingPlan.steps.map((step, index) => (
            <div key={step.title} className="border-l border-cream/30 pl-6">
              <p className="font-display text-5xl font-light text-cream/40">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-display text-2xl text-cream">{step.title}</h3>
              <p className="mt-3 text-cream/80">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button href={primaryCta.href} className="!bg-cream !text-tile">
            {primaryCta.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
