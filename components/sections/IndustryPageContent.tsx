import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { LocationCard } from '@/components/ui/LocationCard';
import { PageHero } from '@/components/ui/PageHero';
import { Prose } from '@/components/ui/Prose';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/sections/CtaBand';
import { PrintApparelRow } from '@/components/sections/PrintApparelRow';
import { getResource, resourceCategoryLabels } from '@/data/resources';
import type { Industry } from '@/data/industries';
import { getLocation } from '@/data/locations';
import { getService } from '@/data/services';
import { primaryCta } from '@/data/navigation';
import { serviceLucide } from '@/lib/lucideIcons';
import { accentWord } from '@/lib/utils';

const locationTaglines: Record<string, string> = {
  'santa-barbara-digital-marketing': 'Residents and visitors, two search jobs.',
  'goleta-digital-marketing': 'West-side pins, UCSB-adjacent demand.',
  'montecito-digital-marketing': 'Low volume, high consideration.',
  'carpinteria-digital-marketing': 'Linden Avenue and beach-day intent.',
};

export function IndustryPageContent({ industry }: { industry: Industry }) {
  const services = industry.servicesThatMatter.flatMap((item) => {
    const service = getService(item.service);
    if (!service) return [];
    return [{ service, why: item.why }];
  });

  const locations = industry.locations.flatMap((slug) => {
    const location = getLocation(slug);
    return location ? [location] : [];
  });

  const resources = industry.relatedResources.flatMap((slug) => {
    const resource = getResource(slug);
    if (!resource || resource.status !== 'published') return [];
    return [resource];
  });

  const chips = [
    industry.name,
    ...industry.problems.map((problem) => problem.title),
  ].slice(0, 3);

  const Icon = services[0]
    ? serviceLucide(services[0].service.slug, services[0].service.icon)
    : undefined;

  return (
    <>
      <PageHero
        variant="split"
        eyebrow={industry.name}
        title={industry.h1}
        accent={accentWord(industry.h1)}
        subhead={industry.heroLede}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: industry.name },
        ]}
        primaryCta={{ href: primaryCta.href, label: primaryCta.label }}
        chips={chips}
        icon={Icon}
      />

      <Section bg="white">
        <Reveal>
          <Eyebrow>The work that actually leaks</Eyebrow>
          <Heading className="mt-4">Three problems we see most</Heading>
          <div className="mt-12 space-y-12">
            {industry.problems.map((problem, index) => {
              const flipped = index % 2 === 1;
              return (
                <div
                  key={problem.title}
                  className="grid items-center gap-8 lg:grid-cols-2"
                >
                  <div className={flipped ? 'lg:order-2' : undefined}>
                    <h3 className="text-h3 text-navy">{problem.title}</h3>
                    <p className="mt-4 text-lg text-stone">{problem.body}</p>
                  </div>
                  <div
                    className={`relative min-h-[200px] overflow-hidden bg-navy p-8 ${
                      flipped ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="relative z-[1] flex flex-wrap gap-3">
                      {industry.problems.map((item) => (
                        <Chip key={item.title} dark>
                          {item.title}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Section>

      {services.length > 0 ? (
        <Section bg="sand">
          <Reveal>
            <Eyebrow>Where the budget should go</Eyebrow>
            <Heading className="mt-4">Services that matter here</Heading>
            <div className="mt-10 flex flex-wrap gap-3">
              {services.map(({ service }) => (
                <Chip key={service.slug} href={`/services/${service.slug}`}>
                  {service.shortName}
                </Chip>
              ))}
            </div>
            <PrintApparelRow industrySlug={industry.slug} />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {services.map(({ service, why }) => (
                <Card key={service.slug} className="flex h-full flex-col p-7">
                  <p className="text-eyebrow text-ocean">{service.eyebrow}</p>
                  <h3 className="mt-3 text-h3 text-navy">
                    <Link href={`/services/${service.slug}`}>{service.name}</Link>
                  </h3>
                  <p className="mt-3 flex-1 text-stone">{why}</p>
                  <div className="mt-5">
                    <Button variant="ghost" href={`/services/${service.slug}`}>
                      {service.shortName}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>
        </Section>
      ) : null}

      <Section bg="white">
        <Reveal>
          <Eyebrow>How they search</Eyebrow>
          <Prose>
            <h2>Search behavior in this vertical</h2>
            <p>{industry.searchBehavior}</p>
          </Prose>
        </Reveal>
      </Section>

      {locations.length > 0 ? (
        <Section bg="sand">
          <Reveal>
            <Eyebrow>Geography</Eyebrow>
            <Heading className="mt-4">Cities where this work shows up</Heading>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {locations.map((location) => (
                <LocationCard
                  key={location.slug}
                  href={`/${location.slug}`}
                  city={location.city}
                  tagline={locationTaglines[location.slug] ?? location.heroLede}
                  image={location.heroImage}
                />
              ))}
            </div>
          </Reveal>
        </Section>
      ) : null}

      {resources.length > 0 ? (
        <Section bg="white">
          <Reveal>
            <Eyebrow>Further reading</Eyebrow>
            <Heading className="mt-4">Related resources</Heading>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {resources.map((resource) => (
                <Card key={resource.slug} className="flex h-full flex-col p-7">
                  <p className="text-eyebrow text-ocean">
                    {resourceCategoryLabels[resource.category]}
                  </p>
                  <h3 className="mt-3 text-h3 text-navy">
                    <Link href={`/resources/${resource.slug}`}>{resource.title}</Link>
                  </h3>
                  <p className="mt-3 flex-1 text-stone">{resource.excerpt}</p>
                  <div className="mt-5">
                    <Button variant="ghost" href={`/resources/${resource.slug}`}>
                      Read article
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>
        </Section>
      ) : null}

      {industry.faqs.length > 0 ? (
        <Section bg="sand">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
              <div>
                <Eyebrow>Questions we get</Eyebrow>
                <Heading className="mt-4">{industry.name} FAQs</Heading>
                <p className="mt-4 max-w-[42ch] text-lg text-stone">
                  Vertical-specific answers. If yours is not here,{' '}
                  <Link href="/contact" className="font-medium text-ocean underline underline-offset-4">
                    ask us directly
                  </Link>
                  .
                </p>
                <div className="mt-6">
                  <Button href={primaryCta.href}>{primaryCta.label}</Button>
                </div>
              </div>
              <FAQAccordion items={industry.faqs} />
            </div>
          </Reveal>
        </Section>
      ) : null}

      <CtaBand
        heading="Get a plan for this vertical."
        subline="A 90-day priority list for your category and city, written by a person."
      />
    </>
  );
}
