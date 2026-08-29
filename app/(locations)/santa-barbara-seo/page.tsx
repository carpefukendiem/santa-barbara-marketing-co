import { LocationPageContent, generateLocationMetadata } from '@/components/sections/LocationPageContent';

const slug = 'santa-barbara-seo';

export function generateMetadata() {
  return generateLocationMetadata(slug);
}

export default function SantaBarbaraSeoPage() {
  return <LocationPageContent slug={slug} />;
}
