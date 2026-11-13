import { buildMetadata } from '@/lib/seo';
import { Hero } from '@/components/sections/Hero';
import { HomeTrim } from '@/components/sections/HomeTrim';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqPageSchema, professionalServiceSchema } from '@/lib/schema';
import { homepageFaqs } from '@/data/faqs';
import { site } from '@/data/site';
import { absoluteUrl } from '@/lib/utils';

export const metadata = buildMetadata({
  title:
    'Santa Barbara Marketing Co. | Digital Marketing Agency in Santa Barbara, CA',
  description:
    'Local SEO, websites, and Google Ads for Santa Barbara, Goleta, Montecito, and Carpinteria. Honest reporting. Book a free call.',
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
