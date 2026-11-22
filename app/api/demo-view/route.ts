import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getDemo } from '@/data/demos';
import { SITE_URL } from '@/lib/siteUrl';
import {
  clipField,
  isBotUserAgent,
  optionalRegistryString,
  parseCookieHeader,
  postWebhookJson,
} from '@/lib/serverWebhook';

export const runtime = 'nodejs';

const YEAR_SECONDS = 60 * 60 * 24 * 365;
const DEBOUNCE_SECONDS = 30 * 60;

const VISITOR_COOKIE = 'sbmc_visitor_id';
const INTERNAL_COOKIE = 'sbmc_internal';

const bodySchema = z.object({
  slug: z.string().trim().min(1).max(120),
  referrer: z.string().max(2000).optional().default(''),
  utm_source: z.string().max(200).optional().default(''),
  utm_medium: z.string().max(200).optional().default(''),
  utm_campaign: z.string().max(200).optional().default(''),
  preview: z.boolean().optional().default(false),
});

function debounceCookieName(slug: string): string {
  // Keep cookie names short and safe for long demo slugs.
  return `sbmc_dv_${slug.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 48)}`;
}

function cookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge,
  };
}

export async function POST(request: Request) {
  const response = NextResponse.json({ ok: true });

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return response;
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return response;
  }

  const data = parsed.data;
  const demo = getDemo(data.slug);
  if (!demo) {
    return response;
  }

  const ua = request.headers.get('user-agent');
  if (isBotUserAgent(ua)) {
    return response;
  }

  const cookieHeader = request.headers.get('cookie');
  const isInternalCookie = parseCookieHeader(cookieHeader, INTERNAL_COOKIE) === '1';
  const previewParam = new URL(request.url).searchParams.get('preview') === '1';

  if (data.preview || previewParam) {
    response.cookies.set(INTERNAL_COOKIE, '1', cookieOptions(YEAR_SECONDS));
    return response;
  }

  if (isInternalCookie) {
    return response;
  }

  let visitorId = parseCookieHeader(cookieHeader, VISITOR_COOKIE);
  if (!visitorId || visitorId.length > 80) {
    visitorId = crypto.randomUUID();
  }
  response.cookies.set(VISITOR_COOKIE, visitorId, cookieOptions(YEAR_SECONDS));

  const debounceName = debounceCookieName(data.slug);
  if (parseCookieHeader(cookieHeader, debounceName)) {
    return response;
  }

  const webhookUrl = process.env.GHL_DEMO_VIEW_WEBHOOK_URL;
  if (!webhookUrl) {
    // Unset env: skip silently with no error to the user.
    return response;
  }

  const email = optionalRegistryString(demo, 'email');
  const ghlContactId = optionalRegistryString(demo, 'ghl_contact_id');

  const payload: Record<string, string> = {
    business_name: demo.crmName || demo.name,
    demo_url: `${SITE_URL}/demos/${demo.slug}`,
    email,
    phone: demo.phone ?? '',
    visitor_id: visitorId,
    referrer: clipField(data.referrer, 2000),
    utm_source: clipField(data.utm_source, 200),
    utm_medium: clipField(data.utm_medium, 200),
    utm_campaign: clipField(data.utm_campaign, 200),
    timestamp: new Date().toISOString(),
  };
  if (ghlContactId) {
    payload.ghl_contact_id = ghlContactId;
  }

  await postWebhookJson(webhookUrl, payload);
  response.cookies.set(debounceName, '1', cookieOptions(DEBOUNCE_SECONDS));
  return response;
}
