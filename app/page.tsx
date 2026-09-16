import { buildMetadata } from '@/lib/seo';
import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { LocalPanel } from '@/components/sections/LocalPanel';
import { CommunityGrid } from '@/components/sections/CommunityGrid';
import { LocalSeoSection } from '@/components/sections/LocalSeoSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { CaseStudyFeature } from '@/components/sections/CaseStudyFeature';
import { IndustriesStrip } from '@/components/sections/IndustriesStrip';
import { Testimonials } from '@/components/sections/Testimonials';
import { CtaBand } from '@/components/sections/CtaBand';
import { FaqContact } from '@/components/sections/FaqContact';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqPageSchema, professionalServiceSchema } from '@/lib/schema';
import { homepageFaqs } from '@/data/faqs';
import { caseStudies } from '@/data/caseStudies';
import { testimonials } from '@/data/testimonials';
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
      <ServicesGrid />
      <HowWeWork />
      <LocalPanel />
      <CommunityGrid />
      <LocalSeoSection />
      <TechnologySection />
      <CaseStudyFeature items={caseStudies} />
      <IndustriesStrip />
      <Testimonials items={testimonials} />
      <CtaBand />
      <FaqContact />
    </>
  );
}
