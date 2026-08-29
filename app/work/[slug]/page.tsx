import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Prose } from '@/components/ui/Prose';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Stat } from '@/components/ui/Stat';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { caseStudies, getCaseStudy } from '@/data/caseStudies';
import { getService } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

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
  const description = study.outcome.slice(0, 158);
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

  const services = study.services.flatMap((serviceSlug) => {
    const service = getService(serviceSlug);
    return service ? [service] : [];
  });

  const testimonial = study.testimonialSlug
    ? testimonials.find(
        (item) =>
          !item.isPlaceholder &&
          item.business.toLowerCase() === study.client.toLowerCase(),
      )
    : undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
          { name: study.client, path: `/work/${study.slug}` },
        ])}
      />
      <Section className="bg-sbmc-cream pb-12 pt-10">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Work', href: '/work' },
              { label: study.client },
            ]}
          />
          <SectionEyebrow align="left" className="mt-8">
            {study.industry} · {study.location} · {study.timeline}
          </SectionEyebrow>
          <Heading as="h1" size="lg" className="mt-4">
            {study.client}
          </Heading>
          <p className="mt-4 text-body-lg text-sbmc-ink-muted">
            {study.industry} in {study.location}
          </p>
        </Container>
      </Section>

      <Section className="bg-sbmc-white">
        <Container>
          <Prose>
            <h2>Challenge</h2>
            <p>{study.challenge}</p>
            <h2>Approach</h2>
            <p>{study.approach}</p>
            <h2>What we built</h2>
            <p>{study.whatWeBuilt}</p>
            <h2>Outcome</h2>
            <p>{study.outcome}</p>
          </Prose>
        </Container>
      </Section>

      {study.metrics.length > 0 ? (
        <Section className="bg-sbmc-cream">
          <Container>
            <SectionEyebrow>Verified figures</SectionEyebrow>
            <Heading className="mt-4 text-center">Metrics</Heading>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <Stat value={metric.value} label={metric.label} />
                  {metric.note ? (
                    <p className="mt-2 text-body-sm text-sbmc-ink-muted">
                      {metric.note}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {testimonial ? (
        <Section className="bg-sbmc-cream-warm">
          <Container>
            <blockquote className="mx-auto max-w-[60ch] text-center">
              <p className="text-display-md text-sbmc-navy-soft">
                “{testimonial.quote}”
              </p>
              <footer className="mt-6 text-body-sm text-sbmc-ink-muted">
                {testimonial.name}, {testimonial.role}, {testimonial.business}
                {testimonial.location ? ` · ${testimonial.location}` : ''}
              </footer>
            </blockquote>
          </Container>
        </Section>
      ) : null}

      {services.length > 0 ? (
        <Section className="bg-sbmc-white">
          <Container>
            <SectionEyebrow align="left">Services used</SectionEyebrow>
            <ul className="mt-6 flex flex-wrap gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Button variant="secondary" href={`/services/${service.slug}`}>
                    {service.shortName}
                  </Button>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <CtaBand
        heading="Want this level of reporting on your work?"
        subline="Start with a Growth Plan. No invented metrics. A 90-day list you can hold us to."
      />
    </>
  );
}
