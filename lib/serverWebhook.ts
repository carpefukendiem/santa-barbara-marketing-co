/** Server-only outbound webhook helpers. Never import from client components. */

const DEFAULT_TIMEOUT_MS = 3_000;

export const BOT_UA_RE =
  /bot|crawler|spider|preview|headless|facebookexternalhit|slackbot|twitterbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest\/0\.|redditbot|applebot|bingpreview|yandex|duckduckbot|baiduspider|semrush|ahrefs|mj12bot|dotbot|petalbot|bytespider/i;

export function isBotUserAgent(ua: string | null): boolean {
  if (!ua) return false;
  return BOT_UA_RE.test(ua);
}

export function parseCookieHeader(header: string | null, name: string): string | null {
  if (!header) return null;
  for (const part of header.split(';')) {
    const trimmed = part.trim();
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    if (trimmed.slice(0, eq) !== name) continue;
    return decodeURIComponent(trimmed.slice(eq + 1));
  }
  return null;
}

export function splitPersonName(fullName: string): { first_name: string; last_name: string } {
  const trimmed = fullName.trim().replace(/\s+/g, ' ');
  if (!trimmed) return { first_name: '', last_name: '' };
  const space = trimmed.indexOf(' ');
  if (space === -1) return { first_name: trimmed, last_name: '' };
  return {
    first_name: trimmed.slice(0, space),
    last_name: trimmed.slice(space + 1),
  };
}

export function clipField(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

/**
 * POST JSON to a webhook URL with a short timeout. Swallows all errors.
 * Caller must pass a server-only env value; never log the URL.
 */
export async function postWebhookJson(
  url: string | undefined,
  payload: Record<string, unknown>,
  timeoutMs = DEFAULT_TIMEOUT_MS,
): Promise<void> {
  if (!url) return;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } catch {
    // Swallow network/timeout errors. Do not surface to the user.
  } finally {
    clearTimeout(timer);
  }
}

/** Read an optional string field from a registry record without inventing values. */
export function optionalRegistryString(record: object, key: string): string {
  if (!(key in record)) return '';
  const value = (record as Record<string, unknown>)[key];
  return typeof value === 'string' ? value.trim() : '';
}
