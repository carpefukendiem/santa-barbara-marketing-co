import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { serviceIconMap } from '@/components/icons/maps';
import { featuredServiceSlugs, getService } from '@/data/services';

export function ServicesGrid() {
  const featured = featuredServiceSlugs
    .map((slug) => getService(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <Section className="bg-sbmc-cream-warm">
      <Container>
        <SectionEyebrow>What we do</SectionEyebrow>
        <Heading className="mt-4 text-center">
          Full-Service Marketing. Built for Local Business.
        </Heading>
        <div className="mt-14 grid grid-cols-1 gap-10 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 xl:gap-0">
          {featured.map((service, index) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <div
                key={service.slug}
                className={
                  index < featured.length - 1
                    ? 'xl:border-r xl:border-sbmc-border'
                    : undefined
                }
              >
                <ServiceCard
                  title={service.shortName}
                  href={`/services/${service.slug}`}
                  blurb={service.cardBlurb}
                  icon={<Icon size={26} />}
                  iconBg={service.iconBg}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button variant="link" href="/services">
            See all services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
