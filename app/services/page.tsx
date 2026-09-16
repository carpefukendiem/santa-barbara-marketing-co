import { buildMetadata } from '@/lib/seo';
import { ServicesOverview } from '@/components/sections/ServicesOverview';

export const metadata = buildMetadata({
  title: 'Digital Marketing Services in Santa Barbara',
  description:
    'Full-service digital marketing in Santa Barbara: Local SEO, websites, Google Ads, and follow-up as one system, not five vendors. Book a Free Call.',
  path: '/services',
});

export default function ServicesPage() {
  return <ServicesOverview />;
}
