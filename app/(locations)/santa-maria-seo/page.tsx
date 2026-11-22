import { LocationPageContent, generateLocationMetadata } from '@/components/sections/LocationPageContent';

const slug = 'santa-maria-seo';

export function generateMetadata() {
  return generateLocationMetadata(slug);
}

export default function Page() {
  return <LocationPageContent slug={slug} />;
}
