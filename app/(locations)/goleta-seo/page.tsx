import { LocationPageContent, generateLocationMetadata } from '@/components/sections/LocationPageContent';

const slug = 'goleta-seo';

export function generateMetadata() {
  return generateLocationMetadata(slug);
}

export default function Page() {
  return <LocationPageContent slug={slug} />;
}
