import { cn } from '@/lib/utils';
import { DarkProvider } from '@/components/ui/DarkContext';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'aside' | 'div';
  padded?: boolean;
  bg?: 'white' | 'sand' | 'navy';
  py?: string;
};

export function Section({
  children,
  className,
  id,
  as: Tag = 'section',
  padded = true,
  bg,
  py,
}: SectionProps) {
  const dark = bg === 'navy';
  const inner = bg ? (
    <div className="mx-auto max-w-7xl px-6">{children}</div>
  ) : (
    children
  );

  return (
    <DarkProvider dark={dark}>
      <Tag
        id={id}
        className={cn(
          !bg && padded && 'section-pad',
          bg && (py ?? 'py-20 lg:py-28'),
          bg === 'white' && 'bg-white text-ink',
          bg === 'sand' && 'bg-sand text-ink',
          bg === 'navy' && 'bg-navy text-white',
          className,
        )}
      >
        {inner}
      </Tag>
    </DarkProvider>
  );
}
