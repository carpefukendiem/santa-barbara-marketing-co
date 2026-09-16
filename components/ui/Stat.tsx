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
    <div className={cn('border-t border-rule pt-6', className)}>
      <p className="font-display text-display-md text-ink">{value}</p>
      <p className="mt-1 text-body-sm text-stone">{label}</p>
    </div>
  );
}
