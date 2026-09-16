import Link from 'next/link';
import { cn } from '@/lib/utils';

export type NumberedListItem = {
  index: number;
  name: string;
  description: string;
  href?: string;
  group?: string;
};

function Row({ item, last }: { item: NumberedListItem; last: boolean }) {
  const inner = (
    <>
      <span className="font-mono text-sm text-tile group-hover:text-cream">
        {String(item.index).padStart(2, '0')}
      </span>
      <span>
        <span className="block font-display text-4xl leading-none">{item.name}</span>
        <span className="mt-3 block text-base text-stone group-hover:text-cream/80">
          {item.description}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-current transition-transform duration-200 group-hover:-rotate-45"
      >
        →
      </span>
    </>
  );
  const classes = cn(
    'group grid grid-cols-[4rem_1fr_3rem] items-baseline border-t border-rule py-9 transition-colors duration-200',
    item.href && 'hover:bg-tile hover:text-cream',
    last && 'border-b',
  );
  if (item.href) {
    return (
      <Link href={item.href} className={classes}>
        {inner}
      </Link>
    );
  }
  return <div className={classes}>{inner}</div>;
}

export function NumberedList({
  items,
  className,
}: {
  items: NumberedListItem[];
  className?: string;
}) {
  return (
    <div className={className}>
      {items.map((item, i) => (
        <div key={`${item.name}-${item.index}`}>
          {item.group && (i === 0 || items[i - 1]?.group !== item.group) ? (
            <p className="border-t border-rule pt-9 font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
              {item.group}
            </p>
          ) : null}
          <Row item={item} last={i === items.length - 1} />
        </div>
      ))}
    </div>
  );
}
