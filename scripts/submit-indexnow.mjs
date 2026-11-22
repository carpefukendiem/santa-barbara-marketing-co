#!/usr/bin/env node
/**
 * Submit changed URLs to IndexNow.
 * Usage:
 *   node scripts/submit-indexnow.mjs
 *   node scripts/submit-indexnow.mjs https://www.sbmc.io/pricing https://www.sbmc.io/about
 * Default: homepage + sitemap core paths.
 */
const KEY = 'b75c378aed65cd66ec124499dab950e3'
const HOST = 'www.sbmc.io'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

const defaults = [
  `https://${HOST}/`,
  `https://${HOST}/pricing`,
  `https://${HOST}/services`,
  `https://${HOST}/service-areas`,
  `https://${HOST}/about`,
  `https://${HOST}/santa-barbara-seo`,
  `https://${HOST}/santa-barbara-digital-marketing`,
  `https://${HOST}/llms.txt`,
]

const urls = process.argv.slice(2)
const urlList = urls.length > 0 ? urls : defaults

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
})

console.log(`IndexNow ${res.status} ${res.statusText}`)
const text = await res.text()
if (text) console.log(text)
if (!res.ok && res.status !== 202) process.exit(1)
