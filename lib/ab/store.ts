import { randomUUID } from 'crypto';
import type { AbEventName } from '@/lib/ab/constants';
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
 * Preferred: Supabase table `hp_ab_events` when SUPABASE_URL and
 * SUPABASE_SERVICE_ROLE_KEY are set (see supabase/migrations).
 *
 * Fallback already available in-repo: process-local memory buffer so preview
 * and local `next start` can exercise /api/ab-results. This is not multi-
 * instance durable; apply the SQL migration and set the Supabase env vars
 * before relying on production counts. Vercel Analytics custom events are
 * always fired from the client in parallel.
 */
const memoryStore: AbEventRow[] = [];

function supabaseConfig() {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, '');
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return { url, key };
}

export async function insertAbEvent(input: InsertInput): Promise<AbEventRow> {
  const row: AbEventRow = {
    id: randomUUID(),
    created_at: new Date().toISOString(),
    variant: input.variant,
    event: input.event,
    path: input.path,
    visitor_id: input.visitor_id,
    session_id: input.session_id ?? null,
  };

  const supabase = supabaseConfig();
  if (supabase) {
    const response = await fetch(`${supabase.url}/rest/v1/hp_ab_events`, {
      method: 'POST',
      headers: {
        apikey: supabase.key,
        Authorization: `Bearer ${supabase.key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify({
        id: row.id,
        created_at: row.created_at,
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
    return row;
  }

  memoryStore.push(row);
  return row;
}

export async function listAbEvents(): Promise<{
  rows: AbEventRow[];
  store: 'supabase' | 'memory';
}> {
  const supabase = supabaseConfig();
  if (supabase) {
    const response = await fetch(
      `${supabase.url}/rest/v1/hp_ab_events?select=id,created_at,variant,event,path,visitor_id,session_id&order=created_at.asc`,
      {
        headers: {
          apikey: supabase.key,
          Authorization: `Bearer ${supabase.key}`,
        },
        next: { revalidate: 0 },
      },
    );
    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      throw new Error(`Supabase read failed (${response.status}): ${detail}`);
    }
    const rows = (await response.json()) as AbEventRow[];
    return { rows, store: 'supabase' };
  }

  return { rows: [...memoryStore], store: 'memory' };
}

export type AbVariantStats = {
  variant: HomepageVariantId;
  exposures: number;
  events: Record<AbEventName, number>;
  rates: Record<Exclude<AbEventName, 'exposure'>, number | null>;
};

export function summarizeAbEvents(rows: AbEventRow[]): AbVariantStats[] {
  const variants: HomepageVariantId[] = ['a', 'b'];
  return variants.map((variant) => {
    const subset = rows.filter((row) => row.variant === variant);
    const events = {
      exposure: 0,
      start_plan_click: 0,
      get_started_view: 0,
      checkout_start: 0,
      checkout_complete: 0,
      book_call_click: 0,
      book_call_view: 0,
      booking_complete: 0,
    } satisfies Record<AbEventName, number>;
    for (const row of subset) {
      events[row.event] += 1;
    }
    const exposures = events.exposure;
    const rate = (count: number) =>
      exposures > 0 ? Number((count / exposures).toFixed(4)) : null;
    return {
      variant,
      exposures,
      events,
      rates: {
        start_plan_click: rate(events.start_plan_click),
        get_started_view: rate(events.get_started_view),
        checkout_start: rate(events.checkout_start),
        checkout_complete: rate(events.checkout_complete),
        book_call_click: rate(events.book_call_click),
        book_call_view: rate(events.book_call_view),
        booking_complete: rate(events.booking_complete),
      },
    };
  });
}
