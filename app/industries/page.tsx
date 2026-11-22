import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { getChildIndustries, industries } from '@/data/industries';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Industries We Serve in SB County',
  description:
    'Marketing for home services, professional firms, restaurants, medical, real estate, and trade-specific verticals in Santa Barbara County. See how each vertical searches.',
  path: '/industries',
});

const parentIndustries = industries.filter((industry) => !industry.parent);
const childIndustries = industries.filter((industry) => industry.parent);

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
            {parentIndustries.map((industry) => {
              const children = getChildIndustries(industry.slug);
              return (
                <Card key={industry.slug} className="flex h-full flex-col p-7">
                  <p className="text-eyebrow text-ocean">{industry.navLabel}</p>
                  <h2 className="mt-3 text-h3 text-navy">
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="hover:text-ocean"
                    >
                      {industry.name}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-stone">
                    {industry.heroLede.slice(
                      0,
                      industry.heroLede.indexOf('.') + 1,
                    )}
                  </p>
                  {children.length > 0 ? (
                    <ul className="mt-4 space-y-1 text-sm text-stone">
                      {children.map((child) => (
                        <li key={child.slug}>
                          <Link
                            href={`/industries/${child.slug}`}
                            className="text-ocean underline-offset-4 hover:underline"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-5">
                    <Button
                      variant="ghost"
                      href={`/industries/${industry.slug}`}
                    >
                      How this vertical searches
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
          {childIndustries.some(
            (industry) =>
              !parentIndustries.some(
                (parent) => parent.slug === industry.parent,
              ),
          ) || childIndustries.length > 0 ? (
            <div className="mt-16">
              <h2 className="font-display text-3xl text-navy">
                All industry pages
              </h2>
              <p className="mt-3 max-w-prose text-stone">
                Every vertical we have written, including trade-specific pages
                under home services, medical, and hospitality.
              </p>
              <ul className="mt-6 columns-1 gap-8 sm:columns-2 lg:columns-3">
                {industries.map((industry) => (
                  <li
                    key={industry.slug}
                    className="mb-2 break-inside-avoid"
                  >
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="text-navy underline-offset-4 hover:underline"
                    >
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <p className="mt-12 max-w-[60ch] text-stone">
            Not on this list? Most of the work still transfers: a Google Business
            Profile that matches the door, pages that match the jobs you want, and
            follow-up that does not wait until Tuesday. Retail, nonprofits,
            education-adjacent shops, and other 805 businesses are welcome if the
            search problem is local.{' '}
            <Link
              href="/contact"
              className="font-medium text-ocean underline underline-offset-4"
            >
              Tell us about the business.
            </Link>
          </p>
        </Reveal>
      </Section>
      <CtaBand
        heading="Not sure which page you need?"
        subline="A 20-minute call starts from your category and city, not a template."
      />
    </>
  );
}
