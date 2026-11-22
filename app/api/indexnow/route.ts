import { NextResponse } from 'next/server'
import { buildIndexNowPayload, submitIndexNow } from '@/lib/indexnow'
import { site } from '@/data/site'

export const runtime = 'nodejs'

type Body = {
  urls?: string[]
}

/**
 * POST { "urls": ["https://www.sbmc.io/pricing", ...] }
 * Optional secret: INDEXNOW_SUBMIT_SECRET header x-indexnow-secret.
 * After merge, ping this route or run scripts/submit-indexnow.mjs.
 */
export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_SUBMIT_SECRET
  if (secret) {
    const header = request.headers.get('x-indexnow-secret')
    if (header !== secret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  let body: Body = {}
  try {
    body = (await request.json()) as Body
  } catch {
    body = {}
  }

  const urls =
    Array.isArray(body.urls) && body.urls.length > 0
      ? body.urls.filter(
          (url) => typeof url === 'string' && url.startsWith(site.url),
        )
      : [`${site.url}/`]

  if (urls.length === 0) {
    return NextResponse.json(
      { error: 'No valid urls (must start with site origin)' },
      { status: 400 },
    )
  }

  const payload = buildIndexNowPayload(urls)
  const upstream = await submitIndexNow(urls)
  const text = await upstream.text()

  return NextResponse.json(
    {
      ok: upstream.ok || upstream.status === 202,
      status: upstream.status,
      payload,
      upstream: text || null,
    },
    { status: upstream.ok || upstream.status === 202 ? 200 : 502 },
  )
}
