'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { track } from '@/lib/analytics';

type ButtonVariant = 'primary' | 'secondary' | 'link';
type ButtonTone = 'light' | 'dark';

const variantClasses: Record<ButtonVariant, Record<ButtonTone, string>> = {
  primary: {
    light:
      'bg-sbmc-orange text-white hover:bg-sbmc-orange-hover hover:-translate-y-px',
    dark: 'bg-sbmc-orange text-white hover:bg-sbmc-orange-hover hover:-translate-y-px',
  },
  secondary: {
    light:
      'border-[1.5px] border-sbmc-navy bg-transparent text-sbmc-navy hover:bg-sbmc-navy hover:text-white',
    dark: 'border-[1.5px] border-white bg-transparent text-white hover:bg-white hover:text-sbmc-navy',
  },
  link: {
    light:
      'text-sbmc-teal hover:text-sbmc-teal-dark px-0 py-0 gap-1.5 [&>.btn-arrow]:transition-transform [&>.btn-arrow]:duration-200 hover:[&>.btn-arrow]:translate-x-[3px]',
    dark: 'text-sbmc-aqua hover:text-white px-0 py-0 gap-1.5 [&>.btn-arrow]:transition-transform [&>.btn-arrow]:duration-200 hover:[&>.btn-arrow]:translate-x-[3px]',
  },
};

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-[0.08em] rounded-full ease-sbmc transition-[color,background-color,border-color,transform,box-shadow] duration-200 disabled:opacity-60 disabled:pointer-events-none';

const sizeClasses: Record<ButtonVariant, string> = {
  primary: 'px-8 py-3.5 text-[0.75rem]',
  secondary: 'px-8 py-3.5 text-[0.75rem]',
  link: 'text-[0.72rem] tracking-[0.1em]',
};

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
  tone = 'light',
  href,
  className,
  children,
  type = 'button',
  disabled,
  onClick,
  'aria-label': ariaLabel,
  'aria-busy': ariaBusy,
}: ButtonProps) {
  const classes = cn(
    base,
    sizeClasses[variant],
    variantClasses[variant][tone],
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
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
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
