import { Button } from '@/components/ui/Button';
import { CountUp } from '@/components/ui/CountUp';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

const stats = [
  {
    label: 'Target LCP on this site',
    node: <CountUp value={1.5} decimals={1} prefix="< " suffix="s" />,
  },
  {
    label: 'Lighthouse Performance target',
    node: <CountUp value={95} suffix="+" />,
  },
  { label: 'Pages prerendered at build', node: 'Static' },
  { label: 'Contrast and keyboard target', node: 'WCAG AA' },
];

export function TechnologySection() {
  return (
    <Section bg="navy" className="border-t border-white/10">
      <Reveal>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading className="!text-white">
              A Website That Loads Before They Lose Interest.
            </Heading>
            <p className="mt-6 text-lg text-white/80">
              Most of your visitors are on a phone, often on cellular, often
              deciding in the time it takes to cross a parking lot. We build
              for that: static pages, honest image sizes, and Core Web Vitals
              that are measured, not advertised as a personality trait.
            </p>
            <p className="mt-4 text-lg text-white/70">
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
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl text-tile">{stat.node}</p>
                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
