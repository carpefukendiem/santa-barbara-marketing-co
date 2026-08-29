import {
  IconDiscover,
  IconExecute,
  IconGrow,
  IconStrategize,
  type IconProps,
} from '@/components/icons';
import { serviceIconMap } from '@/components/icons/maps';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBadge } from '@/components/ui/IconBadge';
import { ResourceCard } from '@/components/ui/ResourceCard';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { StepCard } from '@/components/ui/StepCard';
import { getLocation } from '@/data/locations';
import { primaryCta } from '@/data/navigation';
import { getResource, type Resource } from '@/data/resources';
import { getService, type Service } from '@/data/services';
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from '@/lib/schema';
import { absoluteUrl } from '@/lib/utils';
import type { ComponentType } from 'react';

const processIcons: Array<ComponentType<IconProps>> = [
  IconDiscover,
  IconStrategize,
  IconExecute,
  IconGrow,
];

const processColors = [
  'var(--sbmc-navy)',
  'var(--sbmc-teal)',
  'var(--sbmc-orange)',
  'var(--sbmc-sage)',
];

const resourceCategoryLabel: Record<Resource['category'], string> = {
  seo: 'SEO',
  ads: 'Ads',
  websites: 'Websites',
  ai: 'AI',
  strategy: 'Strategy',
};

function paragraphs(text: string): string[] {
  return text
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}

