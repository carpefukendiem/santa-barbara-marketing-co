import { LocationPageContent, generateLocationMetadata } from '@/components/sections/LocationPageContent';

const slug = 'montecito-digital-marketing';

export function generateMetadata() {
  return generateLocationMetadata(slug);
}

export default function MontecitoDigitalMarketingPage() {
  return <LocationPageContent slug={slug} />;
}
