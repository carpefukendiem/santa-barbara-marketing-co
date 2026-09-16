'use client';

import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDark } from '@/components/ui/DarkContext';

export function IconCircle({
  icon: Icon,
  className,
  size = 40,
}: {
  icon: LucideIcon;
  className?: string;
  size?: number;
}) {
  const dark = useDark();
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full',
        dark ? 'bg-white/10 text-white' : 'bg-ocean/10 text-ocean',
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Icon size={Math.round(size * 0.45)} strokeWidth={1.75} />
    </span>
  );
}
