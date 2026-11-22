import { cn } from '@/lib/utils';

export function Eyebrow({
  children,
  className,
  align = 'left',
  dark,
}: {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}) {
  return (
    <p
      className={cn(
        'text-eyebrow',
        /* Cream over dark/photo; ochre-ink over cream (AA). */
        dark ? 'text-cream' : 'text-[color:var(--ochre-ink)]',
        align === 'center' && 'text-center',
        className,
      )}
    >
      {children}
    </p>
  );
}
