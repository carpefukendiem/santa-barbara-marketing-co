import { cloneElement, isValidElement } from 'react';
import { cn } from '@/lib/utils';

type GlyphProps = { size?: number };

export function IconBadge({
  children,
  background,
  size = 72,
  className,
  glyphClassName,
}: {
  children: React.ReactNode;
  background: string;
  size?: number;
  className?: string;
  glyphClassName?: string;
}) {
  const glyphSize = Math.round(size * 0.46);
  const glyph = isValidElement<GlyphProps>(children)
    ? cloneElement(children, { size: children.props.size ?? glyphSize })
    : children;

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
      <span className={cn('text-sbmc-navy', glyphClassName)}>{glyph}</span>
    </span>
  );
}
