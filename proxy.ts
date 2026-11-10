import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { canonicalRedirectUrl } from '@/lib/redirects'

export function proxy(request: NextRequest) {
  const destination = canonicalRedirectUrl({
    forwardedHost: request.headers.get('x-forwarded-host'),
    host: request.headers.get('host'),
    pathname: request.nextUrl.pathname,
    search: request.nextUrl.search,
    method: request.method,
    origin: request.nextUrl.origin,
  })
  if (!destination) return NextResponse.next()
  return NextResponse.redirect(destination, 301)
}
