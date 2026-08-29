import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { WorkEmptyState } from '@/components/sections/WorkEmptyState';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { caseStudies, hasCaseStudies } from '@/data/caseStudies';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Our Work & Results',
  description:
    'We publish case studies only with verified numbers and client permission. See how we measure work for 805 businesses, then request a Free Growth Plan.',
  path: '/work',
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
        ])}
      />
      {hasCaseStudies ? <WorkIndex /> : <WorkEmptyState />}
    </>
  );
}

function WorkIndex() {
  const published = caseStudies.filter((study) => !study.isPlaceholder);

  return (
    <>
      <Section className="bg-sbmc-cream">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Work' },
            ]}
          />
          <SectionEyebrow align="left" className="mt-8">
            Case studies
          </SectionEyebrow>
          <Heading as="h1" size="lg" className="mt-4">
            Work we can show, with numbers we can verify
          </Heading>
          <p className="mt-6 max-w-[60ch] text-body-lg text-sbmc-ink-muted">
            Each study names the client, the city, the services, and the
            metrics we were allowed to publish. If a figure is missing, we
            could not stand behind it.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {published.map((study) => (
              <CaseStudyCard
                key={study.slug}
                title={study.client}
                href={`/work/${study.slug}`}
                industry={study.industry}
                location={study.location}
                excerpt={study.challenge}
              />
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
