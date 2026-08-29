import { Fragment } from 'react';
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
    icon: <IconDiscover />,
    bg: 'var(--sbmc-navy)',
  },
  {
    title: 'Strategize',
    body: 'We build a custom plan for real growth.',
    icon: <IconStrategize />,
    bg: 'var(--sbmc-teal)',
  },
  {
    title: 'Execute',
    body: 'We launch, optimize, and keep moving forward.',
    icon: <IconExecute />,
    bg: 'var(--sbmc-orange)',
  },
  {
    title: 'Grow',
    body: 'More visibility. More leads. A stronger local business.',
    icon: <IconGrow />,
    bg: 'var(--sbmc-sage)',
  },
];

function StepConnector() {
  return (
    <span
      className="flex shrink-0 items-center justify-center py-2 text-[#cfc3b2] lg:h-[72px] lg:w-11 lg:py-0"
      aria-hidden="true"
    >
      <svg
        className="h-7 w-7 rotate-90 lg:h-10 lg:w-10 lg:rotate-0"
        viewBox="0 0 40 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 6h32" />
        <path d="M28.5 1.75 37 6l-8.5 4.25" />
      </svg>
    </span>
  );
}

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
        <div className="mt-14 flex flex-col items-center lg:flex-row lg:items-start lg:justify-center">
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              <div className="flex w-full max-w-[240px] flex-col items-center text-center lg:max-w-none lg:flex-1">
                <IconBadge
                  background={step.bg}
                  size={68}
                  glyphClassName="text-white"
                >
                  {step.icon}
                </IconBadge>
                <h3 className="mt-5 font-sans text-[0.78rem] font-bold uppercase tracking-[0.1em] text-sbmc-navy">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[22ch] text-body-sm text-sbmc-ink-muted">
                  {step.body}
                </p>
              </div>
              {index < steps.length - 1 ? <StepConnector /> : null}
            </Fragment>
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
