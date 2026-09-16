import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/schemas';
import { clientIp, rateLimit } from '@/lib/rateLimit';
import { submitWebsiteLead } from '@/lib/ghl';

export const runtime = 'nodejs';

const MIN_MS = 3_000;

export async function POST(request: Request) {
  const ip = clientIp(request.headers);
  if (!rateLimit(`lead:${ip}`)) {
    return NextResponse.json({ ok: false, error: 'Too many submissions. Try again shortly.' }, { status: 429 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? 'Check the form and try again.' },
      { status: 400 },
    );
  }

  const lead = parsed.data;
  if (lead.company_website) {
    return NextResponse.json({ ok: true });
  }
  if (Date.now() - lead.startedAt < MIN_MS) {
    return NextResponse.json({ ok: false, error: 'Please take a moment and try again.' }, { status: 400 });
  }

  await submitWebsiteLead(lead, lead.pagePath || '/');
  return NextResponse.json({ ok: true });
}
