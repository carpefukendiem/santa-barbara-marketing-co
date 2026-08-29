import { cn } from '@/lib/utils';

export function Stat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-[12px] border border-sbmc-border bg-sbmc-white p-6 shadow-card',
        className,
      )}
    >
      <p className="font-display text-display-md text-sbmc-navy-soft">{value}</p>
      <p className="mt-1 text-body-sm text-sbmc-ink-muted">{label}</p>
    </div>
  );
}
