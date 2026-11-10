import type { PurchaseSummary } from '@/lib/purchaseSummary'
import { formatUsd } from '@/lib/utils'

export function CheckoutRecap({ summary }: { summary: PurchaseSummary }) {
  const intervalLabel = summary.billingInterval === 'year' ? 'Annual' : 'Monthly'
  const planSuffix = summary.billingInterval === 'year' ? '/yr' : '/mo'

  return (
    <div className="mb-12 max-w-2xl rounded-2xl border border-rule bg-white px-6 py-8">
      <p className="text-eyebrow text-stone">Your enrollment</p>
      <p className="mt-3 font-display text-4xl text-ink">{summary.planName}</p>
      <p className="mt-2 text-stone">{intervalLabel} billing</p>
      <ul className="mt-6 divide-y divide-rule">
        <li className="flex items-baseline justify-between gap-4 py-3">
          <span>{summary.planName}</span>
          <span className="font-medium">
            {formatUsd(summary.planPrice)}
            {planSuffix}
          </span>
        </li>
        {summary.addonDetails.map((addon) => (
          <li key={addon.id} className="flex items-baseline justify-between gap-4 py-3">
            <span>{addon.name}</span>
            <span className="font-medium">{formatUsd(addon.price)}/mo</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-lg text-ink">
        {summary.chargedToday > 0
          ? `Charged today: ${formatUsd(summary.chargedToday)}`
          : 'Stripe has not marked this payment as collected yet.'}
      </p>
      {summary.billingInterval === 'year' && summary.addonDetails.length > 0 ? (
        <p className="mt-2 text-sm text-stone">
          The plan renews annually. Each add-on continues monthly and is not part of the plan price.
        </p>
      ) : null}
    </div>
  )
}
