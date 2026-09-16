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
      className={cn('text-sm', light ? 'text-white/70' : 'text-stone', className)}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
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
                <span className={cn(isLast && (light ? 'text-white' : 'text-navy'))}>
                  {item.label}
                </span>
              )}
              {!isLast ? (
                <ChevronRight size={14} aria-hidden="true" className="opacity-50" />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
