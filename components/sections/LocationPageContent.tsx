import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin } from 'lucide-react';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQAccordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { IconCircle } from '@/components/ui/IconCircle';
import { LocationCard } from '@/components/ui/LocationCard';
import { PageHero } from '@/components/ui/PageHero';
import { Prose } from '@/components/ui/Prose';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { getIndustry } from '@/data/industries';
import { getLocation, overviewLocations, type Location } from '@/data/locations';
import { primaryCta } from '@/data/navigation';
import { getService } from '@/data/services';
import { site } from '@/data/site';
import {
  breadcrumbSchema,
  faqPageSchema,
  professionalServiceSchema,
  serviceSchema,
} from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { accentWord, absoluteUrl } from '@/lib/utils';

const santaBarbaraNav = [
  { slug: 'santa-barbara-digital-marketing', label: 'Overview' },
  { slug: 'santa-barbara-seo', label: 'SEO' },
  { slug: 'santa-barbara-web-design', label: 'Web Design' },
  { slug: 'santa-barbara-google-ads', label: 'Google Ads' },
] as const;

const serviceTypeLabel: Record<Location['pageType'], string> = {
  overview: 'Digital Marketing',
  seo: 'Search Engine Optimization',
  'web-design': 'Web Design',
  'google-ads': 'Google Ads',
};

const taglines: Record<string, string> = {
  'santa-barbara-digital-marketing': 'Local. Vibrant. Together.',
  'goleta-digital-marketing': 'Businesses Build Community.',
  'montecito-digital-marketing': 'Local Roots. Lasting Impact.',
  'carpinteria-digital-marketing': 'Small Town. Big Opportunity.',
};

function paragraphs(text: string): string[] {
  return text
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}

