import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'aside' | 'div';
  padded?: boolean;
};

export function Section({
  children,
  className,
  id,
  as: Tag = 'section',
  padded = true,
}: SectionProps) {
  return (
    <Tag id={id} className={cn(padded && 'section-pad', className)}>
      {children}
    </Tag>
  );
}
