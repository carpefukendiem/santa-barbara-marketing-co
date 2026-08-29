import Link from 'next/link';
import { Accordion } from '@/components/ui/Accordion';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { LocationCard } from '@/components/ui/LocationCard';
import { ResourceCard } from '@/components/ui/ResourceCard';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { CtaBand } from '@/components/sections/CtaBand';
import { getResource, resourceCategoryLabels } from '@/data/resources';
import type { Industry } from '@/data/industries';
import { getLocation } from '@/data/locations';
import { getService } from '@/data/services';
import { primaryCta } from '@/data/navigation';

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

  return (
    <>
      <Section className="bg-sbmc-cream pb-12 pt-10 md:pb-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: industry.name },
            ]}
          />
          <SectionEyebrow align="left" className="mt-8">
            {industry.name}
          </SectionEyebrow>
          <Heading as="h1" size="lg" className="mt-4 max-w-4xl">
            {industry.h1}
          </Heading>
          <p className="mt-6 max-w-[65ch] text-body-lg text-sbmc-ink">
            {industry.heroLede}
          </p>
        </Container>
      </Section>

      <Section className="bg-sbmc-white">
        <Container>
          <SectionEyebrow align="left">How they search</SectionEyebrow>
          <Heading className="mt-4">Search behavior in this vertical</Heading>
          <p className="mt-6 max-w-[65ch] text-body-lg text-sbmc-ink">
            {industry.searchBehavior}
          </p>
        </Container>
      </Section>

      <Section className="bg-sbmc-cream">
        <Container>
          <SectionEyebrow>The work that actually leaks</SectionEyebrow>
          <Heading className="mt-4 text-center">Three problems we see most</Heading>
          <ol className="mt-12 grid gap-6 lg:grid-cols-3">
            {industry.problems.map((problem, index) => (
              <li key={problem.title}>
                <Card className="flex h-full flex-col p-7">
                  <p className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.14em] text-sbmc-teal">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-heading-sm">{problem.title}</h3>
                  <p className="mt-3 text-body-sm text-sbmc-ink-muted">
                    {problem.body}
                  </p>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="bg-sbmc-cream-warm">
        <Container>
          <SectionEyebrow>Where the budget should go</SectionEyebrow>
          <Heading className="mt-4 text-center">Services that matter here</Heading>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map(({ service, why }) => (
              <Card key={service.slug} className="flex h-full flex-col p-7">
                <p className="text-eyebrow text-sbmc-teal">{service.eyebrow}</p>
                <h3 className="mt-3 text-heading-sm">
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-sbmc-teal"
                  >
                    {service.name}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-body-sm text-sbmc-ink-muted">
                  {why}
                </p>
                <div className="mt-5">
                  <Button variant="link" href={`/services/${service.slug}`}>
                    {service.shortName}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {locations.length > 0 ? (
        <Section className="bg-sbmc-aqua-light">
          <Container>
            <SectionEyebrow>Geography</SectionEyebrow>
            <Heading className="mt-4 text-center">
              Cities where this work shows up
            </Heading>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {locations.map((location) => (
                <LocationCard
                  key={location.slug}
                  href={`/${location.slug}`}
                  city={location.city}
                  tagline={
                    locationTaglines[location.slug] ?? location.heroLede
                  }
                  image={location.heroImage}
                />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {resources.length > 0 ? (
        <Section className="bg-sbmc-cream">
          <Container>
            <SectionEyebrow>Further reading</SectionEyebrow>
            <Heading className="mt-4 text-center">Related resources</Heading>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {resources.map((resource) => (
                <ResourceCard
                  key={resource.slug}
                  title={resource.title}
                  href={`/resources/${resource.slug}`}
                  excerpt={resource.excerpt}
                  category={resourceCategoryLabels[resource.category]}
                  readTime={resource.readTime}
                />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section className="bg-sbmc-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <SectionEyebrow align="left">Questions we get</SectionEyebrow>
              <Heading className="mt-4">
                {industry.name} FAQs
              </Heading>
              <p className="mt-4 max-w-[42ch] text-body-lg text-sbmc-ink-muted">
                Vertical-specific answers. If yours is not here,{' '}
                <Link href="/contact" className="font-medium text-sbmc-teal">
                  ask us directly
                </Link>
                .
              </p>
              <div className="mt-6">
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              </div>
            </div>
            <Accordion items={industry.faqs} />
          </div>
        </Container>
      </Section>

      <CtaBand
        heading="Get a plan for this vertical."
        subline="A 90-day priority list for your category and city, written by a person."
      />
    </>
  );
}
