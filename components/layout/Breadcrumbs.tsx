import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({
  items,
  className,
  light = false,
}: {
  items: Crumb[];
  className?: string;
  light?: boolean;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'min-w-0 max-w-full font-mono text-[11px] uppercase tracking-[0.16em]',
        light ? 'text-ochre' : 'text-stone',
        className,
      )}
    >
      {/*
        Single row by default: earlier crumbs do not shrink; the last crumb
        truncates with ellipsis (min-width:0). flex-wrap only kicks in if the
        earlier crumbs alone cannot fit the viewport.
      */}
      <ol className="flex min-w-0 flex-nowrap items-center gap-x-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={`${item.label}-${index}`}
              className={cn(
                'flex items-center gap-1.5',
                isLast ? 'min-w-0 basis-0 grow' : 'shrink-0',
              )}
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    'hover:text-ocean',
                    light && 'hover:text-white',
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    isLast && (light ? 'text-white' : 'text-navy'),
                    isLast &&
                      'block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap',
                  )}
                  title={isLast ? item.label : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast ? (
                <ChevronRight
                  size={14}
                  aria-hidden="true"
                  className="shrink-0 opacity-50"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
