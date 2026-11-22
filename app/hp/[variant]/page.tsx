import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { HomePageContent } from '@/components/sections/HomePageContent';
import { buildMetadata } from '@/lib/seo';
import {
  isHomepageVariantId,
  type HomepageVariantId,
} from '@/data/homepage-variants';

export function generateStaticParams(): { variant: HomepageVariantId }[] {
  return [{ variant: 'a' }, { variant: 'b' }];
}

const homeMetadata = buildMetadata({
  title:
    'Santa Barbara Marketing Co. | Digital Marketing Agency in Santa Barbara, CA',
  description:
    'Local SEO, websites, and Google Ads for Santa Barbara, Goleta, Montecito, and Carpinteria. Honest reporting. Book a 20-minute call.',
  path: '/',
  absoluteTitle: true,
});

export const metadata: Metadata = homeMetadata;

type PageProps = {
  params: Promise<{ variant: string }>;
};

export default async function HomepageVariantPage({ params }: PageProps) {
  const { variant } = await params;
  if (!isHomepageVariantId(variant)) notFound();
  return <HomePageContent variant={variant} />;
}
