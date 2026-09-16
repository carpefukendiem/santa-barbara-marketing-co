import { cn } from '@/lib/utils';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accent?: boolean;
  dark?: boolean;
};

export function Card({
  children,
  className,
  hover = true,
  accent = false,
  dark = false,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border shadow-card',
        dark
          ? 'border-white/10 bg-white/5 backdrop-blur'
          : 'border-line bg-white',
        accent && 'border-t-[3px] border-t-tile',
        hover &&
          'motion-safe-lift transition-[box-shadow,transform] duration-200 ease-sbmc hover:-translate-y-0.5 hover:shadow-lift',
        className,
      )}
    >
      {children}
    </div>
  );
}
