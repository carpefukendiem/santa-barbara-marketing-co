import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { ppcManagement } from '@/data/ppc-management'
import { chargePlan } from './addons'
import { summarizeCheckoutSession } from './purchaseSummary'

const PRICES = {
  voice_ai: 'price_voice',
  chat_ai: 'price_chat',
  ppc_management: 'price_ppc',
}

describe('checkout charges', () => {
  it('matches the monthly selection exactly', () => {
    assert.deepEqual(chargePlan('month', []), {
      checkoutDollars: 297,
      separateAddonDollars: 0,
      dueToday: 297,
    })
    assert.deepEqual(chargePlan('month', ['voice_ai']), {
      checkoutDollars: 396,
      separateAddonDollars: 0,
      dueToday: 396,
    })
    assert.deepEqual(chargePlan('month', ['chat_ai']), {
      checkoutDollars: 326,
      separateAddonDollars: 0,
      dueToday: 326,
    })
    assert.deepEqual(chargePlan('month', ['voice_ai', 'chat_ai']), {
      checkoutDollars: 425,
      separateAddonDollars: 0,
      dueToday: 425,
    })
    assert.deepEqual(chargePlan('month', ['ppc_management']), {
      checkoutDollars: 297 + ppcManagement.monthlyAmount,
      separateAddonDollars: 0,
      dueToday: 297 + ppcManagement.monthlyAmount,
    })
  })

  it('bills annual core in Checkout and add-ons on a monthly subscription', () => {
    assert.deepEqual(chargePlan('year', []), {
      checkoutDollars: 2970,
      separateAddonDollars: 0,
      dueToday: 2970,
    })
    assert.deepEqual(chargePlan('year', ['voice_ai']), {
      checkoutDollars: 2970,
      separateAddonDollars: 99,
      dueToday: 3069,
    })
    assert.deepEqual(chargePlan('year', ['chat_ai']), {
      checkoutDollars: 2970,
      separateAddonDollars: 29,
      dueToday: 2999,
    })
    assert.deepEqual(chargePlan('year', ['voice_ai', 'chat_ai']), {
      checkoutDollars: 2970,
      separateAddonDollars: 128,
      dueToday: 3098,
    })
    assert.deepEqual(chargePlan('year', ['ppc_management']), {
      checkoutDollars: 2970,
      separateAddonDollars: ppcManagement.monthlyAmount,
      dueToday: 2970 + ppcManagement.monthlyAmount,
    })
  })

  it('reads the charged amount from the Checkout session, not the URL', () => {
    const monthly = summarizeCheckoutSession(
      {
        id: 'cs_test_monthly',
        amountTotal: 42500,
        paymentStatus: 'paid',
        currency: 'usd',
        metadata: { interval: 'month', addons: 'voice_ai,chat_ai', addon_billing: 'included' },
        lineItems: [
          { priceId: 'price_core', amountTotal: 29700 },
          { priceId: 'price_voice', amountTotal: 9900 },
          { priceId: 'price_chat', amountTotal: 2900 },
        ],
      },
      PRICES,
    )
    assert.equal(monthly.chargedToday, 425)
    assert.equal(monthly.addons, 'voice_ai,chat_ai')
    assert.equal(monthly.billingInterval, 'month')
    assert.deepEqual(
      monthly.items.map((item) => item.item_id),
      ['local_lead_plan', 'voice_ai', 'chat_ai'],
    )

    const annual = summarizeCheckoutSession(
      {
        id: 'cs_test_annual',
        amountTotal: 297000,
        paymentStatus: 'paid',
        currency: 'usd',
        metadata: {
          interval: 'year',
          addons: 'voice_ai,chat_ai',
          addon_billing: 'separate_monthly',
        },
        lineItems: [{ priceId: 'price_core_year', amountTotal: 297000 }],
      },
      PRICES,
    )
    assert.equal(annual.chargedToday, 3098)
    assert.equal(annual.planPrice, 2970)
    assert.equal(annual.addonDetails[0]?.price, 99)
    assert.equal(annual.addonDetails[1]?.price, 29)

    const annualPpc = summarizeCheckoutSession(
      {
        id: 'cs_test_annual_ppc',
        amountTotal: 297000,
        paymentStatus: 'paid',
        currency: 'usd',
        metadata: {
          interval: 'year',
          addons: 'ppc_management',
          addon_billing: 'separate_monthly',
        },
        lineItems: [{ priceId: 'price_core_year', amountTotal: 297000 }],
      },
      PRICES,
    )
    assert.equal(annualPpc.chargedToday, 2970 + ppcManagement.monthlyAmount)
    assert.equal(annualPpc.addonDetails[0]?.id, 'ppc_management')
    assert.equal(annualPpc.addonDetails[0]?.price, ppcManagement.monthlyAmount)

    const unpaid = summarizeCheckoutSession(
      {
        id: 'cs_test_unpaid',
        amountTotal: 297000,
        paymentStatus: 'unpaid',
        currency: 'usd',
        metadata: { interval: 'year', addons: '' },
        lineItems: [{ priceId: 'price_core_year', amountTotal: 297000 }],
      },
      PRICES,
    )
    assert.equal(unpaid.chargedToday, 0)
  })
})
