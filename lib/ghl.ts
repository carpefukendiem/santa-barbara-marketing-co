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
  const response = await fetch(`${GHL_BASE}${path}`, {
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
  if (!response.ok) {
    const err = new Error(`GHL ${path} failed (${response.status})`);
    console.error('[ghl]', path, response.status, json);
    throw err;
  }
  return json as T;
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
