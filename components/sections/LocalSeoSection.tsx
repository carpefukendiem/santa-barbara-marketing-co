import Link from 'next/link';
import { Award, Check, MapPin, Target } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { IconCircle } from '@/components/ui/IconCircle';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

const tiles = [
  {
    title: 'Proximity',
    icon: MapPin,
    body: 'Google weighs proximity, prominence, and relevance. Proximity is why a Goleta pin struggles to win downtown Santa Barbara searches.',
  },
  {
    title: 'Prominence',
    icon: Award,
    body: 'Prominence is why a newer listing with thin reviews loses to a business that has been mentioned, reviewed, and linked for years. Review velocity beats a frozen star count.',
  },
  {
    title: 'Relevance',
    icon: Target,
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
    <Section bg="navy">
      <Reveal>
        <Eyebrow dark>How local search actually works here</Eyebrow>
        <Heading className="mt-4 max-w-4xl !text-white">
          Most of Your Customers Decide on a Phone, in About Ten Seconds.
        </Heading>
        <p className="mt-6 max-w-3xl text-lg text-white/80">
          The Map Pack is the short list of businesses Google puts on the
          map for a local query. Organic results sit below it. For a
          plumber, a dentist, or a restaurant, the map usually gets the
          tap. Organic still matters for research-heavy searches and for
          queries Google does not treat as local.
        </p>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {tiles.map((tile) => (
            <Card key={tile.title} dark className="p-6">
              <IconCircle icon={tile.icon} />
              <h3 className="mt-5 font-display text-xl text-white">{tile.title}</h3>
              <p className="mt-3 text-white/75">{tile.body}</p>
            </Card>
          ))}
        </div>
        <h3 className="mt-14 font-display text-xl text-white">What we actually do</h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {actions.map((item) => (
            <li key={item} className="flex gap-3 text-white/80">
              <Check size={18} className="mt-1 shrink-0 text-tile" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-white/70">
          Read the full explanation in{' '}
          <Link href="/resources/local-seo-santa-barbara" className="text-white underline underline-offset-4">
            Local SEO in Santa Barbara
          </Link>
          , or see how we run the work on{' '}
          <Link href="/services/local-seo" className="text-white underline underline-offset-4">
            Local SEO services
          </Link>
          .
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
