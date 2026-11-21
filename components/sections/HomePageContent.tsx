import { Hero } from '@/components/sections/Hero';
import { HomeTrim } from '@/components/sections/HomeTrim';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqPageSchema, professionalServiceSchema } from '@/lib/schema';
import { homepageFaqs } from '@/data/faqs';
import { site } from '@/data/site';
import { absoluteUrl } from '@/lib/utils';
import {
  getHomepageCopy,
  type HomepageVariantId,
} from '@/data/homepage-variants';

export function HomePageContent({ variant }: { variant: HomepageVariantId }) {
  const copy = getHomepageCopy(variant);

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
      <Hero copy={copy} />
      <HomeTrim copy={copy} />
    </>
  );
}
