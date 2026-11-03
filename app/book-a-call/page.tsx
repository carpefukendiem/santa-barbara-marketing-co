import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { GhlCalendarEmbed } from '@/components/booking/BookCallModal';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Book a Free Call | Santa Barbara Marketing Co.',
  description:
    'A free 30-minute call with a local marketing team. No contract, no pitch deck.',
  path: '/book-a-call',
  absoluteTitle: true,
});

const points = [
  {
    label: "Who it's for",
    body: 'Local businesses in Santa Barbara, Goleta, Montecito, and Carpinteria.',
  },
  {
    label: 'What we cover',
    body: 'Where you show up today, what nearby competitors are doing, and what we would fix first.',
  },
  {
    label: 'What happens after',
    body: 'A proposal if it fits. The list either way.',
  },
];

export default function BookACallPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Book a Free Call', path: '/book-a-call' },
        ])}
      />
      <PageHero
        variant="simple"
        title="Book a Free Call."
        accent="Call."
        subhead="Thirty minutes. We look at your visibility before we talk and bring a short list of what we would do first."
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { label: 'Book a Free Call' },
        ]}
        primaryCta={null}
        compact
      />
      <Section bg="navy">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <ul className="space-y-8">
              {points.map((point) => (
                <li key={point.label}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ochre">
                    {point.label}
                  </p>
                  <p className="mt-3 text-lg text-white/80">{point.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden lg:col-span-7">
            <GhlCalendarEmbed />
          </div>
        </div>
      </Section>
    </>
  );
}
