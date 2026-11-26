/**
 * Local exercise of /api/demo-view and /api/inquiry-notify against a mock webhook.
 * Does not post to any real CRM URL.
 *
 * Run: npx tsx scripts/exercise-webhooks.mts
 */
import assert from 'node:assert/strict'
import http from 'node:http'
import { POST as demoViewPost } from '../app/api/demo-view/route'
import { POST as inquiryNotifyPost } from '../app/api/inquiry-notify/route'

type Captured = { path: string; body: Record<string, unknown> }

async function withMockWebhook<T>(
  run: (baseUrl: string, captured: Captured[]) => Promise<T>,
): Promise<T> {
  const captured: Captured[] = []
  const server = http.createServer((req, res) => {
    const chunks: Buffer[] = []
    req.on('data', (c) => chunks.push(c))
    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8')
      let body: Record<string, unknown> = {}
      try {
        body = JSON.parse(raw) as Record<string, unknown>
      } catch {
        body = { _raw: raw }
      }
      captured.push({ path: req.url ?? '/', body })
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end('{"ok":true}')
    })
  })

  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve))
  const addr = server.address()
  if (!addr || typeof addr === 'string') {
    server.close()
    throw new Error('Failed to bind mock webhook')
  }
  const baseUrl = `http://127.0.0.1:${addr.port}`

  try {
    return await run(baseUrl, captured)
  } finally {
    await new Promise<void>((resolve, reject) =>
      server.close((err) => (err ? reject(err) : resolve())),
    )
  }
}

function getSetCookies(res: Response): string[] {
  // Node fetch may expose getSetCookie()
  const headers = res.headers as Headers & { getSetCookie?: () => string[] }
  if (typeof headers.getSetCookie === 'function') {
    return headers.getSetCookie()
  }
  const single = res.headers.get('set-cookie')
  return single ? [single] : []
}

function cookieHeaderFromSetCookies(setCookies: string[]): string {
  return setCookies
    .map((c) => c.split(';')[0] ?? '')
    .filter(Boolean)
    .join('; ')
}

