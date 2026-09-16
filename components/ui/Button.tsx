'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { track } from '@/lib/analytics';
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
  const resolvedTone: ButtonTone = tone ?? (inDark ? 'dark' : 'light');
  const visual = variant === 'link' ? 'ghost' : variant;

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium ease-sbmc transition-[color,background-color,border-color,transform,box-shadow] duration-200 disabled:pointer-events-none disabled:opacity-60',
    visual === 'primary' &&
      'bg-tile text-white hover:bg-[#a84730] motion-safe:hover:-translate-y-0.5',
    visual === 'secondary' &&
      resolvedTone === 'dark' &&
      'border border-white/20 bg-transparent text-white hover:bg-white/10',
    visual === 'secondary' &&
      resolvedTone === 'light' &&
      'border border-navy bg-transparent text-navy hover:bg-navy hover:text-white',
    visual === 'ghost' &&
      resolvedTone === 'dark' &&
      'px-0 py-0 text-white/80 hover:text-white',
    visual === 'ghost' &&
      resolvedTone === 'light' &&
      'px-0 py-0 text-ocean hover:text-navy',
    visual !== 'ghost' && '[&>.btn-arrow]:transition-transform [&>.btn-arrow]:duration-200 hover:[&>.btn-arrow]:translate-x-1',
    visual === 'ghost' &&
      'gap-1.5 [&>.btn-arrow]:transition-transform [&>.btn-arrow]:duration-200 hover:[&>.btn-arrow]:translate-x-1',
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

  const handleClick = () => {
    if (href === '/free-growth-plan') {
      track('growth_plan_click', { location: ariaLabel ?? 'cta' });
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
