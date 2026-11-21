import { NextResponse } from 'next/server';
import { listAbEvents, summarizeAbEvents } from '@/lib/ab/store';

export const runtime = 'nodejs';

function authorized(request: Request): boolean {
  const secret = process.env.AB_RESULTS_SECRET;
  if (!secret) return false;
  const header = request.headers.get('x-ab-results-secret');
  if (header && header === secret) return true;
  const url = new URL(request.url);
  const query = url.searchParams.get('secret');
  return query === secret;
}

export async function GET(request: Request) {
  if (!process.env.AB_RESULTS_SECRET) {
    return NextResponse.json(
      {
        error:
          'AB_RESULTS_SECRET is not set. Add it in Vercel before reading results.',
      },
      { status: 503 },
    );
  }
  if (!authorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { rows, store } = await listAbEvents();
    return NextResponse.json({
      store,
      total: rows.length,
      variants: summarizeAbEvents(rows),
      note:
        store === 'memory'
          ? 'Using in-process memory. Apply supabase/migrations/20261121_hp_ab_events.sql and set SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY for durable production counts.'
          : 'Reading from Supabase hp_ab_events.',
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Read failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
