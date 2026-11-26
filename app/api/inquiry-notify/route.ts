import { NextResponse } from 'next/server';
import { z } from 'zod';
import { clientIp, rateLimit } from '@/lib/rateLimit';
import {
  clipField,
  postWebhookJson,
  splitPersonName,
} from '@/lib/serverWebhook';

export const runtime = 'nodejs';

const inquirySchema = z.object({
  name: z.string().trim().max(120).optional().default(''),
  first_name: z.string().trim().max(80).optional().default(''),
  last_name: z.string().trim().max(80).optional().default(''),
  email: z.string().trim().max(200).optional().default(''),
  phone: z.string().trim().max(40).optional().default(''),
  business_name: z.string().trim().max(160).optional().default(''),
  message: z.string().trim().max(4000).optional().default(''),
  page_url: z.string().trim().max(500).optional().default(''),
  utm_source: z.string().trim().max(200).optional().default(''),
  utm_medium: z.string().trim().max(200).optional().default(''),
  utm_campaign: z.string().trim().max(200).optional().default(''),
  company_website: z.string().max(200).optional().default(''),
});

export async function POST(request: Request) {
  const ok = NextResponse.json({ ok: true });

  const ip = clientIp(request.headers);
  if (!rateLimit(`inquiry-notify:${ip}`)) {
    return ok;
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return ok;
  }

  const parsed = inquirySchema.safeParse(json);
  if (!parsed.success) {
    return ok;
  }

  const data = parsed.data;

  // Honeypot: pretend success, do not forward
  if (data.company_website.trim()) {
    return ok;
  }

  const hasSignal =
    Boolean(data.email) ||
    Boolean(data.phone) ||
    Boolean(data.message) ||
    Boolean(data.name) ||
    Boolean(data.first_name);
  if (!hasSignal) {
    return ok;
  }

  let firstName = clipField(data.first_name, 80);
  let lastName = clipField(data.last_name, 80);
  if (!firstName && data.name) {
    const split = splitPersonName(data.name);
    firstName = split.first_name;
    lastName = split.last_name;
  }

  const webhookUrl = process.env.GHL_INQUIRY_WEBHOOK_URL;
  if (!webhookUrl) {
    return ok;
  }

  const payload = {
    first_name: firstName,
    last_name: lastName,
    email: clipField(data.email, 200),
    phone: clipField(data.phone, 40),
    business_name: clipField(data.business_name, 160),
    message: clipField(data.message, 4000),
    page_url: clipField(data.page_url, 500),
    utm_source: clipField(data.utm_source, 200),
    utm_medium: clipField(data.utm_medium, 200),
    utm_campaign: clipField(data.utm_campaign, 200),
    timestamp: new Date().toISOString(),
  };

  await postWebhookJson(webhookUrl, payload);
  return ok;
}
