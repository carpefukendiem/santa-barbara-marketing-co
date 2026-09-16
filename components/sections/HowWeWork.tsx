import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { primaryCta } from '@/data/navigation';

export const howWeWorkSteps = [
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

export function HowWeWork() {
  return (
    <Section bg="tile">
      <Reveal>
        <Eyebrow dark>How we work</Eyebrow>
        <Heading as="h2" className="mt-4 max-w-[none] !text-cream lg:col-span-8">
          Simple. Strategic. Built for Results.
        </Heading>
        <p className="mt-6 max-w-2xl text-lg text-cream/80">
          A clear plan, real work, and reporting you can read. No long-term
          contract.
        </p>
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {howWeWorkSteps.map((step, index) => (
            <div
              key={step.title}
              className="border-l border-cream/30 pl-6"
            >
              <p className="font-display text-8xl font-light text-cream opacity-40">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-display text-3xl font-normal text-cream">
                {step.title}
              </h3>
              <p className="mt-3 text-cream/80">{step.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-2xl text-lg text-cream/85">
          It starts with a free call. Tell us where the business is and where you
          want it to go; we will tell you what we would do first and what it would
          cost.
        </p>
        <div className="mt-8">
          <Button href={primaryCta.href} className="!bg-cream !text-tile">
            {primaryCta.label}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
