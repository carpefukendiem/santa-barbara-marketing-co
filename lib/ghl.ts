import { getLeadProvider } from '@/lib/leads';
import type { ContactInput } from '@/lib/schemas';

const GHL_BASE = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';

const INTEREST_TAGS: Record<ContactInput['interest'], string> = {
  digital: 'interest-digital',
  print: 'interest-print',
  both: 'interest-both',
  unsure: 'interest-unsure',
};

function splitName(name: string): { firstName: string; lastName: string } {
  const parts = name.trim().split(/\s+/);
  const firstName = parts[0] ?? name;
  const lastName = parts.slice(1).join(' ');
  return { firstName, lastName };
}

function pageSlug(path: string): string {
  const cleaned = path.replace(/^\//, '').replace(/\/$/, '') || 'home';
  return cleaned.replace(/[^\w/-]+/g, '-').slice(0, 80);
}

function headers(): HeadersInit {
  const token = process.env.GHL_PRIVATE_TOKEN;
  if (!token) {
    throw new Error('GHL_PRIVATE_TOKEN is not set.');
  }
  return {
    Authorization: `Bearer ${token}`,
    Version: GHL_VERSION,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
}

async function ghlFetch<T>(path: string, init: RequestInit): Promise<T> {
  const url = `${GHL_BASE}${path}`;
  let attempt = 0;
  // simple retry once on 5xx/429
  while (true) {
    const response = await fetch(url, {
      ...init,
      headers: { ...headers(), ...init.headers },
    });
    const text = await response.text();
    let json: unknown = null;
    try {
      json = text ? JSON.parse(text) : null;
    } catch {
      json = { raw: text };
    }
    if (response.ok) {
      return json as T;
    }
    const status = response.status;
    const shouldRetry = (status === 429 || (status >= 500 && status <= 599)) && attempt < 1;
    console.error('[ghl] request failed', {
      path,
      status,
      method: (init.method || 'GET').toString(),
      bodyPreview:
        typeof init.body === 'string'
          ? init.body.slice(0, 200)
          : init.body
          ? '[non-string body]'
          : '',
      response: json,
      attempt,
      willRetry: shouldRetry,
    });
    if (!shouldRetry) {
      throw new Error(`GHL ${path} failed (${status})`);
    }
    attempt += 1;
    await new Promise((r) => setTimeout(r, 350));
  }
}

export async function upsertGhlContact(
  lead: ContactInput,
  pagePath: string,
): Promise<string | undefined> {
  const locationId = process.env.GHL_LOCATION_ID;
  if (!locationId) {
    throw new Error('GHL_LOCATION_ID is not set.');
  }
  const { firstName, lastName } = splitName(lead.name);
  const tags = [
    'website-lead',
    pageSlug(pagePath),
    INTEREST_TAGS[lead.interest],
  ];
  if (pagePath.includes('/services/print-and-apparel') || pagePath.includes('/services/screen-printing') || pagePath.includes('/services/custom-apparel') || pagePath.includes('/services/promotional-products') || pagePath.includes('/services/team-stores')) {
    if (!tags.includes('interest-print')) tags.push('interest-print');
  }

  const payload = {
    locationId,
    firstName,
    lastName,
    email: lead.email,
    ...(lead.phone ? { phone: lead.phone } : {}),
    companyName: lead.businessName,
    source: `Website — ${pagePath || '/'}`,
    tags,
    customFields: [{ key: 'message', field_value: lead.message }],
  };

  const result = await ghlFetch<{ contact?: { id?: string }; id?: string }>(
    '/contacts/upsert',
    { method: 'POST', body: JSON.stringify(payload) },
  );
  return result.contact?.id ?? result.id;
}

export async function createGhlOpportunity(
  contactId: string,
  businessName: string,
  interest: ContactInput['interest'],
): Promise<void> {
  const locationId = process.env.GHL_LOCATION_ID;
  const pipelineId = process.env.GHL_PIPELINE_ID;
  const defaultStage = process.env.GHL_PIPELINE_STAGE_ID;
  const printStage = process.env.GHL_PRINT_STAGE_ID;
  if (!locationId || !pipelineId || !defaultStage) {
    console.info('[ghl] skipping opportunity — pipeline env not fully set');
    return;
  }
  const printTagged = interest === 'print' || interest === 'both';
  const pipelineStageId =
    printTagged && printStage ? printStage : defaultStage;

  await ghlFetch('/opportunities/', {
    method: 'POST',
    body: JSON.stringify({
      locationId,
      pipelineId,
      pipelineStageId,
      contactId,
      name: `${businessName} — website`,
      status: 'open',
      source: 'website',
    }),
  });
}

export type PaidEnrollment = {
  name: string;
  email: string;
  phone?: string;
  businessName: string;
  interval: 'month' | 'year';
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  status: 'paid' | 'failed' | 'cancelled' | 'refunded' | 'disputed';
};

export async function enrollPaidClient(enrollment: PaidEnrollment): Promise<void> {
  const locationId = process.env.GHL_LOCATION_ID;
  if (!process.env.GHL_PRIVATE_TOKEN || !locationId) {
    console.info('[ghl] skipping paid enroll — GHL env not set');
    return;
  }

  const { firstName, lastName } = splitName(enrollment.name || '805 System client');
  const intervalTag =
    enrollment.interval === 'year' ? '805-system-annual' : '805-system-monthly';
  const statusTag = `805-system-${enrollment.status}`;
  const tags = ['website-client', '805-system', intervalTag, statusTag];

  const result = await ghlFetch<{ contact?: { id?: string }; id?: string }>(
    '/contacts/upsert',
    {
      method: 'POST',
      body: JSON.stringify({
        locationId,
        firstName,
        lastName,
        email: enrollment.email,
        ...(enrollment.phone ? { phone: enrollment.phone } : {}),
        companyName: enrollment.businessName,
        source: 'Website — /get-started',
        tags,
      }),
    },
  );
  const contactId = result.contact?.id ?? result.id;
  if (!contactId) return;

  const intervalLabel = enrollment.interval === 'year' ? 'annual' : 'monthly';
  const noteParts = [
    `805 System ${intervalLabel} — ${enrollment.status}.`,
    enrollment.stripeCustomerId ? `Stripe customer ${enrollment.stripeCustomerId}.` : '',
    enrollment.stripeSubscriptionId
      ? `Subscription ${enrollment.stripeSubscriptionId}.`
      : '',
  ].filter(Boolean);

  try {
    await ghlFetch(`/contacts/${contactId}/notes`, {
      method: 'POST',
      body: JSON.stringify({ body: noteParts.join(' ') }),
    });
  } catch (error) {
    console.error('[ghl] paid note failed', error);
  }

  if (enrollment.status !== 'paid') return;

  const workflowId = process.env.GHL_PAID_WORKFLOW_ID;
  if (workflowId) {
    try {
      await ghlFetch(`/contacts/${contactId}/workflow/${workflowId}`, {
        method: 'POST',
        body: JSON.stringify({}),
      });
    } catch (error) {
      console.error('[ghl] workflow enroll failed', error);
    }
  }

  const pipelineId = process.env.GHL_PIPELINE_ID;
  const paidStage = process.env.GHL_PAID_STAGE_ID;
  if (pipelineId && paidStage) {
    try {
      await ghlFetch('/opportunities/', {
        method: 'POST',
        body: JSON.stringify({
          locationId,
          pipelineId,
          pipelineStageId: paidStage,
          contactId,
          name: `${enrollment.businessName || firstName} — 805 System ${intervalLabel}`,
          status: 'open',
          source: 'website-checkout',
        }),
      });
    } catch (error) {
      console.error('[ghl] paid opportunity failed', error);
    }
  }
}

export async function submitWebsiteLead(
  lead: ContactInput,
  pagePath: string,
): Promise<void> {
  try {
    if (process.env.GHL_PRIVATE_TOKEN && process.env.GHL_LOCATION_ID) {
      const contactId = await upsertGhlContact(lead, pagePath);
      if (contactId) {
        await createGhlOpportunity(contactId, lead.businessName, lead.interest);
      }
      return;
    }
  } catch (error) {
    console.error('[ghl] primary submit failed, falling back', error);
  }

  try {
    await getLeadProvider().send({ type: 'contact', ...lead });
  } catch (error) {
    console.error('[lead] fallback provider failed', error);
  }
}

export async function recordCheckoutStart(input: {
  name: string;
  email: string;
  phone?: string;
}): Promise<void> {
  const locationId = process.env.GHL_LOCATION_ID;
  if (!process.env.GHL_PRIVATE_TOKEN || !locationId) {
    // skip silently when not configured
    console.info('[ghl] skipping checkout-start — GHL env not set');
    return;
  }
  const { firstName, lastName } = splitName(input.name);
  const tags = ['website-lead', '805-system', '805-system-checkout-started', pageSlug('/get-started')];
  try {
    await ghlFetch('/contacts/upsert', {
      method: 'POST',
      body: JSON.stringify({
        locationId,
        firstName,
        lastName,
        email: input.email,
        ...(input.phone ? { phone: input.phone } : {}),
        source: 'Website — /get-started',
        tags,
      }),
    });
  } catch (error) {
    console.error('[ghl] checkout-start upsert failed', error);
  }
}
