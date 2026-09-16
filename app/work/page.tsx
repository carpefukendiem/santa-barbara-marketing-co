import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/sections/CtaBand';
import { WorkGrid } from '@/components/work/WorkGrid';
import { JsonLd } from '@/components/seo/JsonLd';
import { caseStudies, hasCaseStudies } from '@/data/caseStudies';
import { testimonials } from '@/data/testimonials';
import { primaryCta } from '@/data/navigation';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Our Work | Santa Barbara Marketing Co.',
  description:
    'Websites, local SEO, Google Ads, and automation built for real Santa Barbara, Goleta, Montecito, and Santa Ynez Valley businesses. Results published only when verified.',
  path: '/work',
  absoluteTitle: true,
});

const standards = [
  {
    index: '01',
    title: 'Verified',
    body: 'A ranking is a keyword, a position, and a date. A lead count comes from the phone log or the CRM, with a window.',
  },
  {
    index: '02',
    title: 'Permissioned',
    body: 'Real business names appear only with written permission. Otherwise the study is anonymized, not invented.',
  },
  {
    index: '03',
    title: 'Complete',
    body: 'If a result has a caveat, the caveat is in the study.',
  },
];

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
        ])}
      />
      <Section bg="cream" padded={false} className="pt-48 pb-20">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Work' },
            ]}
          />
          <Eyebrow className="mt-8">Our work</Eyebrow>
          <Heading as="h1" className="mt-4" accent="prove them.">
            Real businesses. Real work. Numbers only when we can prove them.
          </Heading>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Santa Barbara Marketing Co. is the new name for work that has been going on in
            this town for years — much of it under our previous name, Ranking SB. Below is
            what we have built for local businesses. Where we publish a result, it names
            the source and the date. Where we do not have that yet, we show the work and
            leave the number out.
          </p>
          <div className="mt-8">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
          </div>
        </Reveal>
      </Section>

      <Section bg="cream">
        {hasCaseStudies ? <WorkGrid studies={caseStudies} /> : null}
      </Section>

      <Section bg="navy">
        <Reveal>
          <Heading as="h2" className="!text-cream">
            How we decide what to publish
          </Heading>
          <ol className="mt-12 grid gap-10 lg:grid-cols-3">
            {standards.map((item) => (
              <li key={item.index}>
                <p className="font-mono text-sm text-ochre">{item.index}</p>
                <p className="mt-3 font-display text-3xl text-cream">{item.title}</p>
                <p className="mt-4 text-cream/75">{item.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {testimonials.length > 0 ? (
        <Section bg="cream">
          <Reveal>
            <ul className="grid gap-10 lg:grid-cols-2">
              {testimonials.map((item) => (
                <li key={`${item.name}-${item.role}`}>
                  <blockquote>
                    <p className="font-display text-2xl text-ink">{item.quote}</p>
                    <footer className="mt-4 text-sm text-stone">
                      {item.name}, {item.role}
                    </footer>
                  </blockquote>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      ) : null}

      <CtaBand
        heading="See how we would measure yours."
        subline="A free call ends with a written 90-day list, not a pitch deck."
      />
    </>
  );
}
