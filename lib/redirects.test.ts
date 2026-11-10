import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { canonicalRedirectUrl } from './redirects'

const QUERY = '?utm_source=test&utm_medium=test&utm_campaign=test&gclid=TEST123'

function redirect(overrides: Partial<Parameters<typeof canonicalRedirectUrl>[0]>) {
  return canonicalRedirectUrl({
    forwardedHost: null,
    host: 'www.sbmc.io',
    pathname: '/',
    search: '',
    method: 'GET',
    origin: 'https://www.sbmc.io',
    ...overrides,
  })
}

describe('canonical redirects', () => {
  it('sends the apex and both legacy hosts to www with the query intact', () => {
    for (const host of ['sbmc.io', 'santabarbaramarketingco.com', 'www.santabarbaramarketingco.com']) {
      assert.equal(
        redirect({ host, pathname: '/pricing', search: QUERY }),
        `https://www.sbmc.io/pricing${QUERY}`,
      )
    }
  })

  it('keeps www.sbmc.io in place', () => {
    assert.equal(redirect({ host: 'www.sbmc.io', pathname: '/get-started', search: QUERY }), null)
  })

  it('drops a trailing slash on the canonical host in the same redirect', () => {
    assert.equal(
      redirect({ pathname: '/pricing/', search: QUERY }),
      `https://www.sbmc.io/pricing${QUERY}`,
    )
  })

  it('moves 805 paths, with or without a slash, and keeps the query', () => {
    assert.equal(
      redirect({ pathname: '/805-system', search: QUERY }),
      `https://www.sbmc.io/local-lead-plan${QUERY}`,
    )
    assert.equal(
      redirect({ pathname: '/805-system/', search: QUERY }),
      `https://www.sbmc.io/local-lead-plan${QUERY}`,
    )
    assert.equal(
      redirect({
        host: 'santabarbaramarketingco.com',
        pathname: '/resources/home-services-marketing-805/',
        search: QUERY,
      }),
      `https://www.sbmc.io/local-lead-plan${QUERY}`,
    )
  })

  it('does not redirect API writes, so an existing webhook keeps its body', () => {
    assert.equal(
      redirect({
        host: 'santabarbaramarketingco.com',
        pathname: '/api/stripe/webhook',
        method: 'POST',
      }),
      null,
    )
  })

  it('moves the old-domain homepage and preserves an empty path', () => {
    assert.equal(
      redirect({ host: 'www.santabarbaramarketingco.com', pathname: '/', search: QUERY }),
      `https://www.sbmc.io/${QUERY}`,
    )
  })
})
