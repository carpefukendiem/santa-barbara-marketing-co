import { randomUUID } from 'crypto';
import { AB_EVENTS, type AbEventName } from '@/lib/ab/constants';
import type { HomepageVariantId } from '@/data/homepage-variants';

export type AbEventRow = {
  id: string;
  created_at: string;
  variant: HomepageVariantId;
  event: AbEventName;
  path: string;
  visitor_id: string;
  session_id: string | null;
};

export type HpAbSummaryRow = {
  variant: HomepageVariantId;
  event: AbEventName;
  events: number;
  visitors: number;
};

type InsertInput = {
  variant: HomepageVariantId;
  event: AbEventName;
  path: string;
  visitor_id: string;
  session_id?: string | null;
};

/**
 * Durable store for homepage A/B events.
 *
 * Preferred: Supabase with SUPABASE_URL + SUPABASE_ANON_KEY (server-only).
 * Optional fallback key: SUPABASE_SERVICE_ROLE_KEY.
 * Writes: INSERT only (anon has no SELECT). Reads: RPC hp_ab_summary().
 *
 * Without Supabase env vars, uses an in-process memory buffer for local/preview.
 */
const memoryStore: AbEventRow[] = [];

function supabaseConfig(): { url: string; key: string; via: 'anon' | 'service' } | null {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, '');
  if (!url) return null;
  const anon = process.env.SUPABASE_ANON_KEY;
  if (anon) return { url, key: anon, via: 'anon' };
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (service) return { url, key: service, via: 'service' };
  return null;
}

export function normalizeAbInsert(input: InsertInput): InsertInput {
  return {
    variant: input.variant,
    event: input.event,
    path: input.path.slice(0, 512),
    visitor_id: input.visitor_id.slice(0, 128),
    session_id:
      input.session_id && input.session_id.length > 0
        ? input.session_id.slice(0, 256)
        : null,
  };
}

export async function insertAbEvent(input: InsertInput): Promise<{ ok: true }> {
  const row = normalizeAbInsert(input);
  const supabase = supabaseConfig();
  if (supabase) {
    const response = await fetch(`${supabase.url}/rest/v1/hp_ab_events`, {
      method: 'POST',
      headers: {
        apikey: supabase.key,
        Authorization: `Bearer ${supabase.key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        variant: row.variant,
        event: row.event,
        path: row.path,
        visitor_id: row.visitor_id,
        session_id: row.session_id,
      }),
    });
    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      throw new Error(`Supabase insert failed (${response.status}): ${detail}`);
    }
    return { ok: true };
  }

  memoryStore.push({
    id: randomUUID(),
    created_at: new Date().toISOString(),
    variant: row.variant,
    event: row.event,
    path: row.path,
    visitor_id: row.visitor_id,
    session_id: row.session_id ?? null,
  });
  return { ok: true };
}

function emptyCounts(): Record<AbEventName, number> {
  return {
    exposure: 0,
    start_plan_click: 0,
    get_started_view: 0,
    checkout_start: 0,
    checkout_complete: 0,
    book_call_click: 0,
    book_call_view: 0,
    booking_complete: 0,
  };
}

function summarizeFromRows(rows: HpAbSummaryRow[]): AbVariantStats[] {
  const variants: HomepageVariantId[] = ['a', 'b'];
  return variants.map((variant) => {
    const events = emptyCounts();
    const visitors = emptyCounts();
    for (const row of rows) {
      if (row.variant !== variant) continue;
      if (!(AB_EVENTS as readonly string[]).includes(row.event)) continue;
      events[row.event] = Number(row.events) || 0;
      visitors[row.event] = Number(row.visitors) || 0;
    }
    const exposureVisitors = visitors.exposure;
    const rate = (count: number) =>
      exposureVisitors > 0 ? Number((count / exposureVisitors).toFixed(4)) : null;
    return {
      variant,
      exposures: exposureVisitors,
      events,
      visitors,
      rates: {
        start_plan_click: rate(visitors.start_plan_click),
        get_started_view: rate(visitors.get_started_view),
        checkout_start: rate(visitors.checkout_start),
        checkout_complete: rate(visitors.checkout_complete),
        book_call_click: rate(visitors.book_call_click),
        book_call_view: rate(visitors.book_call_view),
        booking_complete: rate(visitors.booking_complete),
      },
    };
  });
}

function memorySummaryRows(): HpAbSummaryRow[] {
  const map = new Map<string, { events: number; visitors: Set<string> }>();
  for (const row of memoryStore) {
    const key = `${row.variant}:${row.event}`;
    const current = map.get(key) ?? { events: 0, visitors: new Set<string>() };
    current.events += 1;
    current.visitors.add(row.visitor_id);
    map.set(key, current);
  }
  const rows: HpAbSummaryRow[] = [];
  for (const [key, value] of map) {
    const [variant, event] = key.split(':') as [HomepageVariantId, AbEventName];
    rows.push({
      variant,
      event,
      events: value.events,
      visitors: value.visitors.size,
    });
  }
  return rows;
}

export async function fetchAbSummary(): Promise<{
  rows: HpAbSummaryRow[];
  store: 'supabase' | 'memory';
  via?: 'anon' | 'service';
}> {
  const supabase = supabaseConfig();
  if (supabase) {
    const response = await fetch(`${supabase.url}/rest/v1/rpc/hp_ab_summary`, {
      method: 'POST',
      headers: {
        apikey: supabase.key,
        Authorization: `Bearer ${supabase.key}`,
        'Content-Type': 'application/json',
      },
      body: '{}',
      next: { revalidate: 0 },
    });
    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      throw new Error(`Supabase rpc failed (${response.status}): ${detail}`);
    }
    const rows = (await response.json()) as HpAbSummaryRow[];
    return { rows, store: 'supabase', via: supabase.via };
  }

  return { rows: memorySummaryRows(), store: 'memory' };
}

export type AbVariantStats = {
  variant: HomepageVariantId;
  /** Unique visitors with an exposure event. */
  exposures: number;
  events: Record<AbEventName, number>;
  visitors: Record<AbEventName, number>;
  rates: Record<Exclude<AbEventName, 'exposure'>, number | null>;
};

export function summarizeAbSummary(rows: HpAbSummaryRow[]): AbVariantStats[] {
  return summarizeFromRows(rows);
}
