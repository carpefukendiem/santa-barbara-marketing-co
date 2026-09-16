'use client';

import { useReveal } from '@/lib/useReveal';
import { cn } from '@/lib/utils';

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-[700ms] ease-sbmc',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        'motion-reduce:translate-y-0 motion-reduce:transition-opacity',
        className,
      )}
    >
      {children}
    </div>
  );
}
