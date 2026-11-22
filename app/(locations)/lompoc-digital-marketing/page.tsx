import { LocationPageContent, generateLocationMetadata } from '@/components/sections/LocationPageContent';

const slug = 'lompoc-digital-marketing';

export function generateMetadata() {
  return generateLocationMetadata(slug);
}

export default function Page() {
  return <LocationPageContent slug={slug} />;
}
