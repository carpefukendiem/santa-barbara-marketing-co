import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ContactForm } from '@/components/forms/ContactForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { site } from '@/data/site';
import { primaryCta } from '@/data/navigation';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { formatPhone, telHref } from '@/lib/utils';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Contact Santa Barbara Marketing Co.',
  description:
    'Contact Santa Barbara Marketing Co. for Local SEO, websites, and Google Ads in the 805. Email us or request a Free Growth Plan. No spam, no drip.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <Section className="bg-sbmc-cream">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Contact' },
            ]}
          />
          <div className="mt-10 grid gap-14 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:items-start">
            <div>
              <SectionEyebrow align="left">Contact</SectionEyebrow>
              <Heading as="h1" size="lg" className="mt-4">
                Tell us about the business
              </Heading>
              <p className="mt-5 text-body-lg text-sbmc-ink">
                A person reads this. You will get a next step, not a drip
                sequence. If you want the written 90-day plan, use the{' '}
                <Link href={primaryCta.href} className="font-medium text-sbmc-teal">
                  Free 805 Growth Plan
                </Link>{' '}
                form instead.
              </p>
              <ul className="mt-8 space-y-4">
                <li>
                  <p className="text-eyebrow text-sbmc-teal">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-block text-body-lg text-sbmc-navy hover:text-sbmc-teal"
                  >
                    {site.email}
                  </a>
                </li>
                {site.phone ? (
                  <li>
                    <p className="text-eyebrow text-sbmc-teal">Phone</p>
                    <a
                      href={telHref(site.phone)}
                      className="mt-1 inline-block text-body-lg text-sbmc-navy hover:text-sbmc-teal"
                    >
                      {formatPhone(site.phone)}
                    </a>
                  </li>
                ) : null}
                <li>
                  <p className="text-eyebrow text-sbmc-teal">Where we work</p>
                  <p className="mt-1 text-body-lg text-sbmc-ink">
                    Santa Barbara, Goleta, Montecito, and Carpinteria. We do not
                    list a street address we cannot verify.
                  </p>
                </li>
              </ul>
            </div>
            <Card className="p-6 md:p-8">
              <ContactForm />
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
