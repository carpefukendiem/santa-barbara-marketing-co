import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { canonicalRedirectUrl } from '@/lib/redirects'
import { isBotRequest } from '@/lib/ab/bots'
import {
  HP_INTERNAL_PREFIX,
  HP_VARIANT_COOKIE,
  HP_VARIANT_MAX_AGE,
  HP_VISITOR_COOKIE,
  HP_VISITOR_MAX_AGE,
} from '@/lib/ab/constants'
import { isHomepageVariantId, type HomepageVariantId } from '@/data/homepage-variants'

function newVisitorId(): string {
  return crypto.randomUUID()
}

function assignVariant(): HomepageVariantId {
  return Math.random() < 0.5 ? 'a' : 'b'
}

function cookieOptions(request: NextRequest, maxAge: number) {
  const proto = request.headers.get('x-forwarded-proto')
  const https =
    proto === 'https' ||
    (!proto && request.nextUrl.protocol === 'https:')
  return {
    path: '/',
    maxAge,
    sameSite: 'lax' as const,
    // Secure on HTTPS (Vercel). Plain http://localhost keeps cookies for QA.
    secure: https,
    httpOnly: false,
  }
}

function setVariantCookies(
  request: NextRequest,
  response: NextResponse,
  variant: HomepageVariantId,
  visitorId: string | null,
  setVariant: boolean,
) {
  if (setVariant) {
    response.cookies.set(
      HP_VARIANT_COOKIE,
      variant,
      cookieOptions(request, HP_VARIANT_MAX_AGE),
    )
  }
  if (visitorId) {
    response.cookies.set(
      HP_VISITOR_COOKIE,
      visitorId,
      cookieOptions(request, HP_VISITOR_MAX_AGE),
    )
  }
}

function rewriteHome(
  request: NextRequest,
  variant: HomepageVariantId,
  opts: { setVariantCookie: boolean; visitorId: string | null },
) {
  const url = request.nextUrl.clone()
  url.pathname = `${HP_INTERNAL_PREFIX}/${variant}`
  // Keep public URL clean: drop force override from the rewritten request.
  url.searchParams.delete('variant')
  const response = NextResponse.rewrite(url)
  setVariantCookies(
    request,
    response,
    variant,
    opts.visitorId,
    opts.setVariantCookie,
  )
  return response
}

export function proxy(request: NextRequest) {
  const destination = canonicalRedirectUrl({
    forwardedHost: request.headers.get('x-forwarded-host'),
    host: request.headers.get('host'),
    pathname: request.nextUrl.pathname,
    search: request.nextUrl.search,
    method: request.method,
    origin: request.nextUrl.origin,
  })
  if (destination) {
    return NextResponse.redirect(destination, 301)
  }

  const { pathname } = request.nextUrl
  const method = request.method.toUpperCase()

  // Internal variant URLs are not linkable: send browsers back to `/`.
  if (
    (method === 'GET' || method === 'HEAD') &&
    (pathname === HP_INTERNAL_PREFIX ||
      pathname.startsWith(`${HP_INTERNAL_PREFIX}/`))
  ) {
    const parts = pathname.split('/').filter(Boolean)
    const maybeVariant = parts[1]
    const target = request.nextUrl.clone()
    target.pathname = '/'
    if (maybeVariant && isHomepageVariantId(maybeVariant)) {
      target.searchParams.set('variant', maybeVariant)
    }
    return NextResponse.redirect(target)
  }

  if ((method === 'GET' || method === 'HEAD') && pathname === '/') {
    const force = request.nextUrl.searchParams.get('variant')
    const bot = isBotRequest(request)
    const existing = request.cookies.get(HP_VARIANT_COOKIE)?.value
    const existingVisitor = request.cookies.get(HP_VISITOR_COOKIE)?.value ?? null

    if (bot) {
      // Bots always get A and never a variant cookie.
      return rewriteHome(request, 'a', {
        setVariantCookie: false,
        visitorId: null,
      })
    }

    if (force === 'a' || force === 'b') {
      const visitorId = existingVisitor ?? newVisitorId()
      return rewriteHome(request, force, {
        setVariantCookie: true,
        visitorId,
      })
    }

    const variant: HomepageVariantId = isHomepageVariantId(existing ?? '')
      ? (existing as HomepageVariantId)
      : assignVariant()
    const visitorId = existingVisitor ?? newVisitorId()
    const needsVariantCookie = !isHomepageVariantId(existing ?? '')
    return rewriteHome(request, variant, {
      setVariantCookie: needsVariantCookie,
      visitorId: existingVisitor ? null : visitorId,
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Run on pages that need host redirects or homepage A/B assignment.
     * Skip static assets and Next internals.
     */
    '/((?!_next/static|_next/image|favicon.ico|images/|.*\\..*).*)',
  ],
}
