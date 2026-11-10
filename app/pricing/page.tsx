import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { PricingPage } from '@/components/pricing/PricingPage';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Pricing: The Local Lead Plan, $297/mo',
  description:
    'The Local Lead Plan is $297/mo, or $2,970/yr with 2 months free. Website, full CRM, follow-up, reporting, and training. Voice AI and Chat AI are optional and not included.',
  path: '/pricing',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ])}
      />
      <PricingPage />
    </>
  );
}
