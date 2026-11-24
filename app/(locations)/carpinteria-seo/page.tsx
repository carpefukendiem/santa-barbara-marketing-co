import { LocationPageContent, generateLocationMetadata } from '@/components/sections/LocationPageContent';

const slug = 'carpinteria-seo';

export function generateMetadata() {
  return generateLocationMetadata(slug);
}

export default function Page() {
  return <LocationPageContent slug={slug} />;
}
