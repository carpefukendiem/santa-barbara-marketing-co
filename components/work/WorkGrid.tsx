'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { Reveal } from '@/components/ui/Reveal';
import type { CaseStudy } from '@/data/caseStudies';
import { visibleMetrics } from '@/data/caseStudies';
import { cn } from '@/lib/utils';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'local-seo', label: 'Local SEO' },
  { id: 'web-design', label: 'Web Design' },
  { id: 'google-ads', label: 'Google Ads' },
  { id: 'automation', label: 'Automation' },
  { id: 'events', label: 'Events' },
] as const;

function matchesFilter(study: CaseStudy, filter: (typeof filters)[number]['id']): boolean {
  if (filter === 'all') return true;
  if (filter === 'local-seo') return study.servicesUsed.includes('Local SEO');
  if (filter === 'web-design') {
    return study.servicesUsed.some((service) => service.includes('Web Design'));
  }
  if (filter === 'google-ads') return study.servicesUsed.includes('Google Ads');
  if (filter === 'automation') return study.servicesUsed.includes('Marketing Automation');
  return (
    study.industry.toLowerCase().includes('event') ||
    study.industry.toLowerCase().includes('festival') ||
    study.industry.toLowerCase().includes('competition')
  );
}

export function WorkGrid({ studies }: { studies: CaseStudy[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]['id']>('all');
  const visible = useMemo(
    () => studies.filter((study) => !study.isPlaceholder && matchesFilter(study, filter)),
    [studies, filter],
  );

  return (
    <Reveal>
      <div className="flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={cn(
              'inline-flex items-center rounded-full px-4 py-2 text-sm transition-colors duration-200',
              filter === item.id
                ? 'bg-navy text-cream'
                : 'border border-navy/15 text-navy hover:bg-navy hover:text-white',
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((study) => {
          const metrics = visibleMetrics(study.metrics);
          return (
            <Card key={study.slug} className="flex h-full flex-col">
              <Link href={`/work/${study.slug}`} className="block">
                <h2 className="font-display text-3xl text-ink">{study.client}</h2>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
                  {study.industry} · {study.location}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {study.servicesUsed.map((service) => (
                    <li key={service}>
                      <Chip className="px-3 py-1 text-xs">{service}</Chip>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-stone">{study.challenge}</p>
                {study.formerBrandNote ? (
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-tile">
                    Completed as Ranking SB
                  </p>
                ) : null}
                {metrics.length > 0 ? (
                  <ul className="mt-4 space-y-1 text-sm text-ink">
                    {metrics.map((metric) => (
                      <li key={metric.label}>
                        {metric.value ? `${metric.value} · ${metric.label}` : metric.label}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Link>
              {study.liveUrl && study.status !== 'anonymized' ? (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 inline-flex text-sm text-ink hover:text-tile"
                >
                  Visit site ↗
                </a>
              ) : null}
            </Card>
          );
        })}
      </div>
    </Reveal>
  );
}
