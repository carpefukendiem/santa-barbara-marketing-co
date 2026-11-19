import { buildMetadata } from '@/lib/seo';
import { Hero } from '@/components/sections/Hero';
import { HomeTrim } from '@/components/sections/HomeTrim';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqPageSchema, professionalServiceSchema } from '@/lib/schema';
import { homepageFaqs } from '@/data/faqs';
import { homepageMeta } from '@/data/homepage';
import { site } from '@/data/site';
import { absoluteUrl } from '@/lib/utils';

export const metadata = buildMetadata({
  title: homepageMeta.title,
  description: homepageMeta.description,
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
