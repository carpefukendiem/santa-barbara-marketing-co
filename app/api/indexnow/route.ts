import { timingSafeEqual } from 'node:crypto'
import { NextResponse } from 'next/server'
import { buildIndexNowPayload, submitIndexNow } from '@/lib/indexnow'
import { site } from '@/data/site'

export const runtime = 'nodejs'

const MAX_URLS = 100
const ALLOWED_ORIGIN = site.url // https://www.sbmc.io

type Body = {
  urls?: string[]
}

function secretsMatch(provided: string | null, expected: string): boolean {
  if (provided == null) return false
  const a = Buffer.from(provided)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

/** Only https://www.sbmc.io URLs (exact host + https). */
function isAllowedSiteUrl(value: unknown): value is string {
  if (typeof value !== 'string' || value.length === 0) return false
  try {
    const parsed = new URL(value)
    const allowed = new URL(ALLOWED_ORIGIN)
    return (
      parsed.protocol === 'https:' &&
      parsed.hostname === allowed.hostname &&
      parsed.origin === allowed.origin
    )
  } catch {
    return false
  }
}

/**
 * POST { "urls": ["https://www.sbmc.io/pricing", ...] }
 * Requires INDEXNOW_SUBMIT_SECRET and matching x-indexnow-secret header.
 * After merge, ping this route or run scripts/submit-indexnow.mjs.
 */
export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_SUBMIT_SECRET
  if (!secret) {
    return NextResponse.json(
      { error: 'IndexNow submit is not configured' },
      { status: 503 },
    )
  }

  const header = request.headers.get('x-indexnow-secret')
  if (!secretsMatch(header, secret)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: Body = {}
  try {
    body = (await request.json()) as Body
  } catch {
    body = {}
  }

  const requested =
    Array.isArray(body.urls) && body.urls.length > 0
      ? body.urls.filter(isAllowedSiteUrl)
      : [`${ALLOWED_ORIGIN}/`]

  if (requested.length === 0) {
    return NextResponse.json(
      {
        error: `No valid urls (must be on ${ALLOWED_ORIGIN})`,
      },
      { status: 400 },
    )
  }

  const urls = requested.slice(0, MAX_URLS)

  const payload = buildIndexNowPayload(urls)
  const upstream = await submitIndexNow(urls)
  const text = await upstream.text()

  return NextResponse.json(
    {
      ok: upstream.ok || upstream.status === 202,
      status: upstream.status,
      truncated: requested.length > MAX_URLS,
      count: urls.length,
      payload,
      upstream: text || null,
    },
    { status: upstream.ok || upstream.status === 202 ? 200 : 502 },
  )
}
