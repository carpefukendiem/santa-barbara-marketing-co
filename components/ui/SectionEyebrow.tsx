import { cn } from '@/lib/utils';
import { Eyebrow } from '@/components/ui/Eyebrow';

type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
  align?: 'center' | 'left';
};

export function SectionEyebrow({
  children,
  className,
  align = 'center',
}: SectionEyebrowProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      <Eyebrow align={align}>{children}</Eyebrow>
    </div>
  );
}
