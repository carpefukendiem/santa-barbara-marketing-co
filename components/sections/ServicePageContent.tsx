import { Check, ClipboardList, LineChart, MapPin, Search, Settings, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { FAQAccordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Heading';
import { IconCircle } from '@/components/ui/IconCircle';
import { PageHero } from '@/components/ui/PageHero';
import { Prose } from '@/components/ui/Prose';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { Timeline } from '@/components/ui/Timeline';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { getLocation } from '@/data/locations';
import { primaryCta } from '@/data/navigation';
import { getResource, resourceCategoryLabels, type Resource } from '@/data/resources';
import { getService, type Service } from '@/data/services';
import { serviceLucide } from '@/lib/lucideIcons';
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from '@/lib/schema';
import { accentWord, absoluteUrl } from '@/lib/utils';
import Link from 'next/link';

const includedIcons: LucideIcon[] = [
  Search,
  ClipboardList,
  MapPin,
  Settings,
  LineChart,
  Shield,
  Check,
];

function paragraphs(text: string): string[] {
  return text
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}

export function ServicePageContent({ service }: { service: Service }) {
  const Icon = serviceLucide(service.slug, service.icon);
  const problemParagraphs = paragraphs(service.problemFraming);
  const chips = [
    service.eyebrow,
    'No Long-Term Contracts',
    service.whatsIncluded[0]?.title,
  ].filter((item): item is string => Boolean(item));

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

      <PageHero
        variant="split"
        eyebrow={service.eyebrow}
        title={service.h1}
        accent={accentWord(service.h1)}
        subhead={service.heroLede}
        breadcrumbs={crumbs}
        primaryCta={{ href: primaryCta.href, label: primaryCta.label }}
        secondaryCta={{ href: '/contact', label: 'Contact us' }}
        chips={chips}
        icon={Icon}
      />

      <Section bg="white">
        <Reveal>
          <Eyebrow>What you get</Eyebrow>
          <Heading className="mt-4">What&apos;s included</Heading>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.whatsIncluded.map((item, index) => (
              <Card key={item.title} className="p-7">
                <IconCircle icon={includedIcons[index] ?? Check} />
                <h3 className="mt-5 text-h3 text-navy">{item.title}</h3>
                <p className="mt-3 text-stone">{item.body}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      {service.process.length > 0 ? (
        <Section bg="sand">
          <Reveal>
            <Eyebrow align="center">How it works</Eyebrow>
            <Heading className="mt-4 text-center">Four steps, then we measure</Heading>
            <Timeline
              className="mt-12"
              steps={service.process.map((step) => ({
                title: step.title,
                body: step.body,
              }))}
            />
          </Reveal>
        </Section>
      ) : null}

      <Section bg="white">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div>
              <Eyebrow>The problem</Eyebrow>
              <Prose className="mt-4">
              <h2>What this work is actually for</h2>
              {problemParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              <h2>What you can expect</h2>
              <ul>
                {service.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <p>
                This is a description of the work, not a ranking or revenue promise.
                Ads can produce calls once tracking is in place. A marketing site is
                typically live in four to eight weeks if content arrives on time.
                Local SEO usually takes three to six months before Map Pack movement
                is meaningful. We will tell you which of those clocks applies before
                you start.
              </p>
              {service.pricingNote ? (
                <>
                  <h2>What drives the number</h2>
                  <p>{service.pricingNote}</p>
                </>
              ) : null}
            </Prose>
            </div>
            <div className="space-y-6 lg:sticky lg:top-28">
              {relatedServices.length > 0 ? (
                <Card hover={false} className="p-6">
                  <p className="text-eyebrow text-ocean">Related services</p>
                  <ul className="mt-4 space-y-3">
                    {relatedServices.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/services/${related.slug}`}
                          className="font-medium text-navy hover:text-ocean"
                        >
                          {related.shortName}
                        </Link>
                        <p className="mt-1 text-sm text-stone">{related.cardBlurb}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button variant="secondary" href="/contact">
                      Contact us
                    </Button>
                  </div>
                </Card>
              ) : (
                <Card hover={false} className="p-6">
                  <Button variant="secondary" href="/contact">
                    Contact us
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </Reveal>
      </Section>

      {locationItems.length > 0 ? (
        <Section bg="sand">
          <Reveal>
            <Eyebrow>Where we do this</Eyebrow>
            <Heading className="mt-4">
              Santa Barbara County, named as it actually is
            </Heading>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {locationItems.map(({ location, why }) => (
                <Card key={location.slug} className="flex h-full flex-col p-7">
                  <h3 className="text-h3 text-navy">{location.city}</h3>
                  <p className="mt-3 flex-1 text-stone">{why}</p>
                  <div className="mt-5">
                    <Button variant="ghost" href={`/${location.slug}`}>
                      {location.h1}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>
        </Section>
      ) : null}

      {service.faqs.length > 0 ? (
        <Section bg="sand">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <Heading className="mt-4">{service.shortName} FAQs</Heading>
            <FAQAccordion className="mt-10" items={service.faqs} />
          </Reveal>
        </Section>
      ) : null}

      <CtaBand
        heading={`Ready to talk about ${service.shortName.toLowerCase()}?`}
        subline="Request a Free 805 Growth Plan. A person writes it. No contract attached."
      />

      {relatedResources.length > 0 ? (
        <Section bg="white">
          <Reveal>
            <Eyebrow>Reading</Eyebrow>
            <Heading className="mt-4">Related resources</Heading>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedResources.map((resource) => (
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
    </>
  );
}
