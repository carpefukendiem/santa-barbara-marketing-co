import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { NumberedList } from '@/components/ui/NumberedList';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { featuredServiceSlugs, getService } from '@/data/services';
import { printHub } from '@/data/printServices';

const printRows = [
  {
    slug: 'screen-printing',
    name: 'Screen Printing',
    description:
      'Shirts, hoodies, and workwear printed for your team, your event, or your customers.',
    href: '/services/screen-printing',
  },
  {
    slug: 'print-and-apparel',
    name: 'Custom Apparel & Promo',
    description:
      'Uniforms, branded merchandise, and the promotional pieces that keep your name in the room.',
    href: '/services/print-and-apparel',
  },
];

export function ServicesGrid() {
  const digital = featuredServiceSlugs
    .map((slug) => getService(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))
    .map((service, index) => ({
      index: index + 1,
      name: service.name,
      description: service.cardBlurb,
      href: `/services/${service.slug}`,
      group: index === 0 ? 'Digital' : undefined,
    }));

  const print = printRows.map((row, index) => ({
    index: digital.length + index + 1,
    name: row.name,
    description: row.description,
    href: row.href,
    group: index === 0 ? printHub.name : undefined,
  }));

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
            <Heading className="mt-4">
              Full-Service Marketing. Built for Local Business.
            </Heading>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <NumberedList items={[...digital, ...print]} />
          <div className="mt-8">
            <Button variant="ghost" href="/services">
              See all services
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
