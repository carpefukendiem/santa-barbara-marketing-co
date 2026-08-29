/**
 * In-memory IP rate limiter.
 * Swap in Upstash Redis for multi-instance production:
 *   @upstash/ratelimit + @upstash/redis, same consume() signature.
 */

type Bucket = { count: number; resetAt: number };

const hits = new Map<string, Bucket>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX = 8;

export function rateLimit(key: string): { ok: boolean; remaining: number } {
  const now = Date.now();
  const current = hits.get(key);
  if (!current || now > current.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, remaining: MAX - 1 };
  }
  if (current.count >= MAX) {
    return { ok: false, remaining: 0 };
  }
  current.count += 1;
  return { ok: true, remaining: MAX - current.count };
}
