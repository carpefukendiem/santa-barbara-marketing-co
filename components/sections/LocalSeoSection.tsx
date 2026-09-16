import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

const tiles = [
  {
    title: 'Proximity',
    body: 'Google weighs proximity, prominence, and relevance. Proximity is why a Goleta pin struggles to win downtown Santa Barbara searches.',
  },
  {
    title: 'Prominence',
    body: 'Prominence is why a newer listing with thin reviews loses to a business that has been mentioned, reviewed, and linked for years. Review velocity beats a frozen star count.',
  },
  {
    title: 'Relevance',
    body: 'Relevance is whether your categories, pages, and photos match what the person typed. We will tell you which of the three levers is actually blocking you.',
  },
];

const actions = [
  'Set the Google Business Profile so categories and service area match reality.',
  'Write pages that support the queries you can win from your pin.',
  'Build a review request process that is honest and easy to use.',
  'Fix the technical issues that keep Google from trusting the site.',
  'Track calls and forms so we know which searches produced work.',
  'Skip doorway neighborhood clones that only swap a city name.',
];

export function LocalSeoSection() {
  return (
    <Section>
      <Reveal>
        <Heading className="max-w-none">
          Most of Your Customers Decide on a Phone,
          <br className="hidden lg:block" /> in About Ten Seconds.
        </Heading>
        <p className="mt-8 max-w-3xl text-lg text-ink lg:col-span-6">
          The Map Pack is the short list of businesses Google puts on the map for
          a local query. Organic results sit below it. For a plumber, a dentist,
          or a restaurant, the map usually gets the tap. Organic still matters
          for research-heavy searches and for queries Google does not treat as
          local.
        </p>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiles.map((tile) => (
            <div key={tile.title} className="border-t-2 border-tile pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-tile">
                {tile.title}
              </p>
              <p className="mt-4 text-ink">{tile.body}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-16 font-display text-2xl">What we actually do</h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {actions.map((item) => (
            <li key={item} className="flex gap-3 text-ink">
              <span className="mt-2 h-2 w-2 shrink-0 bg-[--ochre]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-mono text-sm uppercase tracking-[0.16em]">
          <Link href="/resources/local-seo-santa-barbara" className="underline underline-offset-4">
            Local SEO in Santa Barbara
          </Link>
          {' · '}
          <Link href="/services/local-seo" className="underline underline-offset-4">
            Local SEO services
          </Link>
        </p>
        <div className="mt-6">
          <Button variant="ghost" href="/services/local-seo">
            Local SEO services
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