export function ServicePageContent({ service }: { service: Service }) {
  const Icon = serviceIconMap[service.icon];
  const problemParagraphs = paragraphs(service.problemFraming);

  const relatedServices = service.relatedServices
    .map((slug) => getService(slug))
    .filter((item): item is Service => Boolean(item))
    .slice(0, 3);

  const relatedResources = service.relatedResources
    .map((slug) => getResource(slug))
    .filter((item): item is Resource => item != null && item.status === 'published')
    .slice(0, 3);

  const locationItems = service.relatedLocations
    .map((slug) => getLocation(slug))
    .filter((item): item is NonNullable<ReturnType<typeof getLocation>> =>
      Boolean(item),
    )
    .slice(0, 4)
    .map((location) => {
      const relevance = location.serviceRelevance.find(
        (entry) => entry.service === service.slug,
      );
      return {
        location,
        why:
          relevance?.why ??
          `${service.shortName} for businesses that actually trade in ${location.city}, written for this market rather than a swapped city name.`,
      };
    });

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.shortName },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.shortName, path: `/services/${service.slug}` },
          ]),
          serviceSchema({
            name: service.name,
            serviceType: service.shortName,
            description: service.metaDescription,
            url: absoluteUrl(`/services/${service.slug}`),
          }),
          faqPageSchema(service.faqs),
        ]}
      />

      <Section className="bg-sbmc-cream-warm" padded={false}>
        <Container className="py-8 md:py-12">
          <Breadcrumbs items={crumbs} />
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <SectionEyebrow align="left">{service.eyebrow}</SectionEyebrow>
              <Heading as="h1" size="xl" className="mt-4 max-w-3xl">
                {service.h1}
              </Heading>
              <p className="measure-lede mt-6 text-body-lg text-sbmc-ink">
                {service.heroLede}
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
                <Button href={primaryCta.href} className="w-full sm:w-auto">
                  {primaryCta.label}
                </Button>
                <Button
                  variant="secondary"
                  href="/contact"
                  className="w-full sm:w-auto"
                >
                  Contact us
                </Button>
              </div>
            </div>
            <IconBadge
              background={service.iconBg}
              size={88}
              className="shrink-0"
            >
              <Icon />
            </IconBadge>
          </div>
        </Container>
      </Section>

      <Section className="bg-sbmc-cream">
        <Container>
          <SectionEyebrow align="left">The problem</SectionEyebrow>
          <Heading className="mt-4">What this work is actually for</Heading>
          <div className="measure mt-8 space-y-5">
            {problemParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-body-lg text-sbmc-ink">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-sbmc-cream-warm">
        <Container>
          <SectionEyebrow>What you get</SectionEyebrow>
          <Heading className="mt-4 text-center">What&apos;s included</Heading>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {service.whatsIncluded.map((item) => (
              <article
                key={item.title}
                className="rounded-[12px] border border-sbmc-border bg-sbmc-white p-7 shadow-card"
              >
                <h3 className="font-sans text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-sbmc-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-body-sm text-sbmc-ink-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-sbmc-cream">
        <Container>
          <SectionEyebrow>How it works</SectionEyebrow>
          <Heading className="mt-4 text-center">Four steps, then we measure</Heading>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => {
              const StepIcon = processIcons[index] ?? IconGrow;
              const iconBg = processColors[index] ?? 'var(--sbmc-navy)';
              return (
                <StepCard
                  key={step.title}
                  title={`${String(step.step).padStart(2, '0')}  ${step.title}`}
                  body={step.body}
                  icon={<StepIcon size={22} />}
                  iconBg={iconBg}
                />
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-sbmc-cream-warm">
        <Container>
          <SectionEyebrow align="left">Outcomes</SectionEyebrow>
          <Heading className="mt-4">What you can expect</Heading>
          <ul className="mt-8 max-w-3xl space-y-4">
            {service.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="border-l-2 border-sbmc-teal pl-5 text-body-lg text-sbmc-ink"
              >
                {outcome}
              </li>
            ))}
          </ul>
          <p className="measure mt-8 text-body-sm text-sbmc-ink-muted">
            This is a description of the work, not a ranking or revenue promise.
            Ads can produce calls once tracking is in place. A marketing site is
            typically live in four to eight weeks if content arrives on time.
            Local SEO usually takes three to six months before Map Pack movement
            is meaningful. We will tell you which of those clocks applies before
            you start.
          </p>
        </Container>
      </Section>

      {service.pricingNote ? (
        <Section className="bg-sbmc-cream" padded={false}>
          <Container className="py-16 md:py-20">
            <aside className="rounded-[12px] border border-sbmc-border bg-sbmc-white p-8 shadow-card md:p-10">
              <p className="text-eyebrow text-sbmc-teal">Pricing honesty</p>
              <h2 className="mt-3 text-display-md">What drives the number</h2>
              <p className="mt-5 text-body-lg text-sbmc-ink">{service.pricingNote}</p>
            </aside>
          </Container>
        </Section>
      ) : null}

      {relatedServices.length > 0 ? (
        <Section className="bg-sbmc-cream-warm">
          <Container>
            <SectionEyebrow>Related services</SectionEyebrow>
            <Heading className="mt-4 text-center">Often hired next to this</Heading>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {relatedServices.map((related) => {
                const RelatedIcon = serviceIconMap[related.icon];
                return (
                  <ServiceCard
                    key={related.slug}
                    title={related.shortName}
                    href={`/services/${related.slug}`}
                    blurb={related.cardBlurb}
                    icon={<RelatedIcon size={26} />}
                    iconBg={related.iconBg}
                    variant="bordered"
                  />
                );
              })}
            </div>
          </Container>
        </Section>
      ) : null}

      {locationItems.length > 0 ? (
        <Section className="bg-sbmc-cream">
          <Container>
            <SectionEyebrow>Where we do this</SectionEyebrow>
            <Heading className="mt-4 text-center">
              Santa Barbara County, named as it actually is
            </Heading>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {locationItems.map(({ location, why }) => (
                <article
                  key={location.slug}
                  className="flex h-full flex-col rounded-[12px] border border-sbmc-border bg-sbmc-white p-7 shadow-card"
                >
                  <h3 className="font-sans text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-sbmc-navy">
                    {location.city}
                  </h3>
                  <p className="mt-3 flex-1 text-body-sm text-sbmc-ink-muted">
                    {why}
                  </p>
                  <div className="mt-5">
                    <Button variant="link" href={`/${location.slug}`}>
                      {location.h1}
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section className="bg-sbmc-cream-warm">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionEyebrow>Questions</SectionEyebrow>
            <Heading className="mt-4 text-center">
              {service.shortName} FAQs
            </Heading>
            <Accordion className="mt-10" items={service.faqs} />
          </div>
        </Container>
      </Section>

      <CtaBand
        heading={`Ready to talk about ${service.shortName.toLowerCase()}?`}
        subline="Request a Free 805 Growth Plan. A person writes it. No contract attached."
      />

      {relatedResources.length > 0 ? (
        <Section className="bg-sbmc-cream">
          <Container>
            <SectionEyebrow>Reading</SectionEyebrow>
            <Heading className="mt-4 text-center">Related resources</Heading>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedResources.map((resource) => (
                <ResourceCard
                  key={resource.slug}
                  title={resource.title}
                  href={`/resources/${resource.slug}`}
                  excerpt={resource.excerpt}
                  category={resourceCategoryLabel[resource.category]}
                  readTime={resource.readTime}
                />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
