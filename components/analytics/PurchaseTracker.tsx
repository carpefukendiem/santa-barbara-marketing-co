'use client'

import { useEffect } from 'react'
import { trackGa4 } from '@/lib/analytics'
import type { PurchaseSummary } from '@/lib/purchaseSummary'

const STORAGE_PREFIX = 'sbmc_purchase_'

export function PurchaseTracker({ summary }: { summary: PurchaseSummary }) {
  useEffect(() => {
    if (summary.paymentStatus !== 'paid' && summary.paymentStatus !== 'no_payment_required') return
    const key = `${STORAGE_PREFIX}${summary.transactionId}`
    try {
      if (window.sessionStorage.getItem(key)) return
      window.sessionStorage.setItem(key, '1')
    } catch {
      // If storage is blocked, still fire once for this page load.
    }
    trackGa4('purchase', {
      transaction_id: summary.transactionId,
      value: summary.chargedToday,
      currency: summary.currency,
      addons: summary.addons,
      billing_interval: summary.billingInterval,
      items: summary.items,
    })
  }, [summary])

  return null
}
