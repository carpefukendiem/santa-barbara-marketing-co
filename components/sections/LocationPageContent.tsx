import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceIconMap } from '@/components/icons/maps';
import { GrowthPlanForm } from '@/components/forms/GrowthPlanForm';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { getIndustry } from '@/data/industries';
import { getLocation, type Location } from '@/data/locations';
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
import { absoluteUrl } from '@/lib/utils';

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
    <nav
      aria-label="Santa Barbara pages"
      className="border-b border-sbmc-border bg-sbmc-cream-warm"
    >
      <Container>
        <ul className="flex flex-wrap gap-2 py-3">
          {santaBarbaraNav.map((item) => {
            const current = item.slug === currentSlug;
            return (
              <li key={item.slug}>
                <Link
                  href={`/${item.slug}`}
                  aria-current={current ? 'page' : undefined}
                  className={
                    current
                      ? 'inline-flex rounded-full bg-sbmc-navy px-4 py-2 font-sans text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white'
                      : 'inline-flex rounded-full border border-sbmc-border bg-sbmc-white px-4 py-2 font-sans text-[0.7rem] font-bold uppercase tracking-[0.08em] text-sbmc-navy hover:border-sbmc-navy'
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
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

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbSchema),
          pageSchema,
          faqPageSchema(location.faqs),
        ]}
      />

      <div className="bg-sbmc-cream-warm py-4">
        <Container>
          <Breadcrumbs items={crumbItems} />
        </Container>
      </div>

      {isSantaBarbara ? <SantaBarbaraSubnav currentSlug={location.slug} /> : null}

      <section className="relative min-h-[480px] overflow-hidden md:min-h-[560px]">
        <Image
          src={location.heroImage.src}
          alt={location.heroImage.alt}
          fill
          priority
          quality={78}
          sizes="100vw"
          className="photo-treatment object-cover"
          style={{ objectPosition: location.heroImage.focalPoint }}
        />
        <GrainOverlay />
        <div
          className="absolute inset-0 z-[2] bg-[linear-gradient(to_bottom,rgb(5_33_54/0.78)_0%,rgb(5_33_54/0.62)_48%,rgb(5_33_54/0.78)_100%)]"
          aria-hidden="true"
        />
        <div className="relative z-[3] mx-auto flex max-w-[1200px] flex-col justify-center px-5 py-16 md:px-8 lg:min-h-[560px] lg:px-10">
          <p className="text-eyebrow text-sbmc-aqua">Serving {location.city}</p>
          <h1 className="mt-4 max-w-3xl text-display-lg text-white md:text-display-xl">
            {location.h1}
          </h1>
          <p className="mt-6 max-w-[40rem] text-body-lg text-white/85">
            {location.heroLede}
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
            <Button href={primaryCta.href} tone="dark" className="w-full sm:w-auto">
              {primaryCta.label}
            </Button>
            <Button
              variant="secondary"
              href="/contact"
              tone="dark"
              className="w-full sm:w-auto"
            >
              Contact us
            </Button>
          </div>
        </div>
      </section>

      <Section className="bg-sbmc-cream">
        <Container>
          <SectionEyebrow align="left">The market</SectionEyebrow>
          <Heading className="mt-4">The {location.city} market</Heading>
          <div className="measure mt-8 space-y-5">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-body-lg text-sbmc-ink">
                {paragraph}
              </p>
            ))}
            {marketParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-body-lg text-sbmc-ink-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-sbmc-cream-warm">
        <Container>
          <SectionEyebrow>Neighborhoods</SectionEyebrow>
          <Heading className="mt-4 text-center">
            How {location.city} actually breaks apart
          </Heading>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {location.neighborhoods.map((neighborhood) => (
              <li
                key={neighborhood.name}
                className="rounded-[12px] border border-sbmc-border bg-sbmc-white p-6 shadow-card"
              >
                <p className="font-sans text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-sbmc-navy">
                  {neighborhood.name}
                </p>
                <p className="mt-2 text-body-sm text-sbmc-ink-muted">
                  {neighborhood.context}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-sbmc-cream">
        <Container>
          <SectionEyebrow>On the ground</SectionEyebrow>
          <Heading className="mt-4 text-center">What works here</Heading>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {location.localChallenges.map((challenge) => (
              <article
                key={challenge.title}
                className="rounded-[12px] border border-sbmc-border bg-sbmc-white p-7 shadow-card"
              >
                <h3 className="text-heading-sm">{challenge.title}</h3>
                <p className="mt-3 text-body-sm text-sbmc-ink-muted">
                  {challenge.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {locationServices.length > 0 ? (
        <Section className="bg-sbmc-cream-warm">
          <Container>
            <SectionEyebrow>Services</SectionEyebrow>
            <Heading className="mt-4 text-center">
              Services for {location.city}
            </Heading>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {locationServices.map(({ service, why }) => {
                const Icon = serviceIconMap[service.icon];
                return (
                  <ServiceCard
                    key={service.slug}
                    title={service.shortName}
                    href={`/services/${service.slug}`}
                    blurb={why}
                    icon={<Icon size={26} />}
                    iconBg={service.iconBg}
                    variant="bordered"
                  />
                );
              })}
            </div>
          </Container>
        </Section>
      ) : null}

      {locationIndustries.length > 0 ? (
        <Section className="bg-sbmc-cream">
          <Container>
            <SectionEyebrow>Industries</SectionEyebrow>
            <Heading className="mt-4 text-center">
              Industries in {location.city}
            </Heading>
            <ul className="mt-10 flex flex-wrap justify-center gap-3">
              {locationIndustries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex rounded-[12px] border border-sbmc-border bg-sbmc-white px-5 py-4 font-sans text-[0.78rem] font-bold uppercase tracking-[0.08em] text-sbmc-navy shadow-card transition-[box-shadow,transform] duration-300 ease-sbmc hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    {industry.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Section className="bg-sbmc-cream-warm">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionEyebrow>Questions</SectionEyebrow>
            <Heading className="mt-4 text-center">
              {location.city} FAQs
            </Heading>
            <Accordion className="mt-10" items={location.faqs} />
          </div>
        </Container>
      </Section>

      {location.nearbyLinks.length > 0 ? (
        <Section className="bg-sbmc-aqua-light">
          <Container>
            <SectionEyebrow>Nearby</SectionEyebrow>
            <Heading className="mt-4 text-center">Nearby areas</Heading>
            <ul className="mt-10 flex flex-wrap justify-center gap-3">
              {location.nearbyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-full border border-sbmc-border bg-sbmc-white px-5 py-2.5 text-body-sm text-sbmc-navy hover:border-sbmc-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <CtaBand
        heading={`Let's talk about ${location.city}.`}
        subline="A written 90-day plan for your pin, your category, and this city."
      />

      <Section className="bg-sbmc-cream">
        <Container>
          <div className="mx-auto max-w-xl">
            <SectionEyebrow>Growth Plan</SectionEyebrow>
            <Heading className="mt-4 text-center">
              Request a Free 805 Growth Plan
            </Heading>
            <p className="mt-4 text-center text-body-lg text-sbmc-ink-muted">
              Tell us the business and the city. A person writes the plan. No
              contract attached.
            </p>
            <div className="mt-8">
              <GrowthPlanForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
