import { LocationPageContent, generateLocationMetadata } from '@/components/sections/LocationPageContent';

const slug = 'santa-barbara-web-design';

export function generateMetadata() {
  return generateLocationMetadata(slug);
}

export default function SantaBarbaraWebDesignPage() {
  return <LocationPageContent slug={slug} />;
}
