import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
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
import { absoluteUrl, formatDate, readingTimeLabel } from '@/lib/utils';
import Link from 'next/link';

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
  const readTime = readingTimeLabel(resourceText(resource));

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
      <PageHero
        variant="simple"
        eyebrow={`${resourceCategoryLabels[resource.category]} · ${readTime}`}
        title={resource.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: resource.title },
        ]}
      />
      <Section bg="white" py="pb-20 lg:pb-28 pt-0">
        <Reveal>
          <p className="mb-10 text-stone">
            By {site.name} · Published {formatDate(resource.datePublished)}
            {resource.dateModified !== resource.datePublished
              ? ` · Updated ${formatDate(resource.dateModified)}`
              : ''}
          </p>
          <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_16rem] xl:items-start">
            <article>
              <ResourceBody blocks={resource.body} />
            </article>
            {toc.length > 0 ? (
              <aside className="top-28 hidden xl:sticky xl:block">
                <p className="text-eyebrow text-ocean">On this page</p>
                <nav aria-label="Table of contents" className="mt-4">
                  <ol className="space-y-2 border-l border-line pl-4">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm text-stone hover:text-ocean"
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
        </Reveal>
      </Section>
      {related.length > 0 ? (
        <Section bg="sand">
          <Reveal>
            <Eyebrow>Keep reading</Eyebrow>
            <Heading className="mt-4">Related articles</Heading>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <Card key={item.slug} className="flex h-full flex-col p-7">
                  <p className="text-eyebrow text-ocean">
                    {resourceCategoryLabels[item.category]}
                  </p>
                  <h3 className="mt-3 font-display text-h3 text-navy">
                    <Link href={`/resources/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p className="mt-3 flex-1 text-stone">{item.excerpt}</p>
                  <div className="mt-5">
                    <Button variant="ghost" href={`/resources/${item.slug}`}>
                      Read
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>
        </Section>
      ) : null}
      <CtaBand
        heading="Apply this to your business."
        subline="A written 90-day plan for your pin, your pages, and the searches you can win."
      />
    </>
  );
}
