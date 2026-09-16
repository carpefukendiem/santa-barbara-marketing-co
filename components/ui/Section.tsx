import { cn } from '@/lib/utils';
import { DarkProvider } from '@/components/ui/DarkContext';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'aside' | 'div';
  padded?: boolean;
  bg?: 'white' | 'sand' | 'navy' | 'tile' | 'cream';
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
  const dark = bg === 'navy' || bg === 'tile';
  const inner = (
    <div className="site-container">{children}</div>
  );

  return (
    <DarkProvider dark={dark}>
      <Tag
        id={id}
        className={cn(
          padded && (py ?? 'py-24 lg:py-36'),
          (bg === 'white' || bg === 'sand' || bg === 'cream' || !bg) &&
            'bg-cream text-ink',
          bg === 'navy' && 'bg-navy text-cream',
          bg === 'tile' && 'bg-tile text-cream',
          className,
        )}
      >
        {inner}
      </Tag>
    </DarkProvider>
  );
}
