import { Card } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Heading';
import { PageHero } from '@/components/ui/PageHero';
import { ResourceFilter } from '@/components/resources/ResourceFilter';
import { GrowthPlanForm } from '@/components/forms/GrowthPlanForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { publishedResources, type Resource } from '@/data/resources';
import { site } from '@/data/site';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { readingTimeLabel } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'Marketing Resources for 805 Businesses',
  description:
    'Practical marketing guides for Santa Barbara County businesses covering Local SEO, Google Ads, website costs, and AI search. Written for owners.',
  path: '/resources',
});

function resourceText(resource: Resource): string {
  return resource.body
    .map((block) => {
      if (block.type === 'p') return block.html;
      if (block.type === 'h2' || block.type === 'h3' || block.type === 'blockquote') {
        return block.text;
      }
      if (block.type === 'ul' || block.type === 'takeaways') return block.items.join(' ');
      return '';
    })
    .join(' ');
}

export default function ResourcesPage() {
  const items = publishedResources.map((resource) => ({
    slug: resource.slug,
    title: resource.title,
    excerpt: resource.excerpt,
    category: resource.category,
    readTime: readingTimeLabel(resourceText(resource)),
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Resources', path: '/resources' },
        ])}
      />
      <PageHero
        variant="simple"
        eyebrow="Library"
        title="Marketing resources for Santa Barbara County businesses"
        subhead="Practical writing on Local SEO, Google Ads, websites, and AI search in the 805. No ranking promises. No invented case studies. Articles marked planned are on the roadmap and are not listed here until they are actually written."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resources' },
        ]}
      />
      <Section bg="white">
        <Reveal>
          <ResourceFilter items={items} />
        </Reveal>
      </Section>
      <Section bg="sand">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,28rem)] lg:items-start">
            <div>
              <Eyebrow>Next step</Eyebrow>
              <Heading className="mt-4">
                Get a plan for your listing and your pages
              </Heading>
              <p className="mt-5 max-w-[52ch] text-lg text-ink">
                The articles explain how the market works. The Free 805 Growth
                Plan applies that to your Google Business Profile, your site,
                and the searches you can actually win. A person writes it,{' '}
                {site.growthPlanTurnaround}. No contract attached to the
                document.
              </p>
            </div>
            <Card hover={false} className="p-6 md:p-8">
              <p className="text-eyebrow text-ocean">Free 805 Growth Plan</p>
              <p className="mt-3 text-h3 text-navy">Tell us about the business</p>
              <div className="mt-6">
                <GrowthPlanForm />
              </div>
            </Card>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
