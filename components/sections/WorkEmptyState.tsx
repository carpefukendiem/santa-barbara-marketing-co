import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { CtaBand } from '@/components/sections/CtaBand';
import { primaryCta } from '@/data/navigation';

const fields = [
  {
    label: 'Client',
    body: 'The real business name, published only with written permission. No invented shop, no “a local HVAC company” standing in for a client we do not have.',
  },
  {
    label: 'Industry',
    body: 'The vertical the work sat in, so a restaurant owner is not asked to learn from a law firm’s website rebuild.',
  },
  {
    label: 'Location',
    body: 'Santa Barbara, Goleta, Montecito, Carpinteria, or another city we actually served. Geography is part of the result.',
  },
  {
    label: 'Services used',
    body: 'The specific engagements: Local SEO, Google Ads, the website, automation, or a mix. Not a vague “full-service campaign.”',
  },
  {
    label: 'Challenge',
    body: 'What was broken, in plain language. Missed calls, a listing that looked closed, a site that failed on a phone. The problem the owner hired us to fix.',
  },
  {
    label: 'Approach',
    body: 'What we actually did, in the order we did it. The hypothesis, not a stack of channel logos.',
  },
  {
    label: 'What we built',
    body: 'Pages, tracking, profile work, ads structure, follow-up. The artifacts, so another owner can see the shape of the engagement.',
  },
  {
    label: 'Before / after screenshots',
    body: 'Permissioned captures of the listing, the page, or the account. Cropped when we must. Never a mock dashboard.',
  },
  {
    label: 'Metrics',
    body: 'An array of labeled numbers we can verify: calls, form fills, booked jobs, spend, time to first response. Each figure will carry a note on the source and the window.',
  },
  {
    label: 'Timeline',
    body: 'How long the work ran before we were willing to publish. Ninety days is a common horizon for SEO. Ads can show sooner. We will not compress a year into a montage.',
  },
  {
    label: 'Testimonial',
    body: 'Optional, and only with permission. A named person, a real role, a quote about the work. If we do not have that, the case study stands without a quote.',
  },
  {
    label: 'Outcome',
    body: 'What changed for the business, written so it can be checked against the metrics. No inflated language. No implied celebrity clients.',
  },
];

export function WorkEmptyState() {
  return (
    <>
      <Section className="relative overflow-hidden bg-sbmc-navy-deep">
        <Container>
          <SectionEyebrow align="left" className="text-sbmc-aqua [&_span]:bg-white/20">
            Our work
          </SectionEyebrow>
          <Heading as="h1" size="lg" className="mt-4 max-w-3xl text-white">
            We will publish case studies when the numbers are real.
          </Heading>
          <p className="mt-6 max-w-[62ch] text-body-lg text-white/80">
            Santa Barbara Marketing Co. was founded in 2024. We do not have a
            drawer of invented testimonials, and we will not fill this page with
            composite clients, rounded-up percentages, or screenshots from a
            demo account. When a client gives permission and we can verify the
            figures, the study will live here. Until then, this page is the
            standard those studies have to meet.
          </p>
          <div className="mt-8">
            <Button href={primaryCta.href} tone="dark">
              {primaryCta.label}
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-sbmc-cream">
        <Container>
          <SectionEyebrow>What a study will contain</SectionEyebrow>
          <Heading className="mt-4 text-center">
            The fields, before we have a client to put in them
          </Heading>
          <p className="measure-lede mx-auto mt-5 text-center text-body-lg text-sbmc-ink-muted">
            Every published study will use this shape. If a field cannot be
            filled honestly, we omit it rather than decorate it.
          </p>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {fields.map((field, index) => (
              <li key={field.label}>
                <Card className="flex h-full flex-col p-6">
                  <p className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.14em] text-sbmc-teal">
                    {String(index + 1).padStart(2, '0')} · {field.label}
                  </p>
                  <p className="mt-3 text-body-sm text-sbmc-ink-muted">
                    {field.body}
                  </p>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="bg-sbmc-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionEyebrow align="left">Why the page is empty</SectionEyebrow>
              <Heading className="mt-4">
                We will not publish numbers we cannot verify
              </Heading>
            </div>
            <div className="space-y-5 text-body-lg text-sbmc-ink">
              <p>
                Call counts, ranking screenshots, and revenue lifts are easy to
                type. They are harder to stand behind. A rank on one keyword, in
                one zip code, on a Tuesday, is not a result. A “4.9 from 200
                reviews” widget is not a result if we wrote the reviews. A
                percentage with no baseline, no date range, and no source in the
                ad account or the phone log is marketing fiction.
              </p>
              <p>
                When we do publish, the metric will name the window, the source,
                and the caveat. If Google Ads produced calls but the office
                missed half of them, we will say that. If Local SEO moved the
                Map Pack in Goleta and not downtown, we will say that. If the
                only honest sentence is that the site now loads and the phone is
                tappable, that sentence is enough.
              </p>
              <p>
                This is slower than filling a carousel. It is also the same
                standard we use on service pages, location pages, and the Growth
                Plan. You can read those today. The case studies will catch up
                when the work and the permission exist.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <CtaBand
        heading="See how we would measure yours."
        subline="The Growth Plan is a written 90-day list, not a pitch deck of fake results."
      />
    </>
  );
}
