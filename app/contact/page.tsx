import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/forms/ContactForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { site } from '@/data/site';
import { primaryCta } from '@/data/navigation';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { formatPhone, telHref } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'Contact Santa Barbara Marketing Co.',
  description:
    'Contact Santa Barbara Marketing Co. for Local SEO, websites, and Google Ads in the 805. Email us or request a free call. No spam, no drip.',
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
      <PageHero
        variant="simple"
        eyebrow="Contact"
        title="Tell us about the business"
        subhead="A person reads this. You will get a next step, not a drip sequence."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />
      <Section bg="white">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-lg text-ink">
                If you want the written 90-day plan, use the{' '}
                <Link href={primaryCta.href} className="font-medium text-ocean underline underline-offset-4">
                  Free Call
                </Link>{' '}
                form instead.
              </p>
              <ul className="mt-8 space-y-4">
                <li>
                  <p className="text-eyebrow text-ocean">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-block text-lg text-navy hover:text-ocean"
                  >
                    {site.email}
                  </a>
                </li>
                {site.phone ? (
                  <li>
                    <p className="text-eyebrow text-ocean">Phone</p>
                    <a
                      href={telHref(site.phone)}
                      className="mt-1 inline-block text-lg text-navy hover:text-ocean"
                    >
                      {formatPhone(site.phone)}
                    </a>
                  </li>
                ) : null}
                <li>
                  <p className="text-eyebrow text-ocean">Where we work</p>
                  <p className="mt-1 text-lg text-ink">
                    Santa Barbara, Goleta, Montecito, and Carpinteria. We do not
                    list a street address we cannot verify.
                  </p>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
