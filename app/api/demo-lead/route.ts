import { NextResponse } from 'next/server';
import { z } from 'zod';
import { clientIp, rateLimit } from '@/lib/rateLimit';

export const runtime = 'nodejs';

const demoLeadSchema = z.object({
  name: z.string().trim().min(1, 'Name is required.').max(120),
  phone: z.string().trim().min(7, 'Phone is required.').max(40),
  best_time: z.string().trim().max(80).optional().default(''),
  note: z.string().trim().max(2000).optional().default(''),
  business_slug: z.string().trim().min(1).max(120),
  business_name: z.string().trim().min(1).max(200),
  demo_url: z.string().trim().max(500).optional(),
  company_website: z.string().optional(),
});

export async function POST(request: Request) {
  const ip = clientIp(request.headers);
  if (!rateLimit(`demo-lead:${ip}`)) {
    return NextResponse.json(
      { ok: false, error: 'Too many submissions. Try again shortly.' },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const parsed = demoLeadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: parsed.error.issues[0]?.message ?? 'Check the form and try again.',
      },
      { status: 400 },
    );
  }

  const lead = parsed.data;

  // Honeypot: pretend success, do not forward
  if (lead.company_website && lead.company_website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const webhookUrl = process.env.DEMO_LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ ok: false, error: 'Webhook unavailable.' }, { status: 502 });
  }

  const payload = {
    name: lead.name,
    phone: lead.phone,
    best_time: lead.best_time,
    note: lead.note,
    business_slug: lead.business_slug,
    business_name: lead.business_name,
    demo_url: lead.demo_url ?? '',
    source: 'sbmc-demo' as const,
    submitted_at: new Date().toISOString(),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: 'Forward failed.' }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: 'Forward failed.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
