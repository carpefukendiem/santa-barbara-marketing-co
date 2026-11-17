import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllDemoSlugs, getDemo } from '@/data/demos';
import type { DemoSlug } from '@/data/demos';
import { AmbiancePage } from '@/components/demos/ambiance/AmbiancePage';
import { CoastalPage } from '@/components/demos/coastal/CoastalPage';
import { DimaurosPage } from '@/components/demos/dimauros/DimaurosPage';
import { DomingosPage } from '@/components/demos/domingos/DomingosPage';
import { FairviewPage } from '@/components/demos/fairview/FairviewPage';
import { GoletaBakeryPage } from '@/components/demos/goleta-bakery/GoletaBakeryPage';
import { JaviersPage } from '@/components/demos/javiers/JaviersPage';
import { JewelryMartPage } from '@/components/demos/jewelry-mart/JewelryMartPage';
import { LaGuerreritaPage } from '@/components/demos/la-guerrerita/LaGuerreritaPage';
import { MarysPage } from '@/components/demos/marys/MarysPage';
import { MayaPage } from '@/components/demos/maya/MayaPage';
import { OceanNailsPage } from '@/components/demos/ocean-nails/OceanNailsPage';
import { PrecisionPage } from '@/components/demos/precision/PrecisionPage';
import { ShearEnvyPage } from '@/components/demos/shear-envy/ShearEnvyPage';
import { StarNailsPage } from '@/components/demos/star-nails/StarNailsPage';

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
  'javiers-old-town-garage':
    'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap',
  'shear-envy':
    'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;0,6..96,700;1,6..96,400;1,6..96,500;1,6..96,600;1,6..96,700&family=Manrope:wght@400;500;600;700&display=swap',
  'la-guerrerita':
    'https://fonts.googleapis.com/css2?family=Shrikhand&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap',
  'fairview-mattress-furniture':
    'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..600,0..100,0..1;1,9..144,300..600,0..100,0..1&family=Instrument+Sans:wght@400;500;600;700&display=swap',
  'domingos-cafe':
    'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@500;700;800&family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,700;0,9..144,900;1,9..144,500;1,9..144,700&family=Yellowtail&family=Work+Sans:wght@400;500;600&display=swap',
  'goleta-bakery':
    'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,500;12..96,75..100,700;12..96,75..100,800&family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@500&display=swap',
  'jewelry-mart':
    'https://fonts.googleapis.com/css2?family=Marcellus&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Jost:wght@400;500;600&display=swap',
  'marys-beauty-center':
    'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Questrial&family=Figtree:wght@400;500;600;700&display=swap',
  'maya-income-tax-co':
    'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,500;0,6..72,700;1,6..72,500&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap',
  'ocean-nails-spa':
    'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,700;1,6..96,400;1,6..96,500&family=Manrope:wght@400;500;600;700;800&display=swap',
  'star-nails-spa':
    'https://fonts.googleapis.com/css2?family=Coustard:wght@400;900&family=Figtree:wght@400;500;600;700;800&family=DM+Mono:wght@500&display=swap',
  'ambiance-nail-care-services':
    'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Source+Sans+3:wght@600&family=Instrument+Sans:wght@400;500;600;700&display=swap',
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
    case 'javiers-old-town-garage':
      page = <JaviersPage demo={demo} />;
      break;
    case 'shear-envy':
      page = <ShearEnvyPage demo={demo} />;
      break;
    case 'la-guerrerita':
      page = <LaGuerreritaPage demo={demo} />;
      break;
    case 'fairview-mattress-furniture':
      page = <FairviewPage demo={demo} />;
      break;
    case 'domingos-cafe':
      page = <DomingosPage demo={demo} />;
      break;
    case 'goleta-bakery':
      page = <GoletaBakeryPage demo={demo} />;
      break;
    case 'jewelry-mart':
      page = <JewelryMartPage demo={demo} />;
      break;
    case 'marys-beauty-center':
      page = <MarysPage demo={demo} />;
      break;
    case 'maya-income-tax-co':
      page = <MayaPage demo={demo} />;
      break;
    case 'ocean-nails-spa':
      page = <OceanNailsPage demo={demo} />;
      break;
    case 'star-nails-spa':
      page = <StarNailsPage demo={demo} />;
      break;
    case 'ambiance-nail-care-services':
      page = <AmbiancePage demo={demo} />;
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
