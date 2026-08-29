import Link from 'next/link';
import { Accordion } from '@/components/ui/Accordion';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqsByCategory, type FaqItem } from '@/data/faqs';
import { primaryCta } from '@/data/navigation';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Clear answers on Local SEO, Google Ads, websites, pricing, and how we work with Santa Barbara County businesses. Request a Free 805 Growth Plan.',
  path: '/faq',
});

const groups: Array<{ category: FaqItem['category']; title: string }> = [
  { category: 'getting-started', title: 'Getting Started' },
  { category: 'seo', title: 'SEO & Local Search' },
  { category: 'ads', title: 'Google Ads' },
  { category: 'websites', title: 'Websites' },
  { category: 'working-together', title: 'Working Together' },
];

export default function FaqPage() {
  const grouped = groups.map((group) => ({
    ...group,
    items: faqsByCategory(group.category),
  }));
  const allFaqs = grouped.flatMap((group) => group.items);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
          faqPageSchema(allFaqs),
        ]}
      />
      <Section className="bg-sbmc-cream pb-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'FAQ' },
            ]}
          />
          <SectionEyebrow align="left" className="mt-8">
            Questions
          </SectionEyebrow>
          <Heading as="h1" size="lg" className="mt-4 max-w-3xl">
            Frequently asked questions
          </Heading>
          <p className="mt-6 max-w-[60ch] text-body-lg text-sbmc-ink">
            How we start, how Local SEO and ads actually work in this county,
            what a website engagement includes, and how we price and report.
            If your question is about the free plan, it also lives on the{' '}
            <Link href="/free-growth-plan" className="font-medium text-sbmc-teal">
              Growth Plan page
            </Link>
            .
          </p>
          <div className="mt-8">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
          </div>
        </Container>
      </Section>
      {grouped.map((group) => (
        <Section
          key={group.category}
          className="bg-sbmc-cream pt-8"
          id={group.category}
        >
          <Container>
            <h2 className="text-display-md">{group.title}</h2>
            <Accordion className="mt-4" items={group.items} />
          </Container>
        </Section>
      ))}
      <CtaBand
        heading="Still looking at the market?"
        subline="The Growth Plan is a written 90-day list for your category and city."
      />
    </>
  );
}
