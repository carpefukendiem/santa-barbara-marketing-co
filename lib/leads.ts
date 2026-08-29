import type { ContactInput, GrowthPlanInput } from '@/lib/schemas';

export type Lead =
  | ({ type: 'contact' } & ContactInput)
  | ({ type: 'growth-plan' } & GrowthPlanInput);

export type LeadResult = { ok: boolean; error?: string };

export interface LeadProvider {
  send(lead: Lead): Promise<LeadResult>;
}

function assertEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `${name} is not set. Configure it in the environment before using this lead provider.`,
    );
  }
  return value;
}

export class ConsoleProvider implements LeadProvider {
  async send(lead: Lead): Promise<LeadResult> {
    if (process.env.NODE_ENV === 'production') {
      console.info('[lead] received', { type: lead.type, at: new Date().toISOString() });
    } else {
      console.info('[lead:dev]', {
        type: lead.type,
        name: lead.name,
        email: lead.email,
        businessName: lead.businessName,
      });
    }
    return { ok: true };
  }
}

export class WebhookProvider implements LeadProvider {
  async send(lead: Lead): Promise<LeadResult> {
    const url = assertEnv('LEAD_WEBHOOK_URL');
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...lead, company_website: undefined }),
    });
    if (!response.ok) return { ok: false, error: 'Webhook rejected the lead.' };
    return { ok: true };
  }
}

export class GoHighLevelProvider implements LeadProvider {
  async send(lead: Lead): Promise<LeadResult> {
    const url = process.env.GHL_WEBHOOK_URL;
    if (!url) {
      throw new Error(
        'GHL_WEBHOOK_URL is not set. Create an inbound webhook in GoHighLevel and add the URL.',
      );
    }
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        businessName: lead.businessName,
        source: lead.type,
        message: lead.type === 'contact' ? lead.message : lead.challenge,
      }),
    });
    if (!response.ok) return { ok: false, error: 'GoHighLevel rejected the lead.' };
    return { ok: true };
  }
}

export class HubSpotProvider implements LeadProvider {
  async send(lead: Lead): Promise<LeadResult> {
    void lead;
    assertEnv('HUBSPOT_PORTAL_ID');
    assertEnv('HUBSPOT_FORM_GUID');
    throw new Error(
      'HubSpotProvider is stubbed. Set HUBSPOT_PORTAL_ID and HUBSPOT_FORM_GUID, then replace this throw with the Forms API submit.',
    );
  }
}

export class ResendProvider implements LeadProvider {
  async send(lead: Lead): Promise<LeadResult> {
    void lead;
    assertEnv('RESEND_API_KEY');
    assertEnv('LEAD_NOTIFY_EMAIL');
    throw new Error(
      'ResendProvider is stubbed. Set RESEND_API_KEY and LEAD_NOTIFY_EMAIL, then send the notification email.',
    );
  }
}

export function getLeadProvider(): LeadProvider {
  const name = (process.env.LEAD_PROVIDER ?? 'console').toLowerCase();
  switch (name) {
    case 'webhook':
      return new WebhookProvider();
    case 'gohighlevel':
      return new GoHighLevelProvider();
    case 'hubspot':
      return new HubSpotProvider();
    case 'resend':
      return new ResendProvider();
    default:
      return new ConsoleProvider();
  }
}
