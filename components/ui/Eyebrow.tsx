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
        'text-eyebrow inline-flex items-center gap-3',
        dark ? 'text-white/70' : 'text-ocean',
        align === 'center' && 'justify-center',
        className,
      )}
    >
      <span
        className="inline-block h-[2px] w-6 shrink-0 bg-tile"
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
