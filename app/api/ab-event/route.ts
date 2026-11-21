import { NextResponse } from 'next/server';
import { AB_EVENTS, type AbEventName } from '@/lib/ab/constants';
import { insertAbEvent } from '@/lib/ab/store';
import { isHomepageVariantId } from '@/data/homepage-variants';

export const runtime = 'nodejs';

type Body = {
  event?: unknown;
  variant?: unknown;
  path?: unknown;
  visitor_id?: unknown;
  session_id?: unknown;
};

function isAbEventName(value: unknown): value is AbEventName {
  return typeof value === 'string' && (AB_EVENTS as readonly string[]).includes(value);
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!isAbEventName(body.event)) {
    return NextResponse.json({ error: 'Invalid event' }, { status: 400 });
  }
  if (typeof body.variant !== 'string' || !isHomepageVariantId(body.variant)) {
    return NextResponse.json({ error: 'Invalid variant' }, { status: 400 });
  }
  if (typeof body.visitor_id !== 'string' || body.visitor_id.length < 8) {
    return NextResponse.json({ error: 'Invalid visitor_id' }, { status: 400 });
  }

  const path =
    typeof body.path === 'string' && body.path.startsWith('/')
      ? body.path.slice(0, 512)
      : '/';
  const sessionId =
    typeof body.session_id === 'string' && body.session_id.length > 0
      ? body.session_id.slice(0, 256)
      : null;

  try {
    await insertAbEvent({
      event: body.event,
      variant: body.variant,
      path,
      visitor_id: body.visitor_id.slice(0, 128),
      session_id: sessionId,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Store failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
