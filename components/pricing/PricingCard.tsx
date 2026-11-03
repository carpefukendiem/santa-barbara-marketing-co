'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { pricingPlan } from '@/data/pricing';
import { primaryCta } from '@/data/navigation';
import { cn } from '@/lib/utils';

export function PricingCard() {
  const [annual, setAnnual] = useState(true);
  const amount = annual
    ? pricingPlan.annualMonthlyAmount
    : pricingPlan.monthlyAmount;
  const savings =
    pricingPlan.monthlyAmount - pricingPlan.annualMonthlyAmount;

  return (
    <div className="mx-auto max-w-md">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className={cn(!annual ? 'text-ink' : 'text-stone')}>Monthly</span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Pay annually"
          onClick={() => setAnnual((value) => !value)}
          className={cn(
            'relative h-7 w-12 rounded-full transition-colors',
            annual ? 'bg-ochre' : 'bg-navy/20',
          )}
        >
          <span
            className={cn(
              'absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-cream shadow transition-transform',
              annual && 'translate-x-5',
            )}
          />
        </button>
        <span className={cn(annual ? 'text-ink' : 'text-stone')}>Prepaid</span>
      </div>
      <p className="mt-2 text-center text-xs text-stone">
        {annual
          ? `Pay a year up front. ${savings > 0 ? `$${savings}/mo less than month-to-month.` : ''}`
          : 'Billed every month. Switch to prepaid to lower the monthly equivalent.'}
      </p>

      <div className="mt-8 rounded-2xl bg-ochre px-8 py-10 text-navy">
        <p className="text-center text-xs font-medium tracking-[0.18em] text-tile uppercase">
          {pricingPlan.badge}
        </p>
        <h2 className="mt-3 text-center font-display text-4xl text-navy">
          {pricingPlan.name}
        </h2>
        <p className="mt-4 text-center font-display text-5xl font-light text-navy">
          ${amount}
          <span className="text-2xl">/mo</span>
        </p>
        <ul className="mt-8 divide-y divide-navy/15 border-y border-navy/15">
          {pricingPlan.included.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="block py-3 text-center text-sm text-navy hover:text-tile"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <Button href={primaryCta.href} className="!bg-cream !text-navy">
            {primaryCta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
