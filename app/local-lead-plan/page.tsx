import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { pricingPlan } from '@/data/pricing';
import { primaryCta } from '@/data/navigation';
import { formatUsd } from '@/lib/utils';

export const metadata: Metadata = buildMetadata({
  title: 'The Local Lead Plan',
  description:
    'The Local Lead Plan is $297/mo, or $2,970/yr with 2 months free. Website, Local SEO, review requests, and follow-up for Santa Barbara businesses. Optional add-ons are separate.',
  path: '/local-lead-plan',
});

export default function LocalLeadPlanPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'The Local Lead Plan', path: '/local-lead-plan' },
        ])}
      />
      <PageHero
        variant="simple"
        eyebrow="The Local Lead Plan"
        title="One plan for getting found and followed up with."
        subhead={`${formatUsd(pricingPlan.monthlyAmount)}/mo, or ${formatUsd(pricingPlan.annualAmount)}/yr with 2 months free. You save ${formatUsd(pricingPlan.monthlyAmount * 12 - pricingPlan.annualAmount)} versus paying monthly. Voice AI and Chat AI are optional and are not included.`}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { label: 'The Local Lead Plan' },
        ]}
        primaryCta={{ href: '/get-started', label: 'Get Started' }}
        secondaryCta={primaryCta}
        compact
      />
      <Section bg="cream">
        <Heading as="h2">What the plan includes</Heading>
        <ul className="mt-10 max-w-2xl divide-y divide-rule">
          {pricingPlan.included.map((item) => (
            <li key={item.title} className="py-6">
              <Link href={item.href} className="font-display text-2xl text-ink hover:text-tile">
                {item.title}
              </Link>
              <p className="mt-2 text-stone">{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Button href="/get-started">Get Started</Button>
          <Button variant="ghost" href={primaryCta.href}>
            Rather talk first? Book a call
          </Button>
        </div>
      </Section>
    </>
  );
}
