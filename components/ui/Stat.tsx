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
        'rounded-2xl border border-line bg-white p-6 shadow-card',
        className,
      )}
    >
      <p className="font-display text-display-md text-navy">{value}</p>
      <p className="mt-1 text-body-sm text-stone">{label}</p>
    </div>
  );
}
