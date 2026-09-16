import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { Timeline } from '@/components/ui/Timeline';
import { primaryCta } from '@/data/navigation';
import { site } from '@/data/site';

export const growthSteps = [
  {
    title: 'Discover',
    body: 'We learn about your business, goals, and market.',
  },
  {
    title: 'Strategize',
    body: 'We build a custom plan for real growth.',
  },
  {
    title: 'Execute',
    body: 'We launch, optimize, and keep moving forward.',
  },
  {
    title: 'Grow',
    body: 'More visibility. More leads. A stronger local business.',
  },
];

export function GrowthSystem() {
  return (
    <Section bg="sand">
      <Reveal>
        <div className="text-center">
          <Eyebrow align="center">The 805 Growth System</Eyebrow>
          <Heading className="mt-4">Simple. Strategic. Built for Results.</Heading>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-stone">
            A 90-day arc with a named deliverable, not a vague promise. Discover,
            plan, launch, and measure against calls, forms, and booked work.
          </p>
        </div>
        <Timeline steps={growthSteps} className="mt-14" />
        <p className="mx-auto mt-10 max-w-[52ch] text-center text-stone">
          The first step is a Free 805 Growth Plan: a written 90-day priority
          list, delivered {site.growthPlanTurnaround}, then a short call to walk
          through it.
        </p>
        <div className="mt-6 text-center">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
        </div>
      </Reveal>
    </Section>
  );
}
