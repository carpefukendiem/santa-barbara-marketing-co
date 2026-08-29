import { cn } from '@/lib/utils';

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-sbmc-aqua-light px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-sbmc-navy',
        className,
      )}
    >
      {children}
    </span>
  );
}
