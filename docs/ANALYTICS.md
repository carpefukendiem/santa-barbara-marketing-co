# Analytics events

`NEXT_PUBLIC_GA4_MEASUREMENT_ID` loads GA4 with `next/script` (`afterInteractive`). If it is unset or not a `G-` id, no tag is loaded and `trackGa4` is a no-op.

| Event | When | Parameters |
| --- | --- | --- |
| `generate_lead` | Contact form success, or a booking confirmation from the calendar | `form_name` (`book_a_call` or `contact`) |
| `begin_checkout` | Checkout session created on `/get-started` | `value`, `currency` `USD`, `plan` `local_lead_plan`, `billing_interval` `month` or `year`, `items` |
| `add_to_cart` | An add-on is selected | `value` `99` or `29`, `currency` `USD`, `items` with `item_id` `voice_ai` or `chat_ai` |
| `remove_from_cart` | An add-on is cleared | same shape as `add_to_cart` |
| `purchase` | Checkout success page, once per Stripe session id | `transaction_id` (Checkout session id), `value` (amount charged today), `currency` `USD`, `items`, `addons`, `billing_interval` |

`lib/analytics.ts` still pushes the older click events to `window.dataLayer` when it exists.

GTM loads only if `NEXT_PUBLIC_GTM_ID` is set. Do not also install a second GA4 tag in GTM for the same measurement id.

## Events

| Event | When | Suggested GA4 conversion |
| --- | --- | --- |
| `book_a_call_click` | Header / CTA band / sticky bar click toward `/book-a-call` | Mark as conversion after you confirm the click is not duplicated with form submit |
| `lead_submit` | Contact form success | Primary conversion |
| `contact_form_submit` | Contact form success | Secondary conversion |
| `form_error` | Client-side submit failure | Diagnostic, not a conversion |
| `phone_click` | `tel:` click (when a number exists) | Optional call conversion |
| `email_click` | `mailto:` click | Optional |
| `service_cta_click` | Service page primary CTA | Funnel assist |
| `location_card_click` | Community card | Funnel assist |
| `case_study_click` | Work card (when case studies exist) | Funnel assist |
| `resource_click` | Resource card | Funnel assist |
| `nav_open_mobile` | Mobile menu open | Diagnostic |
| `faq_open` | Accordion open, with `question` | Diagnostic |

## Google Ads

Import `lead_submit` (and `phone_click` if you add a number) from GA4 into Google Ads as conversions. Do not double-count by also firing a Google Ads tag on the same submit until you have checked the Ads UI.

`NEXT_PUBLIC_GOOGLE_ADS_ID` is reserved for a future gtag conversion snippet. Prefer GTM so tags stay out of the repo.
