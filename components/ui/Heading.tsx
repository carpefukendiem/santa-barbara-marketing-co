import { cn } from '@/lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';
type HeadingSize = 'xl' | 'lg' | 'md' | 'sm';

type HeadingProps = {
  as?: HeadingLevel;
  size?: HeadingSize;
  className?: string;
  children: React.ReactNode;
};

const sizeClass: Record<HeadingSize, string> = {
  xl: 'text-display-xl text-sbmc-navy-soft',
  lg: 'text-display-lg text-sbmc-navy-soft',
  md: 'text-display-md text-sbmc-navy-soft',
  sm: 'text-heading-sm text-sbmc-navy-soft',
};

export function Heading({
  as: Tag = 'h2',
  size = 'lg',
  className,
  children,
}: HeadingProps) {
  return <Tag className={cn(sizeClass[size], className)}>{children}</Tag>;
}
