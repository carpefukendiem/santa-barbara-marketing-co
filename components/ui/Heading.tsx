import { cn } from '@/lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';
type HeadingSize = 'xl' | 'lg' | 'md' | 'sm';

type HeadingProps = {
  as?: HeadingLevel;
  size?: HeadingSize;
  className?: string;
  children: React.ReactNode;
  accent?: string;
};

const sizeClass: Record<HeadingSize, string> = {
  xl: 'text-h1',
  lg: 'text-h2',
  md: 'text-display-md',
  sm: 'text-h3',
};

function withAccent(children: React.ReactNode, accent?: string) {
  if (!accent || typeof children !== 'string') return children;
  const index = children.indexOf(accent);
  if (index === -1) return children;
  return (
    <>
      {children.slice(0, index)}
      <em className="not-italic text-tile">{accent}</em>
      {children.slice(index + accent.length)}
    </>
  );
}

export function Heading({
  as: Tag = 'h2',
  size,
  className,
  children,
  accent,
}: HeadingProps) {
  const resolvedSize = size ?? (Tag === 'h1' ? 'xl' : Tag === 'h3' ? 'sm' : 'lg');
  return (
    <Tag className={cn(sizeClass[resolvedSize], 'text-navy', className)}>
      {withAccent(children, accent)}
    </Tag>
  );
}
