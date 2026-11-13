'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { pricingPlan, pricingTestimonial } from '@/data/pricing';
import { checkoutCta, primaryCta } from '@/data/navigation';
import { ADDONS, chargePlan, type AddonId, type PublicAddon } from '@/lib/addons';
import { readClientAttribution } from '@/lib/attribution';
import { trackEvent, trackGa4 } from '@/lib/analytics';
import { cn, formatUsd } from '@/lib/utils';

const CHECKOUT_PLAN_NAME = 'The Local Lead Plan';

function openStripeCheckout(url: string) {
  window.location.assign(url);
}

export function PricingCard({
  variant = 'consult',
  cancelled = false,
  addons = [],
}: {
  variant?: 'consult' | 'checkout';
  cancelled?: boolean;
  addons?: PublicAddon[];
}) {
  const [annual, setAnnual] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(
    cancelled ? 'Checkout was cancelled. Start again when you are ready.' : null,
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedAddons, setSelectedAddons] = useState<AddonId[]>([]);
  const checkout = variant === 'checkout';
  const interval = annual ? 'year' : 'month';
  const charges = chargePlan(interval, selectedAddons);
  const planName = checkout ? CHECKOUT_PLAN_NAME : pricingPlan.name;

  function toggleAddon(id: AddonId) {
    setSelectedAddons((current) => {
      const selected = current.includes(id);
      const addon = ADDONS[id];
      trackGa4(selected ? 'remove_from_cart' : 'add_to_cart', {
        currency: 'USD',
        value: addon.monthlyAmount,
        items: [
          {
            item_id: id,
            item_name: addon.name,
            price: addon.monthlyAmount,
            quantity: 1,
          },
        ],
      });
      return selected ? current.filter((item) => item !== id) : [...current, id];
    });
  }

  async function startCheckout() {
    // basic client-side validation
    const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim());
    if (!name.trim() || !emailOk) {
      setError('Enter your name and a valid email.');
      return;
    }
    setBusy(true);
    setError(null);
    try {
      trackEvent('checkout_click', { interval });
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          interval,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          addons: selectedAddons,
          attribution: readClientAttribution(),
        }),
      });
      const data = (await response.json()) as { url?: string; error?: string };
      if (data.url) {
        trackEvent('checkout_started', { interval });
        trackGa4('begin_checkout', {
          currency: 'USD',
          value: charges.dueToday,
          plan: 'local_lead_plan',
          billing_interval: interval,
          items: [
            {
              item_id: 'local_lead_plan',
              item_name: CHECKOUT_PLAN_NAME,
              price: annual ? pricingPlan.annualAmount : pricingPlan.monthlyAmount,
              quantity: 1,
            },
            ...selectedAddons.map((id) => ({
              item_id: id,
              item_name: ADDONS[id].name,
              price: ADDONS[id].monthlyAmount,
              quantity: 1,
            })),
          ],
        });
        openStripeCheckout(data.url);
        return;
      }
      setError(data.error ?? 'Checkout could not start.');
    } catch {
      setError('Checkout could not start.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto w-full min-w-0 max-w-md" id={checkout ? 'pricing-card-checkout' : undefined}>
      {/* Dynamic label for primary CTA reflects selected interval */}
      {/**/}
      <div className="flex items-center justify-center gap-3">
        <span
          className={cn(
            'text-base font-semibold',
            checkout
              ? !annual
                ? 'text-cream'
                : 'text-cream/75'
              : !annual
                ? 'text-ink'
                : 'text-stone',
          )}
        >
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Pay annually"
          onClick={() => setAnnual((value) => !value)}
          className={cn(
            'relative h-7 w-12 rounded-full transition-colors',
            annual ? 'bg-tile' : checkout ? 'bg-cream/35' : 'bg-navy/20',
          )}
        >
          <span
            className={cn(
              'absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-cream shadow transition-transform',
              annual && 'translate-x-5',
            )}
          />
        </button>
        <span
          className={cn(
            'text-base font-semibold',
            checkout
              ? annual
                ? 'text-cream'
                : 'text-cream/75'
              : annual
                ? 'text-ink'
                : 'text-stone',
          )}
        >
          Annually
        </span>
      </div>
      <p
        className={cn(
          'mt-3 text-center leading-snug',
          checkout ? 'text-base text-cream' : 'text-sm text-ink',
        )}
      >
        {annual
          ? `Pay ${formatUsd(pricingPlan.annualAmount)} once a year. 2 months free.`
          : `Billed ${formatUsd(pricingPlan.monthlyAmount)} every month. Switch to annually for 2 months free.`}
      </p>
      {annual ? (
        <p
          className={cn(
            'mt-1.5 text-center leading-snug break-words',
            checkout ? 'text-sm text-cream' : 'text-sm text-ink',
          )}
        >
          ({formatUsd(pricingPlan.monthlyAmount)}×12 = {formatUsd(pricingPlan.monthlyAmount * 12)} vs{' '}
          {formatUsd(pricingPlan.annualAmount)} annual, {formatUsd(pricingPlan.monthlyAmount * 12 - pricingPlan.annualAmount)} saved)
        </p>
      ) : null}

      <div className="mt-8 rounded-2xl bg-navy px-5 py-10 text-cream sm:px-8">
        {pricingPlan.badge ? (
          <p className="text-center text-xs font-medium tracking-[0.18em] text-ochre uppercase">
            {pricingPlan.badge}
          </p>
        ) : null}
        <h2 className="mt-3 text-center font-display text-[clamp(1.75rem,8vw,2.25rem)] text-cream sm:text-4xl">
          {planName}
        </h2>
        {annual ? (
          <p className="mt-4 text-center font-display font-light leading-tight text-cream">
            <span className="text-5xl">{formatUsd(pricingPlan.annualAmount)}</span>
            <span className="text-2xl">/yr</span>
            <span className="mt-2 block font-sans text-xl font-semibold tracking-tight text-tile">
              {pricingPlan.annualBonus}
            </span>
          </p>
        ) : (
          <p className="mt-4 text-center font-display text-5xl font-light text-cream">
            {formatUsd(pricingPlan.monthlyAmount)}
            <span className="text-2xl">/mo</span>
          </p>
        )}
        {checkout ? null : (
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
        )}
        {error ? (
          <p className="mt-6 text-center text-sm text-ochre" role="alert">
            {error}
          </p>
        ) : null}
        <div className="mt-8 flex flex-col items-stretch gap-4">
          {checkout ? (
            <>
              {addons.length > 0 ? (
                <fieldset className="space-y-2 text-left">
                  <legend className="text-xs text-cream/70">
                    Optional add-ons. Not included in the {formatUsd(pricingPlan.monthlyAmount)}. Billed monthly either way.
                  </legend>
                  {addons.map((addon) => {
                    const checked = selectedAddons.includes(addon.id);
                    return (
                      <label
                        key={addon.id}
                        className="flex cursor-pointer items-start gap-3 rounded-xl border border-cream/15 px-3 py-3"
                      >
                        <input
                          type="checkbox"
                          className="mt-1"
                          checked={checked}
                          onChange={() => toggleAddon(addon.id)}
                        />
                        <span>
                          <span className="block text-sm text-cream">
                            {addon.name} · {formatUsd(addon.monthlyAmount)}/mo
                          </span>
                          <span className="mt-1 block text-xs text-cream/60">{addon.blurb}</span>
                        </span>
                      </label>
                    );
                  })}
                </fieldset>
              ) : null}
              <p className="text-center text-sm text-cream">
                Due today: {formatUsd(charges.dueToday)}
                {interval === 'year' && selectedAddons.length > 0
                  ? `. ${formatUsd(pricingPlan.annualAmount)} for the year, plus the first month of each add-on.`
                  : '.'}
              </p>
              <div className="grid grid-cols-1 gap-3">
                <label className="block min-w-0 text-xs text-cream/70">
                  Name
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full min-w-0 rounded-md border border-cream/20 bg-transparent px-3 py-2 text-sm text-cream placeholder:text-cream/40 focus:border-ochre/60 focus:outline-none"
                    placeholder="Jane Smith"
                    required
                  />
                </label>
                <label className="block min-w-0 text-xs text-cream/70">
                  Email
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full min-w-0 rounded-md border border-cream/20 bg-transparent px-3 py-2 text-sm text-cream placeholder:text-cream/40 focus:border-ochre/60 focus:outline-none"
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <label className="block min-w-0 text-xs text-cream/70">
                  Phone (optional)
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 w-full min-w-0 rounded-md border border-cream/20 bg-transparent px-3 py-2 text-sm text-cream placeholder:text-cream/40 focus:border-ochre/60 focus:outline-none"
                    placeholder="(805) 555‑1234"
                  />
                </label>
              </div>
              <button
                type="button"
                onClick={startCheckout}
                disabled={busy}
                className="inline-flex max-w-full items-center justify-center rounded-full bg-tile px-5 py-3.5 text-center text-sm font-medium whitespace-normal text-cream transition-colors hover:bg-[#a83b27] disabled:pointer-events-none disabled:opacity-60 sm:px-7"
                id="pricing-start-cta"
              >
                {busy
                  ? 'Starting checkout…'
                  : `Start the Local Lead Plan, ${formatUsd(charges.dueToday)} today`}
              </button>
              <Button
                variant="ghost"
                tone="dark"
                href={primaryCta.href}
                className="max-w-full text-[13px] whitespace-normal sm:text-sm sm:whitespace-nowrap"
              >
                Rather talk first? Book a call
              </Button>
              <div className="mt-4 space-y-2 text-center">
                <p className="text-[11px] text-cream/70">Secure checkout by Stripe</p>
                <div className="flex items-center justify-center gap-3 text-[10px] text-cream/60">
                  {/* simple brand marks */}
                  <span className="inline-flex items-center gap-1">
                    <svg width="16" height="10" viewBox="0 0 24 14" aria-hidden="true"><rect x="1" y="1" width="22" height="12" rx="2" fill="currentColor" className="opacity-20"/><circle cx="8" cy="7" r="3" fill="currentColor"/></svg>
                    Visa
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <svg width="16" height="10" viewBox="0 0 24 14" aria-hidden="true"><rect x="1" y="1" width="22" height="12" rx="2" fill="currentColor" className="opacity-20"/><rect x="6" y="3" width="12" height="8" fill="currentColor"/></svg>
                    Mastercard
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <svg width="16" height="10" viewBox="0 0 24 14" aria-hidden="true"><rect x="1" y="1" width="22" height="12" rx="2" fill="currentColor" className="opacity-20"/><path d="M6 10h12L18 4H8l-2 6z" fill="currentColor"/></svg>
                    AmEx
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <svg width="16" height="10" viewBox="0 0 24 14" aria-hidden="true"><rect x="1" y="1" width="22" height="12" rx="2" fill="currentColor" className="opacity-20"/><circle cx="12" cy="7" r="2.5" fill="currentColor"/></svg>
                    Discover
                  </span>
                </div>
                <p className="text-xs leading-snug text-cream/85">Cancel anytime with 30-day written notice.</p>
                {pricingTestimonial?.text ? (
                  <blockquote className="mt-2 text-xs text-cream/80">
                    “{pricingTestimonial.text}”
                    {pricingTestimonial.author ? (
                      <span className="ml-2 text-cream/60">, {pricingTestimonial.author}</span>
                    ) : null}
                  </blockquote>
                ) : null}
              </div>
              {/* Included items after CTA for checkout, compact on small screens */}
              <ul className="mt-6 hidden divide-y divide-cream/15 border-y border-cream/15 md:block">
                {pricingPlan.included.slice(0, 4).map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="block py-2.5 text-center text-sm text-cream/80 hover:text-ochre"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
          )}
        </div>
      </div>
      {checkout ? null : (
        <p className="mt-5 text-center">
          <Link
            href={checkoutCta.href}
            className="inline-flex items-center justify-center rounded-full border border-navy/15 px-3 py-1.5 text-[11px] font-medium tracking-[0.16em] text-stone uppercase transition-colors hover:border-navy/35 hover:text-ink"
          >
            Action Takers
          </Link>
        </p>
      )}
    </div>
  );
}
