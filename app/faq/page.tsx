import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
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
      <PageHero
        variant="simple"
        eyebrow="Questions"
        title="Frequently asked questions"
        subhead="How we start, how Local SEO and ads actually work in this county, what a website engagement includes, and how we price and report."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' },
        ]}
      />
      <Section bg="white" py="pt-0 pb-8">
        <p className="max-w-[60ch] text-lg text-ink">
          If your question is about the free plan, it also lives on the{' '}
          <Link href="/free-growth-plan" className="font-medium text-ocean underline underline-offset-4">
            Growth Plan page
          </Link>
          .
        </p>
        <div className="mt-8">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
        </div>
      </Section>
      {grouped.map((group) => (
        <Section key={group.category} bg="white" id={group.category} py="py-10 lg:py-12">
          <Reveal>
            <Eyebrow>{group.title}</Eyebrow>
            <FAQAccordion className="mt-4" items={group.items} />
          </Reveal>
        </Section>
      ))}
      <CtaBand
        heading="Still looking at the market?"
        subline="The Growth Plan is a written 90-day list for your category and city."
      />
    </>
  );
}