async function main() {
  const slug = 'precision-motorcycle-service'

  await withMockWebhook(async (baseUrl, captured) => {
    process.env.GHL_DEMO_VIEW_WEBHOOK_URL = `${baseUrl}/demo-view`
    process.env.GHL_INQUIRY_WEBHOOK_URL = `${baseUrl}/inquiry`

    // 1) Bot UA skipped
    {
      const before = captured.length
      const res = await demoViewPost(
        new Request('http://localhost/api/demo-view', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
          },
          body: JSON.stringify({ slug }),
        }),
      )
      assert.equal(res.status, 200)
      assert.equal(captured.length, before, 'bot UA must not post')
      console.log('PASS: bot UA skipped')
    }

    // 2) preview=1 skipped and sets sbmc_internal
    {
      const before = captured.length
      const res = await demoViewPost(
        new Request('http://localhost/api/demo-view', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'user-agent': 'Mozilla/5.0 (Macintosh) Chrome/120.0.0.0',
          },
          body: JSON.stringify({ slug, preview: true }),
        }),
      )
      assert.equal(res.status, 200)
      const setCookies = getSetCookies(res)
      assert.ok(
        setCookies.some((c) => c.startsWith('sbmc_internal=1')),
        `expected sbmc_internal cookie, got: ${setCookies.join(' | ')}`,
      )
      assert.equal(captured.length, before, 'preview=1 must not post')
      const internalCookie = cookieHeaderFromSetCookies(setCookies)
      const beforeInternal = captured.length
      const resInternal = await demoViewPost(
        new Request('http://localhost/api/demo-view', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'user-agent': 'Mozilla/5.0 (Macintosh) Chrome/120.0.0.0',
            cookie: internalCookie,
          },
          body: JSON.stringify({ slug }),
        }),
      )
      assert.equal(resInternal.status, 200)
      assert.equal(captured.length, beforeInternal, 'sbmc_internal cookie must skip')
      console.log('PASS: preview=1 skipped, cookie set, and internal cookie skips later hits')
    }

    // 3) Normal hit posts the right JSON
    {
      const before = captured.length
      const res = await demoViewPost(
        new Request('http://localhost/api/demo-view', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'user-agent': 'Mozilla/5.0 (Macintosh) Chrome/120.0.0.0',
          },
          body: JSON.stringify({
            slug,
            referrer: 'https://example.com/ref',
            utm_source: 'email',
            utm_medium: 'nurture',
            utm_campaign: 'demo-round-2',
          }),
        }),
      )
      assert.equal(res.status, 200)
      assert.equal(captured.length, before + 1, 'normal hit must post once')
      const hit = captured[captured.length - 1]
      assert.ok(hit)
      assert.equal(hit.path, '/demo-view')
      assert.equal(hit.body.business_name, 'Precision Motorcycle Service')
      assert.equal(
        hit.body.demo_url,
        'https://www.sbmc.io/demos/precision-motorcycle-service',
      )
      assert.equal(hit.body.email, '')
      assert.equal(hit.body.phone, '(805) 967-6163')
      assert.equal(hit.body.utm_source, 'email')
      assert.equal(hit.body.utm_medium, 'nurture')
      assert.equal(hit.body.utm_campaign, 'demo-round-2')
      assert.equal(hit.body.referrer, 'https://example.com/ref')
      assert.ok(typeof hit.body.visitor_id === 'string' && hit.body.visitor_id.length > 0)
      assert.ok(typeof hit.body.timestamp === 'string')
      assert.ok(!('ghl_contact_id' in hit.body), 'registry has no ghl_contact_id')
      console.log('PASS: normal demo view posts JSON')
      console.log('SAMPLE demo_view payload:', JSON.stringify(hit.body, null, 2))

      const setCookies = getSetCookies(res)
      const cookieHeader = cookieHeaderFromSetCookies(setCookies)

      // 4) Second hit within 30 min skipped
      const before2 = captured.length
      const res2 = await demoViewPost(
        new Request('http://localhost/api/demo-view', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'user-agent': 'Mozilla/5.0 (Macintosh) Chrome/120.0.0.0',
            cookie: cookieHeader,
          },
          body: JSON.stringify({ slug }),
        }),
      )
      assert.equal(res2.status, 200)
      assert.equal(captured.length, before2, 'debounced hit must not post')
      console.log('PASS: second hit within 30 min skipped')
    }

    // 5) Inquiry posts the right JSON
    {
      const before = captured.length
      const res = await inquiryNotifyPost(
        new Request('http://localhost/api/inquiry-notify', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            name: 'Jordan Lee',
            email: 'jordan@example.com',
            phone: '(805) 555-0199',
            business_name: 'Lee Auto',
            message: 'Interested in a Local Lead Plan quote.',
            page_url: 'https://www.sbmc.io/contact?utm_source=google&utm_medium=cpc&utm_campaign=brand',
            utm_source: 'google',
            utm_medium: 'cpc',
            utm_campaign: 'brand',
            company_website: '',
          }),
        }),
      )
      assert.equal(res.status, 200)
      assert.equal(captured.length, before + 1)
      const hit = captured[captured.length - 1]
      assert.ok(hit)
      assert.equal(hit.path, '/inquiry')
      assert.equal(hit.body.first_name, 'Jordan')
      assert.equal(hit.body.last_name, 'Lee')
      assert.equal(hit.body.email, 'jordan@example.com')
      assert.equal(hit.body.phone, '(805) 555-0199')
      assert.equal(hit.body.business_name, 'Lee Auto')
      assert.equal(hit.body.message, 'Interested in a Local Lead Plan quote.')
      assert.equal(hit.body.utm_source, 'google')
      console.log('PASS: inquiry posts JSON')
      console.log('SAMPLE inquiry payload:', JSON.stringify(hit.body, null, 2))
    }

    // 6) Honeypot skips inquiry post
    {
      const before = captured.length
      await inquiryNotifyPost(
        new Request('http://localhost/api/inquiry-notify', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            name: 'Bot',
            email: 'bot@example.com',
            company_website: 'http://spam.example',
            message: 'spam',
          }),
        }),
      )
      assert.equal(captured.length, before, 'honeypot must not post')
      console.log('PASS: inquiry honeypot skipped')
    }

    // 7) Unset env skips silently
    {
      delete process.env.GHL_DEMO_VIEW_WEBHOOK_URL
      const before = captured.length
      await demoViewPost(
        new Request('http://localhost/api/demo-view', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'user-agent': 'Mozilla/5.0',
          },
          body: JSON.stringify({ slug: 'coastal-dentistry' }),
        }),
      )
      assert.equal(captured.length, before, 'unset env must not post')
      console.log('PASS: unset GHL_DEMO_VIEW_WEBHOOK_URL skips silently')
    }
  })

  console.log('\nAll webhook exercises passed.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
