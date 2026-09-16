import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { IconCircle } from '@/components/ui/IconCircle';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { featuredServiceSlugs, getService } from '@/data/services';
import { serviceLucide } from '@/lib/lucideIcons';
import { cn } from '@/lib/utils';

const placement: Record<string, string> = {
  'local-seo': 'lg:col-span-2 lg:row-span-2',
  'web-design': 'lg:col-span-2',
};

export function ServicesGrid() {
  const featured = ['local-seo', 'web-design', ...featuredServiceSlugs.filter(
    (slug) => slug !== 'local-seo' && slug !== 'web-design',
  )]
    .map((slug) => getService(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <Section bg="white">
      <Reveal>
        <div className="text-center">
          <Eyebrow align="center">What we do</Eyebrow>
          <Heading className="mt-4">
            Full-Service Marketing. Built for Local Business.
          </Heading>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {featured.map((service) => {
            const Icon = serviceLucide(service.slug, service.icon);
            const featuredCard = service.slug === 'local-seo';
            return (
              <Card
                key={service.slug}
                accent={featuredCard}
                className={cn(
                  'relative overflow-hidden p-6',
                  placement[service.slug],
                  featuredCard && 'min-h-[280px]',
                )}
              >
                {featuredCard ? (
                  <span
                    className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-ocean/8"
                    aria-hidden="true"
                  />
                ) : null}
                <IconCircle icon={Icon} />
                <h3 className="mt-5 text-h3 text-navy">{service.shortName}</h3>
                <p className="mt-3 text-stone">{service.cardBlurb}</p>
                <div className="mt-5">
                  <Button variant="ghost" href={`/services/${service.slug}`}>
                    Learn more
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button variant="ghost" href="/services">
            See all services
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
