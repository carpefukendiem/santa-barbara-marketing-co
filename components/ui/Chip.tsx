import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Chip({
  children,
  className,
  href,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  dark?: boolean;
}) {
  const classes = cn(
    'inline-flex items-center rounded-full px-4 py-2 text-sm transition-colors duration-200',
    dark
      ? 'border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/16'
      : 'border border-navy/15 text-navy hover:bg-navy hover:text-white',
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <span className={classes}>{children}</span>;
}
