import { Button } from '@/components/ui/Button';
import { CountUp } from '@/components/ui/CountUp';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

const stats = [
  {
    label: 'Target LCP on this site',
    node: <CountUp value={1.5} decimals={1} prefix="< " suffix="s" />,
    giant: true,
  },
  {
    label: 'Lighthouse Performance target',
    node: <CountUp value={95} suffix="+" />,
    giant: true,
  },
  { label: 'Pages prerendered at build', node: 'Static', giant: false },
  { label: 'Contrast and keyboard target', node: 'WCAG AA', giant: false },
];

export function TechnologySection() {
  return (
    <Section bg="navy">
      <Reveal>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow dark>Performance</Eyebrow>
            <Heading className="mt-4 !text-cream">
              A Website That Loads Before They Lose Interest.
            </Heading>
            <p className="mt-6 text-lg text-cream/70">
              Most of your visitors are on a phone, often on cellular, often
              deciding in the time it takes to cross a parking lot. We build
              for that: static pages, honest image sizes, and Core Web Vitals
              that are measured, not advertised as a personality trait.
            </p>
            <p className="mt-4 text-lg text-cream/70">
              This site is built the same way we build client sites. The numbers
              below are about this website, not a client dashboard. If a
              marketing site cannot meet them, it is not a model we would sell.
            </p>
            <div className="mt-8">
              <Button variant="ghost" href="/services/web-design">
                Website design
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-16 lg:col-span-6 lg:col-start-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className={
                    stat.giant
                      ? 'font-display text-[7.5rem] leading-none font-light text-cream'
                      : 'font-display text-6xl leading-none font-light text-cream'
                  }
                >
                  {stat.node}
                </p>
                <span className="mt-4 block h-px bg-cream/20" aria-hidden="true" />
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-cream/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
