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
  dark = false,
}: CardProps) {
  return (
    <div
      className={cn(
        'border-t border-rule pt-6',
        dark && 'border-cream/20',
        className,
      )}
    >
      {children}
    </div>
  );
}
