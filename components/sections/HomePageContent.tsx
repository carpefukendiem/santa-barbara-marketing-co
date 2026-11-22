import { Hero } from '@/components/sections/Hero';
import { HomeTrim } from '@/components/sections/HomeTrim';
import { AnswerFirst } from '@/components/seo/AnswerFirst';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqPageSchema, webPageSchema } from '@/lib/schema';
import { homepageFaqs } from '@/data/faqs';
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
          webPageSchema({
            path: '/',
            name: 'SBMC | Digital Marketing Agency Santa Barbara',
            description:
              'Marketing agency based in Santa Barbara, serving all of Santa Barbara County. The Local Lead Plan is $297/mo.',
          }),
          faqPageSchema(homepageFaqs),
        ]}
      />
      <Hero copy={copy} />
      <AnswerFirst
        answer="Santa Barbara Marketing Co is a marketing agency based in Santa Barbara, serving all of Santa Barbara County. The Local Lead Plan is $297/mo or $2,970/yr and includes a website (typically live in 30 days), local SEO, Google Business Profile work, and a full CRM with follow-up. English and Spanish."
        facts={[
          { label: 'Plan', value: '$297/mo or $2,970/yr' },
          { label: 'Launch', value: 'Website typically live in 30 days' },
          { label: 'Service area', value: 'All of Santa Barbara County' },
          { label: 'Contact', value: '(805) 307-7600 · info@sbmc.io' },
        ]}
      />
      <HomeTrim copy={copy} />
    </>
  );
}
