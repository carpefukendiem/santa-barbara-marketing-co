import { cn } from '@/lib/utils';

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
    <p
      className={cn(
        'text-eyebrow text-sbmc-teal flex items-center gap-4',
        align === 'center' ? 'justify-center' : 'justify-start',
        className,
      )}
    >
      <span
        className="hidden h-px w-10 bg-sbmc-border sm:block"
        aria-hidden="true"
      />
      {children}
      <span
        className="hidden h-px w-10 bg-sbmc-border sm:block"
        aria-hidden="true"
      />
    </p>
  );
}
