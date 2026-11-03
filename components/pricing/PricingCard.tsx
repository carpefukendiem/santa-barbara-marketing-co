'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { pricingPlan } from '@/data/pricing';
import { primaryCta } from '@/data/navigation';
import { cn } from '@/lib/utils';

export function PricingCard() {
  const [annual, setAnnual] = useState(true);

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
            annual ? 'bg-tile' : 'bg-navy/20',
          )}
        >
          <span
            className={cn(
              'absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-cream shadow transition-transform',
              annual && 'translate-x-5',
            )}
          />
        </button>
        <span className={cn(annual ? 'text-ink' : 'text-stone')}>Annually</span>
      </div>
      <p className="mt-2 text-center text-xs text-stone">
        {annual
          ? `Pay $${pricingPlan.annualAmount} once. ${pricingPlan.annualBonus.replace('+', '')}.`
          : 'Billed every month. Switch to annually for 12 weeks free.'}
      </p>

      <div className="mt-8 rounded-2xl bg-navy px-8 py-10 text-cream">
        <p className="text-center text-xs font-medium tracking-[0.18em] text-ochre uppercase">
          {pricingPlan.badge}
        </p>
        <h2 className="mt-3 text-center font-display text-4xl text-cream">
          {pricingPlan.name}
        </h2>
        {annual ? (
          <p className="mt-4 text-center font-display font-light leading-tight text-cream">
            <span className="text-5xl">${pricingPlan.annualAmount}</span>
            <span className="text-2xl">/yr</span>
            <span className="mt-2 block font-sans text-xl font-semibold tracking-tight text-tile">
              {pricingPlan.annualBonus}
            </span>
          </p>
        ) : (
          <p className="mt-4 text-center font-display text-5xl font-light text-cream">
            ${pricingPlan.monthlyAmount}
            <span className="text-2xl">/mo</span>
          </p>
        )}
        <ul className="mt-8 divide-y divide-cream/15 border-y border-cream/15">
          {pricingPlan.included.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="block py-3 text-center text-sm text-cream/80 hover:text-ochre"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
        </div>
      </div>
    </div>
  );
}
