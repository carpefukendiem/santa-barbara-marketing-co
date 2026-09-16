import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { Prose } from '@/components/ui/Prose';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { NumberedList } from '@/components/ui/NumberedList';
import { printHub, printServices } from '@/data/printServices';
import { primaryCta } from '@/data/navigation';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/data/site';

export const metadata = buildMetadata({
  title: printHub.metaTitle,
  description: printHub.metaDescription,
  path: '/services/print-and-apparel',
});

export default function PrintAndApparelPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Print & Apparel', path: '/services/print-and-apparel' },
          ]),
          serviceSchema({
            name: printHub.name,
            serviceType: 'Print & Apparel',
            description: printHub.metaDescription,
            url: `${site.url}/services/print-and-apparel`,
          }),
        ]}
      />
      <PageHero
        variant="simple"
        title={printHub.h1}
        accent="Apparel."
        subhead={printHub.subhead}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Print & Apparel' },
        ]}
        primaryCta={primaryCta}
        secondaryCta={{ href: '/services', label: 'Our Services' }}
      />
      <Section>
        <div className="grid lg:grid-cols-12">
          <Prose className="lg:col-span-7">
            <p>{printHub.intro}</p>
          </Prose>
        </div>
        <Reveal>
          <NumberedList
            className="mt-12"
            items={printServices.map((service, index) => ({
              index: index + 1,
              name: service.name,
              description: service.cardBlurb,
              href: `/services/${service.slug}`,
            }))}
          />
        </Reveal>
      </Section>
      <CtaBand />
    </>
  );
}
