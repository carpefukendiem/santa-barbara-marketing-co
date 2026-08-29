import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
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
      <Section className="bg-sbmc-cream">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries' },
            ]}
          />
          <SectionEyebrow align="left" className="mt-8">
            Who we work with
          </SectionEyebrow>
          <Heading as="h1" size="lg" className="mt-4 max-w-3xl">
            Industries we know how to market in the 805
          </Heading>
          <p className="mt-6 max-w-[65ch] text-body-lg text-sbmc-ink">
            A Funk Zone restaurant, a Goleta HVAC company, and a Coast Village
            Road practice do not share a search problem. These pages explain how
            customers in each vertical actually look, what tends to leak, and
            which of our services are worth the first dollar. We will not invent
            a client in your category to make the page feel complete.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <Card key={industry.slug} hover className="flex h-full flex-col p-7">
                <p className="text-eyebrow text-sbmc-teal">{industry.navLabel}</p>
                <h2 className="mt-3 text-heading-sm">
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="hover:text-sbmc-teal"
                  >
                    {industry.name}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-body-sm text-sbmc-ink-muted">
                  {industry.heroLede.slice(0, industry.heroLede.indexOf('.') + 1)}
                </p>
                <div className="mt-5">
                  <Button variant="link" href={`/industries/${industry.slug}`}>
                    How this vertical searches
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-12 max-w-[60ch] text-body-sm text-sbmc-ink-muted">
            Not on this list? Most of the work still transfers: a Google Business
            Profile that matches the door, pages that match the jobs you want, and
            follow-up that does not wait until Tuesday. Retail, nonprofits,
            education-adjacent shops, and other 805 businesses are welcome if the
            search problem is local.{' '}
            <Link href="/contact" className="font-medium text-sbmc-teal">
              Tell us about the business.
            </Link>
          </p>
        </Container>
      </Section>
      <CtaBand
        heading="Not sure which page you need?"
        subline="The Growth Plan starts from your category and city, not a template."
      />
    </>
  );
}
