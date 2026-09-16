import { FAQAccordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { NumberedList } from '@/components/ui/NumberedList';
import { PageHero } from '@/components/ui/PageHero';
import { Prose } from '@/components/ui/Prose';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { getLocation } from '@/data/locations';
import { primaryCta } from '@/data/navigation';
import { getResource, resourceCategoryLabels, type Resource } from '@/data/resources';
import { getService, type Service } from '@/data/services';
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from '@/lib/schema';
import { accentWord, absoluteUrl } from '@/lib/utils';
import Link from 'next/link';

function paragraphs(text: string): string[] {
  return text
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}

export function ServicePageContent({ service }: { service: Service }) {
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

      <PageHero
        variant="simple"
        eyebrow={service.eyebrow}
        title={service.h1}
        accent={accentWord(service.h1)}
        subhead={service.heroLede}
        breadcrumbs={crumbs}
        primaryCta={{ href: primaryCta.href, label: primaryCta.label }}
        secondaryCta={{ href: '/services', label: 'Our Services' }}
      />

      <Section>
        <Reveal>
          <Eyebrow>What you get</Eyebrow>
          <Heading className="mt-4">What&apos;s included</Heading>
          <NumberedList
            className="mt-10"
            items={service.whatsIncluded.map((item, index) => ({
              index: index + 1,
              name: item.title,
              description: item.body,
            }))}
          />
        </Reveal>
      </Section>

      {service.process.length > 0 ? (
        <Section bg="tile">
          <Reveal>
            <Eyebrow dark>How it works</Eyebrow>
            <Heading className="mt-4 !text-cream">Four steps, then we measure</Heading>
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <div key={step.title} className="border-l border-cream/30 pl-6">
                  <p className="font-display text-8xl font-light text-cream opacity-40">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-cream">{step.title}</h3>
                  <p className="mt-3 text-cream/80">{step.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>
      ) : null}

      <Section>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
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
            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="lg:sticky lg:top-28">
                {relatedServices.length > 0 ? (
                  <>
                    <p className="border-t-2 border-tile pt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
                      Related services
                    </p>
                    <ul className="mt-4 space-y-3">
                      {relatedServices.map((related) => (
                        <li key={related.slug}>
                          <Link
                            href={`/services/${related.slug}`}
                            className="font-display text-xl text-ink"
                          >
                            {related.shortName}
                          </Link>
                          <p className="mt-1 text-sm text-stone">{related.cardBlurb}</p>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
                <div className="mt-8">
                  <Button href={primaryCta.href}>{primaryCta.label}</Button>
                </div>
              </div>
            </aside>
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
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {locationItems.map(({ location, why }) => (
                <div key={location.slug} className="border-t-2 border-tile pt-6">
                  <h3 className="font-display text-3xl">{location.city}</h3>
                  <p className="mt-3 text-stone">{why}</p>
                  <div className="mt-5">
                    <Button variant="ghost" href={`/${location.slug}`}>
                      {location.h1}
                    </Button>
                  </div>
                </div>
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
        subline="Book a Free Call. A person looks at your visibility first. No contract attached."
      />

      {relatedResources.length > 0 ? (
        <Section bg="white">
          <Reveal>
            <Eyebrow>Reading</Eyebrow>
            <Heading className="mt-4">Related resources</Heading>
            <div className="mt-12 space-y-0">
              {relatedResources.map((resource) => (
                <div key={resource.slug} className="border-t border-rule py-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
                    {resourceCategoryLabels[resource.category]}
                  </p>
                  <h3 className="mt-3 font-display text-3xl">
                    <Link href={`/resources/${resource.slug}`}>{resource.title}</Link>
                  </h3>
                  <p className="mt-3 text-stone">{resource.excerpt}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>
      ) : null}
    </>
  );
}
