import { LocationPageContent, generateLocationMetadata } from '@/components/sections/LocationPageContent';

const slug = 'santa-barbara-digital-marketing';

export function generateMetadata() {
  return generateLocationMetadata(slug);
}

export default function SantaBarbaraDigitalMarketingPage() {
  return <LocationPageContent slug={slug} />;
}
