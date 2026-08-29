import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { Stat } from '@/components/ui/Stat';

export function TechnologySection() {
  return (
    <Section className="bg-sbmc-cream-warm">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading>A Website That Loads Before They Lose Interest.</Heading>
            <p className="mt-6 max-w-[65ch] text-body-lg text-sbmc-ink">
              Most of your visitors are on a phone, often on cellular, often
              deciding in the time it takes to cross a parking lot. We build
              for that: static pages, honest image sizes, and Core Web Vitals
              that are measured, not advertised as a personality trait.
            </p>
            <p className="mt-4 max-w-[65ch] text-body-lg text-sbmc-ink-muted">
              This site is built the same way we build client sites. The numbers
              below are about this website, not a client dashboard. If a
              marketing site cannot meet them, it is not a model we would sell.
            </p>
            <div className="mt-8">
              <Button variant="link" href="/services/web-design">
                Website design
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat value="< 1.5s" label="Target LCP on this site" />
            <Stat value="95+" label="Lighthouse Performance target" />
            <Stat value="Static" label="Pages prerendered at build" />
            <Stat value="WCAG AA" label="Contrast and keyboard target" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
