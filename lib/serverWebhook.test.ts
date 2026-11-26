import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  BOT_UA_RE,
  isBotUserAgent,
  optionalRegistryString,
  parseCookieHeader,
  splitPersonName,
} from './serverWebhook'

describe('serverWebhook helpers', () => {
  it('flags common bot user agents', () => {
    assert.equal(isBotUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1)'), true)
    assert.equal(isBotUserAgent('Slackbot-LinkExpanding 1.0'), true)
    assert.equal(isBotUserAgent('facebookexternalhit/1.1'), true)
    assert.equal(isBotUserAgent('HeadlessChrome/120'), true)
    assert.equal(isBotUserAgent('vercel-screenshot-preview'), true)
    assert.equal(isBotUserAgent('Mozilla/5.0 (Macintosh) Chrome/120.0'), false)
    assert.equal(BOT_UA_RE.test('SomethingSpider/1.0'), true)
  })

  it('parses cookies from a header', () => {
    assert.equal(parseCookieHeader('a=1; sbmc_internal=1; b=2', 'sbmc_internal'), '1')
    assert.equal(parseCookieHeader(null, 'sbmc_internal'), null)
  })

  it('splits a single name field', () => {
    assert.deepEqual(splitPersonName('Ada Lovelace'), {
      first_name: 'Ada',
      last_name: 'Lovelace',
    })
    assert.deepEqual(splitPersonName('Madonna'), {
      first_name: 'Madonna',
      last_name: '',
    })
  })

  it('reads optional registry fields without inventing values', () => {
    const demo = { phone: '(805) 555-0100', name: 'Shop' }
    assert.equal(optionalRegistryString(demo, 'email'), '')
    assert.equal(optionalRegistryString(demo, 'ghl_contact_id'), '')
    assert.equal(optionalRegistryString(demo, 'phone'), '(805) 555-0100')
  })
})
