import { notFound } from 'next/navigation';
import { IndustryPageContent } from '@/components/sections/IndustryPageContent';
import { JsonLd } from '@/components/seo/JsonLd';
import { getIndustry, industries } from '@/data/industries';
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { absoluteUrl } from '@/lib/utils';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return buildMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const parent = industry.parent ? getIndustry(industry.parent) : undefined;
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    ...(parent
      ? [{ name: parent.name, path: `/industries/${parent.slug}` }]
      : []),
    { name: industry.name, path: `/industries/${industry.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: `/industries/${industry.slug}`,
            name: industry.metaTitle,
            description: industry.metaDescription,
          }),
          breadcrumbSchema(breadcrumbItems),
          serviceSchema({
            name: `${industry.name} marketing`,
            serviceType: industry.name,
            description: industry.metaDescription,
            url: absoluteUrl(`/industries/${industry.slug}`),
          }),
          faqPageSchema(industry.faqs),
        ]}
      />
      <IndustryPageContent industry={industry} />
    </>
  );
}
