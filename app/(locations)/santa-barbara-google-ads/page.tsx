import { LocationPageContent, generateLocationMetadata } from '@/components/sections/LocationPageContent';

const slug = 'santa-barbara-google-ads';

export function generateMetadata() {
  return generateLocationMetadata(slug);
}

export default function SantaBarbaraGoogleAdsPage() {
  return <LocationPageContent slug={slug} />;
}
