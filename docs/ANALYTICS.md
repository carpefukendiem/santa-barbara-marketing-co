# Analytics events

`lib/analytics.ts` pushes to `window.dataLayer` when it exists and no-ops otherwise. GTM loads only if `NEXT_PUBLIC_GTM_ID` is set. GA4 (`NEXT_PUBLIC_GA_ID`) loads only if GTM is not set.

## Events

| Event | When | Suggested GA4 conversion |
| --- | --- | --- |
| `growth_plan_click` | Header / CTA band / sticky bar click toward `/free-growth-plan` | Mark as conversion after you confirm the click is not duplicated with form submit |
| `growth_plan_submit` | Growth Plan form success | Primary conversion |
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

Import `growth_plan_submit` (and `phone_click` if you add a number) from GA4 into Google Ads as conversions. Do not double-count by also firing a Google Ads tag on the same submit until you have checked the Ads UI.

`NEXT_PUBLIC_GOOGLE_ADS_ID` is reserved for a future gtag conversion snippet. Prefer GTM so tags stay out of the repo.
