'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { track } from '@/lib/analytics';
import { useBookCall } from '@/components/booking/BookCallModal';
import { useDark } from '@/components/ui/DarkContext';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
type ButtonTone = 'light' | 'dark';

export type ButtonProps = {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  'aria-label'?: string;
  'aria-busy'?: boolean;
};

export function Button({
  variant = 'primary',
  tone,
  href,
  className,
  children,
  type = 'button',
  disabled,
  onClick,
  'aria-label': ariaLabel,
  'aria-busy': ariaBusy,
}: ButtonProps) {
  const inDark = useDark();
  const { openModal } = useBookCall();
  const resolvedTone: ButtonTone = tone ?? (inDark ? 'dark' : 'light');
  const visual = variant === 'link' ? 'ghost' : variant;

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium ease-sbmc transition-[color,background-color,transform] duration-200 disabled:pointer-events-none disabled:opacity-60',
    visual === 'primary' &&
      'bg-tile text-cream hover:bg-[#a83b27]',
    visual === 'secondary' && 'px-0 py-0 text-current',
    visual === 'ghost' &&
      resolvedTone === 'dark' &&
      'px-0 py-0 text-cream/80 hover:text-cream',
    visual === 'ghost' &&
      resolvedTone === 'light' &&
      'px-0 py-0 text-ink hover:text-tile',
    '[&>.btn-arrow]:transition-transform [&>.btn-arrow]:duration-200 hover:[&>.btn-arrow]:translate-x-1',
    visual === 'primary' && '[&>.btn-arrow]:hidden',
    className,
  );

  const content = (
    <>
      {children}
      <span className="btn-arrow" aria-hidden="true">
        →
      </span>
    </>
  );

  const handleClick = (event: React.MouseEvent) => {
    if (href === '/book-a-call') {
      track('book_a_call_click', { location: ariaLabel ?? 'cta' });
      if (typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches) {
        event.preventDefault();
        openModal();
      }
    }
    if (href?.startsWith('tel:')) {
      track('phone_click');
    }
    if (href?.startsWith('mailto:')) {
      track('email_click');
    }
    onClick?.();
  };

  if (href) {
    const isExternal =
      href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    if (isExternal) {
      return (
        <a href={href} className={classes} aria-label={ariaLabel} onClick={handleClick}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={handleClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={ariaBusy}
    >
      {content}
    </button>
  );
}
