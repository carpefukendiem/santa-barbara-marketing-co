import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ResourceFilter } from '@/components/resources/ResourceFilter';
import { GrowthPlanForm } from '@/components/forms/GrowthPlanForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { publishedResources } from '@/data/resources';
import { site } from '@/data/site';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Marketing Resources for 805 Businesses',
  description:
    'Practical marketing guides for Santa Barbara County businesses covering Local SEO, Google Ads, website costs, and AI search. Written for owners.',
  path: '/resources',
});

export default function ResourcesPage() {
  const items = publishedResources.map((resource) => ({
    slug: resource.slug,
    title: resource.title,
    excerpt: resource.excerpt,
    category: resource.category,
    readTime: resource.readTime,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Resources', path: '/resources' },
        ])}
      />
      <Section className="bg-sbmc-cream pb-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Resources' },
            ]}
          />
          <SectionEyebrow align="left" className="mt-8">
            Library
          </SectionEyebrow>
          <Heading as="h1" size="lg" className="mt-4 max-w-3xl">
            Marketing resources for Santa Barbara County businesses
          </Heading>
          <p className="mt-6 max-w-[62ch] text-body-lg text-sbmc-ink">
            Practical writing on Local SEO, Google Ads, websites, and AI search
            in the 805. No ranking promises. No invented case studies. Articles
            marked planned are on the roadmap and are not listed here until they
            are actually written.
          </p>
        </Container>
      </Section>
      <Section className="bg-sbmc-cream pt-0">
        <Container>
          <ResourceFilter items={items} />
        </Container>
      </Section>
      <Section className="bg-sbmc-cream-warm">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,28rem)] lg:items-start">
            <div>
              <SectionEyebrow align="left">Next step</SectionEyebrow>
              <Heading className="mt-4">
                Get a plan for your listing and your pages
              </Heading>
              <p className="mt-5 max-w-[52ch] text-body-lg text-sbmc-ink">
                The articles explain how the market works. The Free 805 Growth
                Plan applies that to your Google Business Profile, your site,
                and the searches you can actually win. A person writes it,{' '}
                {site.growthPlanTurnaround}. No contract attached to the
                document.
              </p>
            </div>
            <Card className="p-6 md:p-8">
              <p className="text-eyebrow text-sbmc-teal">Free 805 Growth Plan</p>
              <p className="mt-3 text-heading-sm">Tell us about the business</p>
              <div className="mt-6">
                <GrowthPlanForm />
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
