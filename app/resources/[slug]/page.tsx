import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { ResourceCard } from '@/components/ui/ResourceCard';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ResourceBody, headingId } from '@/components/resources/ResourceBody';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  getResource,
  publishedResources,
  resourceCategoryLabels,
  type Resource,
} from '@/data/resources';
import { site } from '@/data/site';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { absoluteUrl, formatDate } from '@/lib/utils';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publishedResources.map((resource) => ({ slug: resource.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource || resource.status !== 'published') return {};
  return buildMetadata({
    title: resource.metaTitle,
    description: resource.metaDescription,
    path: `/resources/${resource.slug}`,
  });
}

function relatedArticles(resource: Resource): Resource[] {
  const fromLinks = resource.relatedArticles.flatMap((relatedSlug) => {
    const related = getResource(relatedSlug);
    if (!related || related.status !== 'published') return [];
    return [related];
  });
  if (fromLinks.length >= 3) return fromLinks.slice(0, 3);
  const extras = publishedResources.filter(
    (item) =>
      item.slug !== resource.slug &&
      !fromLinks.some((related) => related.slug === item.slug),
  );
  return [...fromLinks, ...extras].slice(0, 3);
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource || resource.status !== 'published') notFound();

  const toc = resource.body.flatMap((block) =>
    block.type === 'h2' ? [{ text: block.text, id: headingId(block.text) }] : [],
  );
  const related = relatedArticles(resource);
  const url = absoluteUrl(`/resources/${resource.slug}`);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Resources', path: '/resources' },
            { name: resource.title, path: `/resources/${resource.slug}` },
          ]),
          articleSchema({
            headline: resource.title,
            description: resource.metaDescription,
            url,
            datePublished: resource.datePublished,
            dateModified: resource.dateModified,
          }),
        ]}
      />
      <Section className="bg-sbmc-cream pb-8 pt-10">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Resources', href: '/resources' },
              { label: resource.title },
            ]}
          />
          <p className="mt-8 text-eyebrow text-sbmc-teal">
            {resourceCategoryLabels[resource.category]} · {resource.readTime}
          </p>
          <Heading as="h1" size="lg" className="mt-4 max-w-4xl">
            {resource.title}
          </Heading>
          <p className="mt-5 text-body-sm text-sbmc-ink-muted">
            By {site.name} · Published {formatDate(resource.datePublished)}
            {resource.dateModified !== resource.datePublished
              ? ` · Updated ${formatDate(resource.dateModified)}`
              : ''}
          </p>
        </Container>
      </Section>
      <Section className="bg-sbmc-cream pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
            <article>
              <ResourceBody blocks={resource.body} />
            </article>
            {toc.length > 0 ? (
              <aside className="top-28 hidden lg:sticky lg:block">
                <p className="text-eyebrow text-sbmc-teal">On this page</p>
                <nav aria-label="Table of contents" className="mt-4">
                  <ol className="space-y-2 border-l border-sbmc-border pl-4">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-body-sm text-sbmc-ink-muted hover:text-sbmc-teal"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </aside>
            ) : null}
          </div>
        </Container>
      </Section>
      {related.length > 0 ? (
        <Section className="bg-sbmc-white">
          <Container>
            <SectionEyebrow>Keep reading</SectionEyebrow>
            <Heading className="mt-4 text-center">Related articles</Heading>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <ResourceCard
                  key={item.slug}
                  title={item.title}
                  href={`/resources/${item.slug}`}
                  excerpt={item.excerpt}
                  category={resourceCategoryLabels[item.category]}
                  readTime={item.readTime}
                />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
      <CtaBand
        heading="Apply this to your business."
        subline="A written 90-day plan for your pin, your pages, and the searches you can win."
      />
    </>
  );
}
