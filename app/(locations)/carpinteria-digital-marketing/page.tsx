import { LocationPageContent, generateLocationMetadata } from '@/components/sections/LocationPageContent';

const slug = 'carpinteria-digital-marketing';

export function generateMetadata() {
  return generateLocationMetadata(slug);
}

export default function CarpinteriaDigitalMarketingPage() {
  return <LocationPageContent slug={slug} />;
}
