import { LocationPageContent, generateLocationMetadata } from '@/components/sections/LocationPageContent';

const slug = 'goleta-digital-marketing';

export function generateMetadata() {
  return generateLocationMetadata(slug);
}

export default function GoletaDigitalMarketingPage() {
  return <LocationPageContent slug={slug} />;
}
