import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

export function LocalSeoSection() {
  return (
    <Section className="bg-sbmc-cream">
      <Container>
        <SectionEyebrow>How local search actually works here</SectionEyebrow>
        <Heading className="mt-4 text-center">
          Most of Your Customers Decide on a Phone, in About Ten Seconds.
        </Heading>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="measure space-y-5 text-body-lg text-sbmc-ink">
            <p>
              The Map Pack is the short list of businesses Google puts on the
              map for a local query. Organic results sit below it. For a
              plumber, a dentist, or a restaurant, the map usually gets the
              tap. Organic still matters for research-heavy searches and for
              queries Google does not treat as local.
            </p>
            <p>
              Google weighs proximity, prominence, and relevance. Proximity
              is why a Goleta pin struggles to win downtown Santa Barbara
              searches. Prominence is why a newer listing with thin reviews
              loses to a business that has been mentioned, reviewed, and
              linked for years. Relevance is whether your categories, pages,
              and photos match what the person typed.
            </p>
            <p>
              Review velocity beats a frozen star count. A handful of recent,
              specific reviews often helps more than a high average that has
              not moved since 2019. We will not invent a ranking factor
              percentage. We will tell you which of the three levers is
              actually blocking you.
            </p>
            <p>
              Read the full explanation in{' '}
              <Link href="/resources/local-seo-santa-barbara" className="font-medium text-sbmc-teal">
                Local SEO in Santa Barbara
              </Link>
              , or see how we run the work on{' '}
              <Link href="/services/local-seo" className="font-medium text-sbmc-teal">
                Local SEO services
              </Link>
              .
            </p>
          </div>
          <div className="rounded-[12px] border border-sbmc-border bg-sbmc-white p-8 shadow-card">
            <h3 className="text-heading-sm">What we actually do</h3>
            <ul className="mt-5 space-y-3 text-body-sm text-sbmc-ink">
              <li>Set the Google Business Profile so categories and service area match reality.</li>
              <li>Write pages that support the queries you can win from your pin.</li>
              <li>Build a review request process that is honest and easy to use.</li>
              <li>Fix the technical issues that keep Google from trusting the site.</li>
              <li>Track calls and forms so we know which searches produced work.</li>
              <li>Skip doorway neighborhood clones that only swap a city name.</li>
            </ul>
            <div className="mt-8">
              <Button variant="link" href="/services/local-seo">
                Local SEO services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
