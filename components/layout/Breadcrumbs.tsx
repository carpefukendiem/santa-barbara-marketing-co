import Link from 'next/link';
import { cn } from '@/lib/utils';

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-body-sm text-sbmc-ink-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-sbmc-teal">
                  {item.label}
                </Link>
              ) : (
                <span className={cn(isLast && 'text-sbmc-navy')}>{item.label}</span>
              )}
              {!isLast ? (
                <span aria-hidden="true" className="text-sbmc-border">
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
