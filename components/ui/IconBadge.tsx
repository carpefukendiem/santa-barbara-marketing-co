import { cn } from '@/lib/utils';

export function IconBadge({
  children,
  background,
  size = 56,
  className,
  glyphClassName,
}: {
  children: React.ReactNode;
  background: string;
  size?: number;
  className?: string;
  glyphClassName?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full',
        className,
      )}
      style={{
        width: size,
        height: size,
        backgroundColor: background,
      }}
      aria-hidden="true"
    >
      <span className={cn('text-sbmc-navy', glyphClassName)}>{children}</span>
    </span>
  );
}
