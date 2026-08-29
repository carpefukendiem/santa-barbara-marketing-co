import { ArrowDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBadge } from '@/components/ui/IconBadge';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { IconDiscover, IconExecute, IconGrow, IconStrategize } from '@/components/icons';
import { primaryCta } from '@/data/navigation';

const steps = [
  {
    title: 'Discover',
    body: 'We learn about your business, goals, and market.',
    icon: <IconDiscover size={22} />,
    bg: 'var(--sbmc-navy)',
  },
  {
    title: 'Strategize',
    body: 'We build a custom plan for real growth.',
    icon: <IconStrategize size={22} />,
    bg: 'var(--sbmc-teal)',
  },
  {
    title: 'Execute',
    body: 'We launch, optimize, and keep moving forward.',
    icon: <IconExecute size={22} />,
    bg: 'var(--sbmc-orange)',
  },
  {
    title: 'Grow',
    body: 'More visibility. More leads. A stronger local business.',
    icon: <IconGrow size={22} />,
    bg: 'var(--sbmc-sage)',
  },
];

export function GrowthSystem() {
  return (
    <Section className="bg-[#efe6d8]">
      <Container>
        <SectionEyebrow>The 805 Growth System</SectionEyebrow>
        <Heading className="mt-4 text-center">
          Simple. Strategic. Built for Results.
        </Heading>
        <p className="measure-lede mx-auto mt-5 text-center text-body-lg text-sbmc-ink-muted">
          A 90-day arc with a named deliverable, not a vague promise. Discover,
          plan, launch, and measure against calls, forms, and booked work.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3">
                <IconBadge background={step.bg} size={48} glyphClassName="text-white">
                  {step.icon}
                </IconBadge>
              </div>
              {index < steps.length - 1 ? (
                <ArrowDown
                  className="mt-4 text-sbmc-border md:hidden"
                  aria-hidden="true"
                />
              ) : null}
              <h3 className="mt-5 font-sans text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-sbmc-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-body-sm text-sbmc-ink-muted">{step.body}</p>
              {index < steps.length - 1 ? (
                <ArrowRight
                  className="absolute hidden text-sbmc-border lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-[52ch] text-center text-body-sm text-sbmc-ink-muted">
          The first step is a Free 805 Growth Plan: a written 90-day priority
          list, delivered {`within three business days`}, then a short call to
          walk through it.
        </p>
        <div className="mt-6 text-center">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
        </div>
      </Container>
    </Section>
  );
}
