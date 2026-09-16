# Santa Barbara Marketing Co.

Production website for [santabarbaramarketingco.com](https://santabarbaramarketingco.com) — a full-service digital marketing agency serving Santa Barbara, Goleta, Montecito, and Carpinteria.

## Stack

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS v4
- React Server Components by default
- react-hook-form + Zod for forms
- lucide-react for generic UI icons only
- Deployed on Vercel

## Prerequisites

- Node 20 or 22 recommended (the project also runs on Node 21)
- npm

## Install, develop, build

```bash
npm install
npm run prepare-assets   # if you replaced files in public/images/raw/
npm run dev
npm run lint
npm run build
npm start
```

## Deploy to Vercel

Import the GitHub repo. Set `NEXT_PUBLIC_SITE_URL` to the production domain so canonicals and Open Graph URLs are correct. Add the other env vars from `.env.example` as you enable analytics and a lead provider. Do not commit `.env*.local`.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes for production | Canonical and OG base URL |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | Overrides `hello@santabarbaramarketingco.com` |
| `NEXT_PUBLIC_PHONE` | No | If unset, no tel links render. `NEXT_PUBLIC_CONTACT_PHONE` is an alias. |
| `NEXT_PUBLIC_GTM_ID` | No | Loads GTM when set |
| `NEXT_PUBLIC_GA_ID` | No | Loads GA4 only when GTM is unset |
| `GHL_PRIVATE_TOKEN` | For CRM sync | Private Integration token for contacts/opportunities |
| `GHL_LOCATION_ID` | For CRM sync | GoHighLevel subaccount location ID |
| `NEXT_PUBLIC_GHL_CALENDAR_ID` | For booking | Booking widget calendar ID |
| `GHL_PIPELINE_ID` | No | Opportunity pipeline |
| `GHL_PIPELINE_STAGE_ID` | No | Default opportunity stage |
| `GHL_PRINT_STAGE_ID` | No | Print-tagged leads use this stage when set |
| `NEXT_PUBLIC_GHL_CHAT_WIDGET_ID` | No | Chat widget; omitted when unset |
| `LEAD_PROVIDER` | No | Fallback if GHL fails: `console`, `webhook`, `resend` |
| `LEAD_WEBHOOK_URL` | If webhook | JSON POST destination |
| `RESEND_API_KEY` / `LEAD_NOTIFY_EMAIL` | If resend | Stub until implemented |

Create a custom field named `message` in the GoHighLevel subaccount if it does not exist. Booking and CRM sync stay optional until those three keys are set in Vercel.

See [docs/INTEGRATIONS.md](docs/INTEGRATIONS.md) and [docs/ANALYTICS.md](docs/ANALYTICS.md).

## How to edit content

| File | What it controls |
| --- | --- |
| `data/site.ts` | Name, URL, email, phone, geo, social, contact details |
| `data/navigation.ts` | Header, mega menu, footer, breadcrumbs |
| `data/services.ts` | Digital marketing service pages |
| `data/printServices.ts` | Print & apparel service pages and hub |
| `data/locations.ts` | City landing pages |
| `data/industries.ts` | Industry pages |
| `data/resources.ts` | Articles (`status: 'published'` vs `'planned'`) |
| `data/faqs.ts` | Shared FAQ pool |
| `data/images.ts` | Photo paths, alt, dimensions, `needsHighRes` |
| `data/testimonials.ts` | Empty until permissioned quotes exist |
| `data/caseStudies.ts` | Empty until verified work exists |
| `data/trust.ts` | Capability strip; optional “no long-term contracts” line |

## How to replace images

See [docs/ASSET-REPLACEMENT.md](docs/ASSET-REPLACEMENT.md). Put originals in `public/images/bg/` and run `npm run prepare-assets`.

Brand icons are inline SVG in `components/icons/` and should not be swapped back to the 70×70 rasters.

## How to add a service, location, industry, article, or case study

1. Add a typed object to the matching `data/` file.
2. Services, locations, and industries are picked up by `generateStaticParams`.
3. Resources need `status: 'published'` and a full `body` to appear in the sitemap and index.
4. Case studies stay unpublished until numbers are verified and the client has approved. `/work` is designed to look complete with an empty list.

## SEO

- `lib/seo.ts` `buildMetadata()` on every page
- `app/sitemap.ts` generated from data (planned articles excluded)
- `app/robots.ts`
- JSON-LD via `lib/schema.ts` and `components/seo/JsonLd.tsx`
- No `aggregateRating`, `review`, or `PostalAddress` (there is no verified street address)

## Asset pipeline

```bash
npm run prepare-assets
```

Copies photos, strips cream/white mattes from decorative overlays, circular-masks the logo, and writes favicons plus the default Open Graph image.

## Content roadmap (do not build thin doorway pages)

Planned articles (`status: 'planned'`): Santa Barbara SEO guide, local ranking factors, Google reviews, why the website is not getting leads, Goleta Local SEO, restaurant marketing, 805 home services, speed-to-lead systems.

Phase-2 locations (only when there is real demand and unique copy): Summerland, Isla Vista, Hope Ranch, Santa Ynez, Ventura, Oxnard, plus per-city SEO clones. Those are how the competition fell into doorway pages.

## Known limitations

- **Testimonials, case studies, and partner logos are empty on purpose.** Do not invent them. Sections hide until real data exists.
- **Legal pages are starter content.** They are flagged for attorney review on the pages and here.
- **Pricing figures are not published as a rate card.** Service pages explain what drives cost. Confirm ranges with the business before putting dollars on the site. Competitive research suggests publishing starting ranges is an advantage once they are real.

## Legal note

Privacy, terms, and accessibility pages open with: this is starter content and has not been reviewed by an attorney. Have it reviewed before launch.
