import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllDemoSlugs, getDemo } from '@/data/demos';
import type { DemoSlug } from '@/data/demos';
import { CoastalPage } from '@/components/demos/coastal/CoastalPage';
import { DimaurosPage } from '@/components/demos/dimauros/DimaurosPage';
import { PrecisionPage } from '@/components/demos/precision/PrecisionPage';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const FONT_LINKS: Record<DemoSlug, string> = {
  'dimauros-independent-honda-acura-repair':
    'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,500;62..125,700;62..125,800&family=IBM+Plex+Mono:wght@400;600&display=swap',
  'coastal-dentistry':
    'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&family=Instrument+Sans:wght@400;500;600&display=swap',
  'precision-motorcycle-service':
    'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800&family=Barlow:wght@400;500;600;700&display=swap',
};

export function generateStaticParams() {
  return getAllDemoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) {
    return { robots: { index: false, follow: false } };
  }

  return {
    title: { absolute: demo.title },
    description: demo.description,
    robots: { index: false, follow: false },
  };
}

export default async function DemoSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) notFound();

  const fontHref = FONT_LINKS[demo.slug];

  let page;
  switch (demo.slug) {
    case 'dimauros-independent-honda-acura-repair':
      page = <DimaurosPage demo={demo} />;
      break;
    case 'coastal-dentistry':
      page = <CoastalPage demo={demo} />;
      break;
    case 'precision-motorcycle-service':
      page = <PrecisionPage demo={demo} />;
      break;
    default: {
      const _exhaustive: never = demo.slug;
      void _exhaustive;
      notFound();
    }
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href={fontHref} />
      {page}
    </>
  );
}
