import { cn } from '@/lib/utils';

export function Eyebrow({
  children,
  className,
  align = 'left',
  dark,
}: {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}) {
  return (
    <p
      className={cn(
        'text-eyebrow',
        dark ? 'text-ochre' : 'text-stone',
        align === 'center' && 'text-center',
        className,
      )}
    >
      {children}
    </p>
  );
}
