import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Chip } from '@/components/ui/Chip';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Prose } from '@/components/ui/Prose';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Stat } from '@/components/ui/Stat';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  caseStudies,
  getCaseStudy,
  serviceSlugFromName,
  visibleMetrics,
} from '@/data/caseStudies';
import { testimonials } from '@/data/testimonials';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { absoluteUrl } from '@/lib/utils';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies
    .filter((study) => !study.isPlaceholder)
    .map((study) => ({ slug: study.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study || study.isPlaceholder) return {};
  const description = (study.outcome ?? study.challenge).slice(0, 158);
  return buildMetadata({
    title: `${study.client} | Work`,
    description:
      description.length >= 140
        ? description
        : `${study.client} in ${study.location}. ${study.challenge}`.slice(0, 158),
    path: `/work/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study || study.isPlaceholder) notFound();

  const relatedServices = study.servicesUsed
    .map((name) => {
      const serviceSlug = serviceSlugFromName(name);
      return serviceSlug ? { name, slug: serviceSlug } : null;
    })
    .filter((item): item is { name: string; slug: string } => item !== null);

  const metrics = visibleMetrics(study.metrics);
  const testimonial = study.testimonial
    ? testimonials.find((item) => item.quote === study.testimonial)
    : undefined;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' },
            { name: study.client, path: `/work/${study.slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: study.client,
            description: study.outcome ?? study.challenge,
            url: absoluteUrl(`/work/${study.slug}`),
            mainEntityOfPage: absoluteUrl(`/work/${study.slug}`),
          },
        ]}
      />
      <Section className="bg-cream pb-12 pt-48">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Work', href: '/work' },
              { label: study.client },
            ]}
          />
          <p className="mt-8">
            <Link href="/work" className="text-sm text-ink hover:text-tile">
              Back to all work
            </Link>
          </p>
          <SectionEyebrow align="left" className="mt-8">
            {study.industry} · {study.location}
            {study.timeline ? ` · ${study.timeline}` : ''}
          </SectionEyebrow>
          <Heading as="h1" size="lg" className="mt-4">
            {study.client}
          </Heading>
          {study.formerBrandNote ? (
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-tile">
              Completed as Ranking SB
            </p>
          ) : null}
          {study.liveUrl && study.status !== 'anonymized' ? (
            <p className="mt-4">
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener"
                className="text-sm text-ink hover:text-tile"
              >
                Visit site ↗
              </a>
            </p>
          ) : null}
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <Prose>
            <h2>Challenge</h2>
            <p>{study.challenge}</p>
            <h2>Approach</h2>
            <p>{study.approach}</p>
            <h2>What we built</h2>
            <ul>
              {study.whatWeBuilt.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {study.outcome ? (
              <>
                <h2>Outcome</h2>
                <p>{study.outcome}</p>
              </>
            ) : null}
          </Prose>
        </Container>
      </Section>

      {metrics.length > 0 ? (
        <Section className="bg-cream">
          <Container>
            <SectionEyebrow>Verified figures</SectionEyebrow>
            <Heading className="mt-4 text-center">Metrics</Heading>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <Stat value={metric.value ?? ''} label={metric.label} />
                  {metric.note ? (
                    <p className="mt-2 text-body-sm text-stone">{metric.note}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {study.beforeAfter ? (
        <Section className="bg-cream">
          <Container>
            <p className="text-stone">{study.beforeAfter}</p>
          </Container>
        </Section>
      ) : null}

      {testimonial ? (
        <Section className="bg-cream">
          <Container>
            <blockquote className="mx-auto max-w-[60ch] text-center">
              <p className="text-display-md text-ink">“{testimonial.quote}”</p>
              <footer className="mt-6 text-body-sm text-stone">
                {testimonial.name}, {testimonial.role}
              </footer>
            </blockquote>
          </Container>
        </Section>
      ) : null}

      {relatedServices.length > 0 ? (
        <Section className="bg-cream">
          <Container>
            <SectionEyebrow align="left">Related services</SectionEyebrow>
            <ul className="mt-6 flex flex-wrap gap-3">
              {relatedServices.map((service) => (
                <li key={service.slug}>
                  <Chip href={`/services/${service.slug}`}>{service.name}</Chip>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <CtaBand
        heading="See how we would measure yours."
        subline="A free call ends with a written 90-day list, not a pitch deck."
      />
    </>
  );
}
