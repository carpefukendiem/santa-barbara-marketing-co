import Image from 'next/image';
import Link from 'next/link';
import { Accordion } from '@/components/ui/Accordion';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBadge } from '@/components/ui/IconBadge';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { GrowthPlanForm } from '@/components/forms/GrowthPlanForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { IconDiscover, IconExecute, IconStrategize } from '@/components/icons';
import { growthPlanFaqs } from '@/data/faqs';
import { decor } from '@/data/images';
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
    icon: IconDiscover,
    bg: 'var(--sbmc-navy)',
  },
  {
    title: 'We write the plan',
    body: `A person writes it, ${site.growthPlanTurnaround}. It is not a generic audit PDF with your logo dropped on the cover.`,
    icon: IconStrategize,
    bg: 'var(--sbmc-teal)',
  },
  {
    title: 'We walk through it',
    body: 'A 20-minute call. No contract attached to the document. If it is useful, we talk about what to run first. If it is not, you keep it.',
    icon: IconExecute,
    bg: 'var(--sbmc-orange)',
  },
];

function CheckGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0 text-sbmc-teal"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12.5 9.5 17 19 7" />
    </svg>
  );
}

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
      <Section className="relative overflow-hidden bg-sbmc-cream">
        <Image
          src={decor.palmTree.src}
          alt=""
          width={decor.palmTree.width}
          height={decor.palmTree.height}
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 bottom-0 hidden w-56 opacity-[0.12] lg:block"
        />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:items-start">
            <div>
              <SectionEyebrow align="left">Free 805 Growth Plan</SectionEyebrow>
              <Heading as="h1" size="lg" className="mt-4">
                Get Your Free 805 Growth Plan
              </Heading>
              <p className="mt-5 max-w-[52ch] text-body-lg text-sbmc-ink">
                A written look at your search visibility, the competitors in
                your category, the gaps that are costing you calls, and a
                90-day priority list. Delivered {site.growthPlanTurnaround} by
                a person. Then a short call. No obligation.
              </p>
              <p className="mt-8 text-eyebrow text-sbmc-teal">What you get</p>
              <ul className="mt-4 space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex gap-3 text-body-lg text-sbmc-ink">
                    <CheckGlyph />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-eyebrow text-sbmc-teal">
                What happens next
              </p>
              <ol className="mt-6 space-y-6">
                {nextSteps.map((step) => (
                  <li key={step.title} className="flex gap-4">
                    <IconBadge
                      background={step.bg}
                      size={44}
                      glyphClassName="text-white"
                    >
                      <step.icon size={20} />
                    </IconBadge>
                    <div>
                      <h2 className="font-sans text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-sbmc-navy">
                        {step.title}
                      </h2>
                      <p className="mt-1 text-body-sm text-sbmc-ink-muted">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-10 max-w-[48ch] text-body-sm text-sbmc-ink-muted">
                No credit card. No setup fee. We will not add you to a drip
                sequence of “just checking in.” If you say you are not moving
                forward, that is the end of the sales conversation.
              </p>
            </div>
            <Card className="p-6 md:sticky md:top-28 md:p-8">
              <p className="text-eyebrow text-sbmc-teal">Request the plan</p>
              <p className="mt-2 text-heading-sm">Takes a few minutes</p>
              <div className="mt-6">
                <GrowthPlanForm />
              </div>
            </Card>
          </div>
        </Container>
      </Section>
      <Section className="bg-sbmc-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <SectionEyebrow align="left">About the offer</SectionEyebrow>
              <Heading className="mt-4">Growth Plan questions</Heading>
              <p className="mt-4 text-body-sm text-sbmc-ink-muted">
                More on{' '}
                <Link href="/services" className="font-medium text-sbmc-teal">
                  services
                </Link>{' '}
                and how we{' '}
                <Link href="/work" className="font-medium text-sbmc-teal">
                  measure work
                </Link>
                .
              </p>
            </div>
            <Accordion items={growthPlanFaqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}
