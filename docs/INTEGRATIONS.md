# Lead integrations

All contact forms POST to `/api/lead`. The handler validates with Zod (`lib/schemas.ts`), rejects honeypot fills (`company website`), rejects submissions faster than 3 seconds, and rate-limits by IP in memory (5 per minute). For multiple Vercel instances, swap `lib/rateLimit.ts` for Upstash Redis using the same `rateLimit(key)` signature.

Never log emails, phone numbers, or messages in production. Provider API keys stay server-side.

## GoHighLevel (primary)

Set `GHL_PRIVATE_TOKEN` and `GHL_LOCATION_ID` in Vercel for CRM sync. The Santa Barbara Marketing Co. location id is `yDnbD2jIOGjslYuMeUok`. Booking uses that location’s Discovery Call calendar (`Zzp5TRRTwptdDEdra1wZ`), served on the agency widget host `link.rankingsb.com`. Override with `NEXT_PUBLIC_GHL_CALENDAR_ID` / `NEXT_PUBLIC_GHL_BOOKING_URL` if the calendar is replaced. If the iframe fails, the page links to the public scheduling URL and the contact email. Form submissions still use `LEAD_PROVIDER` when the GHL API is unset.

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

Booking uses the GoHighLevel iframe on `/book-a-call` and in the desktop modal (`https://link.rankingsb.com/widget/booking/...` plus `form_embed.js` for height). Set calendar colors in GHL to navy `#0B1F33` and terracotta `#C4472E`.

## Stripe Checkout (805 System)

`POST /api/checkout` creates a Stripe Checkout Session (`mode: subscription`) for monthly (`$297`) or annual (`$2,970`) billing. The Get Started page (`/get-started`) sends the visitor to Stripe-hosted checkout. The main pricing page stays on Book a Free Call. Fulfillment is **not** the success page. `/api/stripe/webhook` enrolls the contact in GoHighLevel when payment succeeds.

In Stripe Dashboard:

1. Add a restricted API key (`rk_`) with Checkout Sessions, Products, Prices, Customers, Subscriptions, Invoices, and Charges read/write as needed. Store it as the Vercel sensitive env var `STRIPE_SECRET_KEY`.
2. Add a webhook endpoint `https://santabarbaramarketingco.com/api/stripe/webhook` for:
   - `checkout.session.completed`
   - `checkout.session.async_payment_succeeded`
   - `checkout.session.async_payment_failed`
   - `invoice.paid`
   - `invoice.payment_failed`
   - `customer.subscription.deleted`
   - `charge.refunded`
   - `charge.dispute.created`
   - `radar.early_fraud_warning.created`
3. Put the signing secret in `STRIPE_WEBHOOK_SECRET`.
4. Enable the [Customer Portal](https://dashboard.stripe.com/settings/billing/portal) so receipts and cancellation work from Stripe’s email.
5. If you will charge across states, set up [Stripe Tax registrations](https://docs.stripe.com/billing/taxes/collect-taxes.md) before turning tax on. This integration does not enable `automatic_tax` until that is done.

Optional env:

- `STRIPE_PRICE_MONTHLY` / `STRIPE_PRICE_ANNUAL` — pin existing Price ids. If unset, the first checkout creates one Product (“The 805 System”) with monthly and annual Prices (`lookup_key` `805_system_monthly` / `805_system_annual`).
- `GHL_PAID_WORKFLOW_ID` — workflow to start after a successful first payment
- `GHL_PAID_STAGE_ID` — pipeline stage for the paid opportunity

Paid contacts receive tags `website-client`, `805-system`, `805-system-monthly` or `805-system-annual`, and `805-system-paid` (or `failed` / `cancelled` / `refunded` / `disputed`).

## Fallback `LEAD_PROVIDER`

| Value | Class | Required env |
| --- | --- | --- |
| `console` (default) | `ConsoleProvider` | none |
| `webhook` | `WebhookProvider` | `LEAD_WEBHOOK_URL` |
| `resend` | `ResendProvider` | `RESEND_API_KEY`, `LEAD_NOTIFY_EMAIL` |

`NEXT_PUBLIC_PHONE` (or `NEXT_PUBLIC_CONTACT_PHONE`) renders tel links only when set. `NEXT_PUBLIC_GHL_CHAT_WIDGET_ID` loads the chat widget only when set.

See `.env.example` for the full list.
