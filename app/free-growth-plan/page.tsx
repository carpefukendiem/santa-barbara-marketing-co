import Link from 'next/link';
import { Check } from 'lucide-react';
import { FAQAccordion } from '@/components/ui/Accordion';
import { Card } from '@/components/ui/Card';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { Timeline } from '@/components/ui/Timeline';
import { GrowthPlanForm } from '@/components/forms/GrowthPlanForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { growthPlanFaqs } from '@/data/faqs';
import { site } from '@/data/site';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Get a Free 805 Growth Plan',
  description:
    'Get a written 805 Growth Plan: search visibility, competitor gaps, and a 90-day priority list, delivered within three business days. No contract.',
  path: '/free-growth-plan',
});

const deliverables = [
  'A review of how you currently show up in Google Search and Maps',
  'A look at competitors in the same category in your city',
  'The specific gaps we found, written in plain language',
  'A prioritized 90-day plan, plus a 20-minute call to walk through it',
];

const nextSteps = [
  {
    title: 'You send the basics',
    body: 'Name, business, city, and what you want more of. Website and Google access help. We will note what we could not see.',
  },
  {
    title: 'We write the plan',
    body: `A person writes it, ${site.growthPlanTurnaround}. It is not a generic audit PDF with your logo dropped on the cover.`,
  },
  {
    title: 'We walk through it',
    body: 'A 20-minute call. No contract attached to the document. If it is useful, we talk about what to run first. If it is not, you keep it.',
  },
];

const planRows = ['w-[88%]', 'w-[72%]', 'w-[60%]'];

export default function FreeGrowthPlanPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Free Growth Plan', path: '/free-growth-plan' },
          ]),
          faqPageSchema(growthPlanFaqs),
        ]}
      />
      <PageHero
        variant="simple"
        eyebrow="Free 805 Growth Plan"
        title="Get Your Free 805 Growth Plan"
        accent="Growth"
        subhead={`A written look at your search visibility, the competitors in your category, the gaps that are costing you calls, and a 90-day priority list. Delivered ${site.growthPlanTurnaround} by a person. Then a short call. No obligation.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Free Growth Plan' },
        ]}
      />

      <Section bg="sand">
        <Reveal>
          <Eyebrow>What you get</Eyebrow>
          <Timeline className="mt-10" steps={nextSteps} />
          <ul className="mt-12 space-y-3">
            {deliverables.map((item) => (
              <li key={item} className="flex gap-3 text-lg text-ink">
                <Check size={18} className="mt-1 shrink-0 text-ocean" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-[48ch] text-stone">
            No credit card. No setup fee. We will not add you to a drip
            sequence of “just checking in.” If you say you are not moving
            forward, that is the end of the sales conversation.
          </p>
        </Reveal>
      </Section>

      <Section bg="white">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
            <Card hover={false} className="p-6 md:p-8">
              <p className="text-eyebrow text-ocean">Request the plan</p>
              <p className="mt-2 text-h3 text-navy">Takes a few minutes</p>
              <div className="mt-6">
                <GrowthPlanForm />
              </div>
            </Card>
            <Card hover={false} className="p-5">
              <p className="text-xs font-medium tracking-[0.18em] text-ocean uppercase">
                Sample 90-Day Growth Plan
              </p>
              <ul className="mt-4 space-y-3">
                {planRows.map((width) => (
                  <li key={width} className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                      <Check size={12} aria-hidden="true" />
                    </span>
                    <span className={`h-2 rounded bg-sand ${width}`} />
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-stone">
                Written by a person. Delivered in 3 business days.
              </p>
            </Card>
          </div>
        </Reveal>
      </Section>

      <Section bg="sand">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <Eyebrow>About the offer</Eyebrow>
              <Heading className="mt-4">Growth Plan questions</Heading>
              <p className="mt-4 text-stone">
                More on{' '}
                <Link href="/services" className="font-medium text-ocean underline underline-offset-4">
                  services
                </Link>{' '}
                and how we{' '}
                <Link href="/work" className="font-medium text-ocean underline underline-offset-4">
                  measure work
                </Link>
                .
              </p>
            </div>
            <FAQAccordion items={growthPlanFaqs} />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
