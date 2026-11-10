import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  attributionFromSearch,
  mergeAttribution,
  resolveAttribution,
  ATTRIBUTION_COOKIE,
} from './attribution'

describe('attribution', () => {
  it('keeps the first touch and appends a later gclid', () => {
    const first = attributionFromSearch(
      'utm_source=google&utm_medium=cpc&gclid=AAA',
      '/',
    )
    const second = attributionFromSearch('utm_source=ghl&utm_medium=email&gclid=BBB', '/pricing')
    const merged = mergeAttribution(first, second)
    assert.equal(merged.utm_source, 'google')
    assert.equal(merged.utm_medium, 'cpc')
    assert.equal(merged.gclid, 'AAA,BBB')
    assert.equal(merged.first_landing_page, '/?utm_source=google&utm_medium=cpc&gclid=AAA')
  })

  it('reads the cookie ahead of a later body and still stores a new gclid', () => {
    const stored = {
      utm_source: 'test',
      utm_medium: 'test',
      utm_campaign: 'test',
      utm_content: '',
      utm_term: '',
      gclid: 'TEST123',
      first_landing_page: '/?utm_source=test&utm_medium=test&utm_campaign=test&gclid=TEST123',
    }
    const header = `${ATTRIBUTION_COOKIE}=${encodeURIComponent(JSON.stringify(stored))}`
    const resolved = resolveAttribution(header, {
      utm_source: 'other',
      gclid: 'NEWCLICK',
      first_landing_page: '/contact',
    })
    assert.equal(resolved.utm_source, 'test')
    assert.equal(resolved.utm_campaign, 'test')
    assert.equal(resolved.gclid, 'TEST123,NEWCLICK')
    assert.equal(resolved.first_landing_page, stored.first_landing_page)
  })
})
