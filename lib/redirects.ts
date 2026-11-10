import { CANONICAL_HOST, SITE_URL } from './siteUrl'

/** Hosts that permanently move to the www canonical origin. */
export const LEGACY_HOSTS = [
  'santabarbaramarketingco.com',
  'www.santabarbaramarketingco.com',
  'sbmc.io',
] as const

const SITE_HOSTS = new Set<string>([CANONICAL_HOST, ...LEGACY_HOSTS])

export type RedirectInput = {
  forwardedHost: string | null
  host: string | null
  pathname: string
  search: string
  method: string
  /** Origin of the request that received this hit, used for same-host path moves. */
  origin: string
}

export function hostnameOf(value: string | null | undefined): string {
  const first = value?.split(',')[0]?.trim().toLowerCase() ?? ''
  if (!first) return ''
  const withoutDot = first.endsWith('.') ? first.slice(0, -1) : first
  if (withoutDot.startsWith('[')) return withoutDot
  return withoutDot.replace(/:\d+$/, '')
}

export function isStaticAsset(pathname: string): boolean {
  if (pathname.startsWith('/_next/')) return true
  if (pathname.startsWith('/images/')) return true
  return /\.[a-zA-Z0-9]{1,8}$/.test(pathname)
}

export function pathContains805(pathname: string): boolean {
  if (isStaticAsset(pathname)) return false
  return pathname.toLowerCase().includes('805')
}

function requestHost(input: RedirectInput): string {
  const forwarded = hostnameOf(input.forwardedHost)
  if (SITE_HOSTS.has(forwarded)) return forwarded
  return hostnameOf(input.host)
}

/**
 * One-hop 301 target, or null when the request should be served as-is.
 * GET and HEAD on a legacy host move to https://www.sbmc.io with the same
 * path and the original query string. Non-GET requests stay put so the
 * Stripe webhook and other API posts on an attached domain keep working.
 * Page paths that contain "805" move to /local-lead-plan, including the
 * trailing-slash form, and keep the query string.
 */
export function canonicalRedirectUrl(input: RedirectInput): string | null {
  const method = input.method.toUpperCase()
  if (method !== 'GET' && method !== 'HEAD') return null

  const host = requestHost(input)
  const legacy = (LEGACY_HOSTS as readonly string[]).includes(host)
  const rawPath = input.pathname || '/'
  const hasTrailingSlash = rawPath.length > 1 && rawPath.endsWith('/')
  const pathname = hasTrailingSlash ? rawPath.replace(/\/+$/, '') : rawPath
  const movePath = pathContains805(pathname)
  if (!legacy && !movePath && !hasTrailingSlash) return null

  const destinationPath = movePath ? '/local-lead-plan' : pathname
  const origin = legacy ? SITE_URL : input.origin.replace(/\/$/, '')
  const search = input.search && !input.search.startsWith('?') ? `?${input.search}` : input.search
  return `${origin}${destinationPath}${search}`
}
