'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { pricingPlan } from '@/data/pricing';
import { primaryCta } from '@/data/navigation';
import { cn, formatUsd } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';

export function OfferPanel({ className }: { className?: string }) {
  return (
    <aside className={cn('rounded-2xl bg-cream p-6 shadow-lg ring-1 ring-navy/10', className)}>
      {pricingPlan.badge ? (
        <p className="text-center text-xs font-medium tracking-[0.18em] text-ochre uppercase">
          {pricingPlan.badge}
        </p>
      ) : null}
      <h3 className="mt-2 text-center font-display text-2xl text-navy">{pricingPlan.name}</h3>
      <p className="mt-2 text-center font-display text-4xl text-navy">
        {formatUsd(pricingPlan.monthlyAmount)}
        <span className="text-2xl">/mo</span>
      </p>
      <p className="mt-1 text-center text-xs text-stone">
        Or {formatUsd(pricingPlan.annualAmount)}/yr — 2 months free
      </p>
      <ul className="mt-6 hidden space-y-2 text-sm text-ink sm:block">
        {pricingPlan.included.slice(0, 4).map((item) => (
          <li key={item.title} className="flex items-start gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 flex-none rounded-full bg-ocean" />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-col items-stretch gap-3">
        <Button
          onClick={() => trackEvent('home_enroll_click', { location: 'home_hero' })}
          href="/get-started#pricing-card-checkout"
          className="justify-center"
        >
          Start the 805 System — {formatUsd(pricingPlan.monthlyAmount)}/mo
        </Button>
        <Button variant="ghost" href={primaryCta.href} className="justify-center">
          Prefer to talk first? {primaryCta.label}
        </Button>
      </div>
      <div className="mt-4 hidden space-y-2 text-center sm:block">
        <p className="text-[11px] text-stone">Secure checkout by Stripe</p>
        <div className="flex items-center justify-center gap-3 text-[10px] text-stone">
          <span className="inline-flex items-center gap-1">
            <svg width="16" height="10" viewBox="0 0 24 14" aria-hidden="true">
              <rect x="1" y="1" width="22" height="12" rx="2" fill="currentColor" className="opacity-20" />
              <circle cx="8" cy="7" r="3" fill="currentColor" />
            </svg>
            Visa
          </span>
          <span className="inline-flex items-center gap-1">
            <svg width="16" height="10" viewBox="0 0 24 14" aria-hidden="true">
              <rect x="1" y="1" width="22" height="12" rx="2" fill="currentColor" className="opacity-20" />
              <rect x="6" y="3" width="12" height="8" fill="currentColor" />
            </svg>
            Mastercard
          </span>
          <span className="inline-flex items-center gap-1">
            <svg width="16" height="10" viewBox="0 0 24 14" aria-hidden="true">
              <rect x="1" y="1" width="22" height="12" rx="2" fill="currentColor" className="opacity-20" />
              <path d="M6 10h12L18 4H8l-2 6z" fill="currentColor" />
            </svg>
            AmEx
          </span>
          <span className="inline-flex items-center gap-1">
            <svg width="16" height="10" viewBox="0 0 24 14" aria-hidden="true">
              <rect x="1" y="1" width="22" height="12" rx="2" fill="currentColor" className="opacity-20" />
              <circle cx="12" cy="7" r="2.5" fill="currentColor" />
            </svg>
            Discover
          </span>
        </div>
        <p className="text-[11px] text-stone">Cancel anytime</p>
      </div>
    </aside>
  );
}

