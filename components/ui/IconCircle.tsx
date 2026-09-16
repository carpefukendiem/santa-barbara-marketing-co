import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function IconCircle({
  icon: Icon,
  className,
  size = 40,
}: {
  icon: LucideIcon;
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full bg-ocean/10 text-ocean [.bg-navy_&]:bg-white/10 [.bg-navy_&]:text-white',
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Icon size={Math.round(size * 0.45)} strokeWidth={1.75} />
    </span>
  );
}
