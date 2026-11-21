import { buildMetadata } from '@/lib/seo';
import { Hero } from '@/components/sections/Hero';
import { HomeTrim } from '@/components/sections/HomeTrim';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqPageSchema, professionalServiceSchema } from '@/lib/schema';
import { homepageFaqs } from '@/data/faqs';
import { site } from '@/data/site';
import { absoluteUrl } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'The Local Lead Plan | Santa Barbara Marketing Co.',
  description:
    'Website, full CRM, and follow-up for Santa Barbara County businesses. $297/mo or $2,970/yr. Your site is live in 30 days. Cancel anytime with 30-day written notice.',
  path: '/',
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          professionalServiceSchema({
            name: site.name,
            description: site.description,
            url: site.url,
            image: absoluteUrl('/images/photos/hero-santa-barbara.webp'),
          }),
          faqPageSchema(homepageFaqs),
        ]}
      />
      <Hero />
      <HomeTrim />
    </>
  );
}
