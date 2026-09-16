import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { PageHero } from '@/components/ui/PageHero';
import { Prose } from '@/components/ui/Prose';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { NumberedList, type NumberedListItem } from '@/components/ui/NumberedList';
import type { PrintService } from '@/data/printServices';
import { printServices } from '@/data/printServices';
import { primaryCta } from '@/data/navigation';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { site } from '@/data/site';

export function PrintServicePageContent({
  service,
}: {
  service: PrintService;
}) {
  const items: NumberedListItem[] = service.whatsIncluded.map((item, index) => ({
    index: index + 1,
    name: item.title,
    description: item.body,
  }));

  const related = printServices.filter((item) => item.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Print & Apparel', path: '/services/print-and-apparel' },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
          serviceSchema({
            name: service.name,
            serviceType: service.name,
            description: service.metaDescription,
            url: `${site.url}/services/${service.slug}`,
          }),
        ]}
      />
      <PageHero
        variant="simple"
        title={service.h1}
        accent={service.h1.split(' ').pop()}
        subhead={service.subhead}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Print & Apparel', href: '/services/print-and-apparel' },
          { label: service.name },
        ]}
        primaryCta={primaryCta}
        secondaryCta={{ href: '/services', label: 'Our Services' }}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Prose>
              <p>{service.intro}</p>
              <p>
                <strong>Good fit:</strong> {service.goodFit}
              </p>
            </Prose>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-28">
              <p className="border-t-2 border-tile pt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
                Related services
              </p>
              <ul className="mt-4 space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Button variant="ghost" href={`/services/${item.slug}`}>
                      {item.name}
                    </Button>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              </div>
            </div>
          </aside>
        </div>
      </Section>
      <Section>
        <Reveal>
          <Eyebrow>What&apos;s included</Eyebrow>
          <Heading className="mt-4">The work</Heading>
          <NumberedList className="mt-10" items={items} />
        </Reveal>
      </Section>
      <CtaBand />
    </>
  );
}
