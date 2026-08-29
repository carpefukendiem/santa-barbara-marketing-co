import { NextResponse } from 'next/server';
import { contactSchema, growthPlanSchema } from '@/lib/schemas';
import { rateLimit } from '@/lib/rateLimit';
import { getLeadProvider } from '@/lib/leads';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MIN_MS = 3000;

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown';
  const limited = rateLimit(ip);
  if (!limited.ok) {
    return NextResponse.json(
      { ok: false, error: 'Too many submissions. Please try again later.' },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const body = json as { type?: string; company_website?: string; startedAt?: number };
  if (body.company_website) {
    return NextResponse.json({ ok: true });
  }
  if (
    typeof body.startedAt !== 'number' ||
    body.startedAt <= 0 ||
    Date.now() - body.startedAt < MIN_MS
  ) {
    return NextResponse.json({ ok: false, error: 'Please try again.' }, { status: 400 });
  }

  try {
    if (body.type === 'growth-plan') {
      const parsed = growthPlanSchema.parse(json);
      const result = await getLeadProvider().send({ type: 'growth-plan', ...parsed });
      if (!result.ok) {
        return NextResponse.json(
          { ok: false, error: result.error ?? 'Could not send. Email us instead.' },
          { status: 502 },
        );
      }
      return NextResponse.json({ ok: true });
    }

    const parsed = contactSchema.parse(json);
    const result = await getLeadProvider().send({ type: 'contact', ...parsed });
    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error ?? 'Could not send. Email us instead.' },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json({ ok: false, error: 'Please check the highlighted fields.' }, { status: 400 });
    }
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Email hello@santabarbaramarketingco.com.' },
      { status: 500 },
    );
  }
}
