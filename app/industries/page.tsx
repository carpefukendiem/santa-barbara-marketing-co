import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { industries } from '@/data/industries';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Industries We Serve in Santa Barbara County',
  description:
    'Marketing for home services, professional firms, restaurants, medical, and real estate in Santa Barbara County. See how each vertical searches.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
        ])}
      />
      <PageHero
        variant="simple"
        eyebrow="Who we work with"
        title="Industries we know how to market in the 805"
        subhead="A Funk Zone restaurant, a Goleta HVAC company, and a Coast Village Road practice do not share a search problem. These pages explain how customers in each vertical actually look, what tends to leak, and which of our services are worth the first dollar. We will not invent a client in your category to make the page feel complete."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries' },
        ]}
      />
      <Section bg="white">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <Card key={industry.slug} className="flex h-full flex-col p-7">
                <p className="text-eyebrow text-ocean">{industry.navLabel}</p>
                <h2 className="mt-3 text-h3 text-navy">
                  <Link href={`/industries/${industry.slug}`} className="hover:text-ocean">
                    {industry.name}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-stone">
                  {industry.heroLede.slice(0, industry.heroLede.indexOf('.') + 1)}
                </p>
                <div className="mt-5">
                  <Button variant="ghost" href={`/industries/${industry.slug}`}>
                    How this vertical searches
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-12 max-w-[60ch] text-stone">
            Not on this list? Most of the work still transfers: a Google Business
            Profile that matches the door, pages that match the jobs you want, and
            follow-up that does not wait until Tuesday. Retail, nonprofits,
            education-adjacent shops, and other 805 businesses are welcome if the
            search problem is local.{' '}
            <Link href="/contact" className="font-medium text-ocean underline underline-offset-4">
              Tell us about the business.
            </Link>
          </p>
        </Reveal>
      </Section>
      <CtaBand
        heading="Not sure which page you need?"
        subline="A free call starts from your category and city, not a template."
      />
    </>
  );
}
