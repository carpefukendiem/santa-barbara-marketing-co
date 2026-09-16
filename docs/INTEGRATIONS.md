# Lead integrations

All contact forms POST to `/api/lead`. The handler validates with Zod (`lib/schemas.ts`), rejects honeypot fills (`company website`), rejects submissions faster than 3 seconds, and rate-limits by IP in memory (5 per minute). For multiple Vercel instances, swap `lib/rateLimit.ts` for Upstash Redis using the same `rateLimit(key)` signature.

Never log emails, phone numbers, or messages in production. Provider API keys stay server-side.

## GoHighLevel (primary)

Production builds fail if `GHL_PRIVATE_TOKEN`, `GHL_LOCATION_ID`, or `NEXT_PUBLIC_GHL_CALENDAR_ID` are missing (`VERCEL_ENV=production`).

On submit, the API upserts a contact at `POST https://services.leadconnectorhq.com/contacts/upsert` (Version `2021-07-28`) and creates an opportunity on the pipeline.

Create a custom field named `message` in the subaccount if it does not already exist. Incoming form messages are written to that field.

Tags applied:

- `website-lead`
- page slug (from the submitting path)
- interest: `interest-digital` / `interest-print` / `interest-both` / `interest-unsure`
- print service pages also receive `interest-print`

### Print pipeline stage

Create a Print stage in the subaccount pipeline. Set `GHL_PRINT_STAGE_ID` so print-tagged leads (`interest-print` or `interest-both`) land on that stage. If unset, all opportunities use `GHL_PIPELINE_STAGE_ID`.

If the GHL API errors, the lead is still acknowledged to the visitor (`{ ok: true }`) and sent to the fallback `LEAD_PROVIDER` (console, webhook, or resend).

Booking uses the LeadConnector calendar iframe on `/book-a-call` and in the desktop modal. Set calendar colors in GHL to navy `#0B1F33` and terracotta `#C4472E`.

## Fallback `LEAD_PROVIDER`

| Value | Class | Required env |
| --- | --- | --- |
| `console` (default) | `ConsoleProvider` | none |
| `webhook` | `WebhookProvider` | `LEAD_WEBHOOK_URL` |
| `resend` | `ResendProvider` | `RESEND_API_KEY`, `LEAD_NOTIFY_EMAIL` |

`NEXT_PUBLIC_PHONE` (or `NEXT_PUBLIC_CONTACT_PHONE`) renders tel links only when set. `NEXT_PUBLIC_GHL_CHAT_WIDGET_ID` loads the chat widget only when set.

See `.env.example` for the full list.
