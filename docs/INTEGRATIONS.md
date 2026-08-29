# Lead integrations

All forms POST to `/api/lead`. The handler validates with the same Zod schemas as the client (`lib/schemas.ts`), rejects honeypot fills and submissions faster than 3 seconds, and rate-limits by IP in memory (`lib/rateLimit.ts`). For multiple Vercel instances, swap that file for Upstash Redis using the same `rateLimit(key)` signature.

Never log emails, phone numbers, or messages in production. Provider API keys stay server-side.

## `LEAD_PROVIDER`

| Value | Class | Required env | Notes |
| --- | --- | --- | --- |
| `console` (default) | `ConsoleProvider` | none | Dev: logs name/email/business. Production: logs type and timestamp only. |
| `webhook` | `WebhookProvider` | `LEAD_WEBHOOK_URL` | JSON POST of the lead (honeypot omitted). |
| `gohighlevel` | `GoHighLevelProvider` | `GHL_WEBHOOK_URL` | Inbound webhook in GHL. `GHL_API_KEY` reserved for a future API client. |
| `hubspot` | `HubSpotProvider` | `HUBSPOT_PORTAL_ID`, `HUBSPOT_FORM_GUID` | Stub. Throws until the Forms API submit is implemented. |
| `resend` | `ResendProvider` | `RESEND_API_KEY`, `LEAD_NOTIFY_EMAIL` | Stub. Throws until the notification email is implemented. |

## Recommended launch path

1. Keep `LEAD_PROVIDER=console` in preview until you have confirmed submissions in the browser.
2. For GoHighLevel, create an inbound webhook, set `GHL_WEBHOOK_URL`, and set `LEAD_PROVIDER=gohighlevel`.
3. Add `NEXT_PUBLIC_CONTACT_EMAIL` and `NEXT_PUBLIC_CONTACT_PHONE` when they are real. Phone UI is hidden until the phone env is set.

See `.env.example` for the full list.
