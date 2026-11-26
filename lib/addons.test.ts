import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { ppcManagement } from '@/data/ppc-management'
import {
  ADDONS,
  chargePlan,
  isAddonId,
  parseAddonList,
} from './addons'

describe('addons', () => {
  it('recognizes every ADDONS key as an AddonId', () => {
    for (const id of Object.keys(ADDONS)) {
      assert.equal(isAddonId(id), true)
    }
    assert.equal(isAddonId('not_an_addon'), false)
    assert.equal(isAddonId(99), false)
  })

  it('parses addon lists including ppc_management', () => {
    assert.deepEqual(parseAddonList('voice_ai,ppc_management,chat_ai'), [
      'voice_ai',
      'ppc_management',
      'chat_ai',
    ])
    assert.deepEqual(parseAddonList(['ppc_management', 'ppc_management', 'nope']), [
      'ppc_management',
    ])
    assert.deepEqual(parseAddonList(''), [])
  })

  it('charges monthly PPC with the plan', () => {
    assert.deepEqual(chargePlan('month', ['ppc_management']), {
      checkoutDollars: 297 + ppcManagement.monthlyAmount,
      separateAddonDollars: 0,
      dueToday: 297 + ppcManagement.monthlyAmount,
    })
    assert.deepEqual(chargePlan('month', ['voice_ai', 'ppc_management']), {
      checkoutDollars: 297 + 99 + ppcManagement.monthlyAmount,
      separateAddonDollars: 0,
      dueToday: 297 + 99 + ppcManagement.monthlyAmount,
    })
  })

  it('bills annual core in Checkout and PPC on a separate monthly subscription', () => {
    assert.deepEqual(chargePlan('year', ['ppc_management']), {
      checkoutDollars: 2970,
      separateAddonDollars: ppcManagement.monthlyAmount,
      dueToday: 2970 + ppcManagement.monthlyAmount,
    })
    assert.deepEqual(chargePlan('year', ['voice_ai', 'chat_ai', 'ppc_management']), {
      checkoutDollars: 2970,
      separateAddonDollars: 99 + 29 + ppcManagement.monthlyAmount,
      dueToday: 2970 + 99 + 29 + ppcManagement.monthlyAmount,
    })
  })

  it('keeps PPC amount sourced from ppc-management data', () => {
    assert.equal(ADDONS.ppc_management.monthlyAmount, ppcManagement.monthlyAmount)
    assert.equal(ADDONS.ppc_management.tag, 'ppc-management-addon')
    assert.equal(ADDONS.ppc_management.envVar, 'STRIPE_PRICE_PPC_MONTHLY')
  })
})
