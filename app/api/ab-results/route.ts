import { NextResponse } from 'next/server';
import { fetchAbSummary, summarizeAbSummary } from '@/lib/ab/store';

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
    const { rows, store, via } = await fetchAbSummary();
    const variants = summarizeAbSummary(rows);
    const totalEvents = variants.reduce(
      (sum, variant) =>
        sum + Object.values(variant.events).reduce((inner, n) => inner + n, 0),
      0,
    );
    return NextResponse.json({
      store,
      via: via ?? null,
      total: totalEvents,
      variants,
      note:
        store === 'memory'
          ? 'Using in-process memory. Set SUPABASE_URL + SUPABASE_ANON_KEY (server-only) for durable counts via hp_ab_summary().'
          : 'Reading from Supabase RPC hp_ab_summary(). Rates use exposure visitors as the denominator.',
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Read failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
