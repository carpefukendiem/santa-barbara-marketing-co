'use client';

import { useMemo, useState } from 'react';
import { ResourceCard } from '@/components/ui/ResourceCard';
import {
  resourceCategories,
  resourceCategoryLabels,
  type ResourceCategory,
} from '@/data/resources';

export type ResourceListItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: ResourceCategory;
  readTime: string;
};

type Filter = 'all' | ResourceCategory;

export function ResourceFilter({ items }: { items: ResourceListItem[] }) {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = useMemo(() => {
    if (filter === 'all') return items;
    return items.filter((item) => item.category === filter);
  }, [filter, items]);

  const counts = useMemo(() => {
    const next: Record<Filter, number> = {
      all: items.length,
      seo: 0,
      ads: 0,
      websites: 0,
      ai: 0,
      strategy: 0,
    };
    for (const item of items) {
      next[item.category] += 1;
    }
    return next;
  }, [items]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter articles by category"
      >
        <FilterButton
          label="All"
          active={filter === 'all'}
          count={counts.all}
          onClick={() => setFilter('all')}
        />
        {resourceCategories.map((category) => (
          <FilterButton
            key={category}
            label={resourceCategoryLabels[category]}
            active={filter === category}
            count={counts[category]}
            onClick={() => setFilter(category)}
          />
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="mt-10 text-lg text-stone">
          No published articles in this category yet. The SEO, ads, websites, and
          AI pieces are live. Strategy guides are on the roadmap.
        </p>
      ) : (
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {visible.map((item) => (
            <li key={item.slug}>
              <ResourceCard
                title={item.title}
                href={`/resources/${item.slug}`}
                excerpt={item.excerpt}
                category={resourceCategoryLabels[item.category]}
                readTime={item.readTime}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterButton({
  label,
  active,
  count,
  onClick,
}: {
  label: string;
  active: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? 'rounded-full bg-navy px-4 py-2 text-sm font-medium text-white'
          : 'rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium text-navy hover:bg-navy hover:text-white'
      }
    >
      {label}
      <span className={active ? 'ml-2 text-white/70' : 'ml-2 text-stone'}>
        {count}
      </span>
    </button>
  );
}
