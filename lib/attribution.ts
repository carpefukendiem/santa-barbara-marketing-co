export const ATTRIBUTION_COOKIE = 'sbmc_attr'
export const ATTRIBUTION_STORAGE_KEY = 'sbmc_attr'
export const ATTRIBUTION_MAX_AGE_SECONDS = 60 * 60 * 24 * 90

export const ATTRIBUTION_FIELDS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'first_landing_page',
] as const

export type AttributionField = (typeof ATTRIBUTION_FIELDS)[number]

export type Attribution = Record<AttributionField, string>

const FIELD_MAX = 480

export function emptyAttribution(): Attribution {
  return {
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
    gclid: '',
    first_landing_page: '',
  }
}

function clip(value: string): string {
  return value.trim().slice(0, FIELD_MAX)
}

export function attributionFromUnknown(value: unknown): Attribution {
  const next = emptyAttribution()
  if (!value || typeof value !== 'object') return next
  const record = value as Record<string, unknown>
  for (const key of ATTRIBUTION_FIELDS) {
    const field = record[key]
    if (typeof field === 'string') next[key] = clip(field)
  }
  return next
}

/**
 * First touch wins for UTMs and the landing page.
 * A later gclid is appended so the original click id is kept and the new one is stored too.
 */
export function mergeAttribution(existing: Attribution, incoming: Attribution): Attribution {
  const next: Attribution = { ...existing }
  const sticky: AttributionField[] = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'first_landing_page',
  ]
  for (const key of sticky) {
    if (!next[key] && incoming[key]) next[key] = incoming[key]
  }
  if (incoming.gclid) {
    const parts = next.gclid
      .split(',')
      .map((part) => part.trim())
      .filter(Boolean)
    if (!parts.includes(incoming.gclid)) parts.push(incoming.gclid)
    next.gclid = parts.join(',').slice(0, FIELD_MAX)
  }
  return next
}

export function attributionFromSearch(search: string, landingPath: string): Attribution {
  const params = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search)
  const next = emptyAttribution()
  for (const key of ATTRIBUTION_FIELDS) {
    if (key === 'first_landing_page') continue
    next[key] = clip(params.get(key) ?? '')
  }
  const query = search.startsWith('?') ? search : search ? `?${search}` : ''
  next.first_landing_page = clip(`${landingPath}${query}`)
  return next
}

export function attributionCustomFields(
  attribution: Partial<Attribution> | undefined,
): Array<{ key: AttributionField; field_value: string }> {
  const full = emptyAttribution()
  if (attribution) {
    for (const key of ATTRIBUTION_FIELDS) {
      const value = attribution[key]
      if (typeof value === 'string') full[key] = value
    }
  }
  return ATTRIBUTION_FIELDS.map((key) => ({ key, field_value: full[key] }))
}

export function attributionMetadata(attribution: Attribution): Record<string, string> {
  const metadata: Record<string, string> = {}
  for (const key of ATTRIBUTION_FIELDS) {
    metadata[key] = attribution[key]
  }
  return metadata
}

function parseCookieHeader(header: string | null, name: string): string | null {
  if (!header) return null
  for (const part of header.split(';')) {
    const trimmed = part.trim()
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    if (trimmed.slice(0, eq) !== name) continue
    return trimmed.slice(eq + 1)
  }
  return null
}

export function decodeAttribution(raw: string | null | undefined): Attribution {
  if (!raw) return emptyAttribution()
  try {
    const parsed: unknown = JSON.parse(decodeURIComponent(raw))
    return attributionFromUnknown(parsed)
  } catch {
    return emptyAttribution()
  }
}

export function attributionFromCookieHeader(header: string | null): Attribution {
  return decodeAttribution(parseCookieHeader(header, ATTRIBUTION_COOKIE))
}

export function resolveAttribution(cookieHeader: string | null, body: unknown): Attribution {
  return mergeAttribution(attributionFromCookieHeader(cookieHeader), attributionFromUnknown(body))
}

function cookieDomainAttribute(hostname: string): string {
  if (hostname === 'sbmc.io' || hostname.endsWith('.sbmc.io')) return '; Domain=.sbmc.io'
  return ''
}

export function readClientAttribution(): Attribution {
  if (typeof window === 'undefined') return emptyAttribution()
  const fromCookie = decodeAttribution(parseCookieHeader(document.cookie, ATTRIBUTION_COOKIE))
  let fromStorage = emptyAttribution()
  try {
    fromStorage = decodeAttribution(window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY))
  } catch {
    fromStorage = emptyAttribution()
  }
  return mergeAttribution(fromCookie, fromStorage)
}

function persistAttribution(attribution: Attribution): void {
  const encoded = encodeURIComponent(JSON.stringify(attribution))
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  const domain = cookieDomainAttribute(window.location.hostname)
  document.cookie = `${ATTRIBUTION_COOKIE}=${encoded}; Max-Age=${ATTRIBUTION_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}${domain}`
  try {
    window.localStorage.setItem(ATTRIBUTION_STORAGE_KEY, encoded)
  } catch {
    // Storage can be blocked. The cookie is the source the server reads.
  }
}

export function captureAttribution(pathname: string, search: string): Attribution {
  const incoming = attributionFromSearch(search, pathname)
  const existing = readClientAttribution()
  const next = mergeAttribution(existing, incoming)
  const changed = ATTRIBUTION_FIELDS.some((key) => next[key] !== existing[key])
  if (changed || !existing.first_landing_page) persistAttribution(next)
  return next
}