export function generateLocationMetadata(slug: string): Metadata {
  const location = getLocation(slug);
  if (!location) {
    return buildMetadata({
      title: 'Location',
      description:
        'Digital marketing for Santa Barbara County businesses. Local SEO, websites, and Google Ads for the South Coast.',
      path: `/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/${slug}`,
  });
}

function SantaBarbaraSubnav({ currentSlug }: { currentSlug: string }) {
  return (
    <nav aria-label="Santa Barbara pages" className="border-b border-line bg-sand">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-6 py-3">
        {santaBarbaraNav.map((item) => {
          const current = item.slug === currentSlug;
          return (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              aria-current={current ? 'page' : undefined}
              className={
                current
                  ? 'inline-flex rounded-full bg-navy px-4 py-2 text-sm text-white'
                  : 'inline-flex rounded-full border border-navy/15 px-4 py-2 text-sm text-navy hover:bg-navy hover:text-white'
              }
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function LocationPageContent({ slug }: { slug: string }) {
  const location = getLocation(slug);
  if (!location) {
    notFound();
  }

  const introParagraphs = paragraphs(location.intro);
  const marketParagraphs = paragraphs(location.marketProfile);
  const isSantaBarbara = location.city === 'Santa Barbara';
  const isOverview = location.pageType === 'overview';

  const crumbItems = isSantaBarbara && !isOverview
    ? [
        { label: 'Home', href: '/' },
        { label: 'Santa Barbara', href: '/santa-barbara-digital-marketing' },
        { label: location.h1 },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: location.h1 },
      ];

  const crumbSchema = isSantaBarbara && !isOverview
    ? [
        { name: 'Home', path: '/' },
        { name: 'Santa Barbara', path: '/santa-barbara-digital-marketing' },
        { name: location.h1, path: `/${location.slug}` },
      ]
    : [
        { name: 'Home', path: '/' },
        { name: location.h1, path: `/${location.slug}` },
      ];

  const pageUrl = absoluteUrl(`/${location.slug}`);

  const pageSchema = isOverview
    ? professionalServiceSchema({
        name: `${site.name} — ${location.city}`,
        description: location.metaDescription,
        url: pageUrl,
        image: absoluteUrl(location.heroImage.src),
      })
    : serviceSchema({
        name: location.h1,
        serviceType: serviceTypeLabel[location.pageType],
        description: location.metaDescription,
        url: pageUrl,
      });

  const locationServices = location.serviceRelevance
    .map((entry) => {
      const service = getService(entry.service);
      if (!service) return null;
      return { service, why: entry.why };
    })
    .filter(
      (item): item is { service: NonNullable<ReturnType<typeof getService>>; why: string } =>
        Boolean(item),
    )
    .slice(0, 6);

  const locationIndustries = location.dominantIndustries
    .map((industrySlug) => getIndustry(industrySlug))
    .filter((item): item is NonNullable<ReturnType<typeof getIndustry>> =>
      Boolean(item),
    );

  const otherAreas = overviewLocations.filter((item) => item.city !== location.city);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbSchema),
          pageSchema,
          faqPageSchema(location.faqs),
        ]}
      />

      {isSantaBarbara ? <SantaBarbaraSubnav currentSlug={location.slug} /> : null}

      <PageHero
        variant="photo"
        eyebrow={`Serving ${location.city}`}
        title={location.h1}
        accent={accentWord(location.h1)}
        subhead={location.heroLede}
        breadcrumbs={crumbItems}
        image={location.heroImage}
        primaryCta={{ href: primaryCta.href, label: primaryCta.label }}
        secondaryCta={{ href: '/services', label: 'Our Services' }}
      />

      <Section bg="white">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div>
              <Eyebrow>The market</Eyebrow>
              <Heading className="mt-4">The {location.city} market</Heading>
              <Prose className="mt-8">
                {introParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                {marketParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </Prose>
            </div>
            {locationServices.length > 0 ? (
              <Card hover={false} className="p-6 lg:sticky lg:top-28">
                <p className="text-eyebrow text-ocean">Services</p>
                <ul className="mt-4 space-y-3">
                  {locationServices.map(({ service }) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="font-medium text-navy hover:text-ocean"
                      >
                        {service.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ) : null}
          </div>
        </Reveal>
      </Section>

      {location.neighborhoods.length > 0 ? (
        <Section bg="sand">
          <Reveal>
            <Eyebrow>Neighborhoods</Eyebrow>
            <Heading className="mt-4">
              How {location.city} actually breaks apart
            </Heading>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2">
              {location.neighborhoods.map((neighborhood) => (
                <li key={neighborhood.name}>
                  <Card className="h-full p-6">
                    <IconCircle icon={MapPin} />
                    <p className="mt-4 text-h3 text-navy">{neighborhood.name}</p>
                    <p className="mt-2 text-stone">{neighborhood.context}</p>
                  </Card>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      ) : null}

      {location.localChallenges.length > 0 ? (
        <Section bg="white">
          <Reveal>
            <Eyebrow>On the ground</Eyebrow>
            <Heading className="mt-4">What works here</Heading>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {location.localChallenges.map((challenge) => (
                <Card key={challenge.title} className="p-7">
                  <IconCircle icon={MapPin} />
                  <h3 className="mt-4 text-h3 text-navy">{challenge.title}</h3>
                  <p className="mt-3 text-stone">{challenge.body}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </Section>
      ) : null}

      {locationIndustries.length > 0 ? (
        <Section bg="sand">
          <Reveal>
            <Eyebrow>Industries</Eyebrow>
            <Heading className="mt-4">Industries in {location.city}</Heading>
            <ul className="mt-10 flex flex-wrap gap-3">
              {locationIndustries.map((industry) => (
                <li key={industry.slug}>
                  <Chip href={`/industries/${industry.slug}`}>{industry.navLabel}</Chip>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      ) : null}

      {otherAreas.length > 0 ? (
        <Section bg="white" id="community">
          <Reveal>
            <Eyebrow>Nearby</Eyebrow>
            <Heading className="mt-4">Nearby areas</Heading>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherAreas.map((area) => (
                <LocationCard
                  key={area.slug}
                  href={`/${area.slug}`}
                  city={area.city}
                  tagline={taglines[area.slug] ?? area.heroLede}
                  image={area.heroImage}
                />
              ))}
            </div>
            {location.nearbyLinks.length > 0 ? (
              <ul className="mt-8 flex flex-wrap gap-3">
                {location.nearbyLinks.map((link) => (
                  <li key={link.href}>
                    <Chip href={link.href}>{link.label}</Chip>
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        </Section>
      ) : null}

      {location.faqs.length > 0 ? (
        <Section bg="sand">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <Heading className="mt-4">{location.city} FAQs</Heading>
            <FAQAccordion className="mt-10" items={location.faqs} />
          </Reveal>
        </Section>
      ) : null}

      <CtaBand
        heading={`Let's talk about ${location.city}.`}
        subline="A written 90-day plan for your pin, your category, and this city."
      />
    </>
  );
}
