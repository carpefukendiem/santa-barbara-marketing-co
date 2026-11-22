import { buildMetadata } from '@/lib/seo';
import { HomePageContent } from '@/components/sections/HomePageContent';

export const metadata = buildMetadata({
  title:
    'SBMC | Digital Marketing Agency Santa Barbara',
  description:
    'Local SEO, websites, and Google Ads for Santa Barbara, Goleta, Montecito, and Carpinteria. Honest reporting. Book a 30-minute call.',
  path: '/',
  absoluteTitle: true,
});

/** Fallback control render if proxy rewrite is bypassed. Live traffic is rewritten to /hp/a|b. */
export default function HomePage() {
  return <HomePageContent variant="a" />;
}
