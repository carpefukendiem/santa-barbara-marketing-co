# SBMC Production Build Plan

Execute in the order below. Commit after each phase. Do not ship scaffolding.

## Ground truth

- Repo root is the app root. One existing commit (`first commit`). Preserve git history.
- 27 WebP brand assets live at `public/images/raw/` (copied from `sbmc-individual-webp-assets/`).
- Photography is low-resolution; icons are opaque RGB. Icons are rebuilt as inline SVG. Photos ship with softness mitigation and a replacement doc.

## Phases

0. Init Next.js in place, `.gitignore`, `.env.example`, asset pipeline (alpha strip, logo derivatives, photos copy), 15 brand SVG icons, favicons, OG image.
1. Design tokens, fonts, `globals.css`, UI primitives, `lib/utils`, `lib/seo`, `lib/schema`.
2. Layout shell: Header, MegaMenu, MobileNav, Footer, StickyMobileCta, Breadcrumbs, SkipLink.
3. All `data/` files with real written content. Placeholder-aware testimonials, case studies, trust.
4. Homepage and conversion sections.
5. Services overview + 12 service pages.
6. Seven location pages (anti-doorway: unique copy per city).
7. Industries, work system (empty-state aware), resources + 6 launch articles.
8. Forms, `/api/lead`, providers, analytics, growth plan LP, contact, FAQ.
9. Technical SEO: metadata everywhere, sitemap, robots, manifest, schema.
10. Legal pages, 404, accessibility pass.
11. Performance pass, image/font optimization, real self-metrics.
12. Full QA per spec Section 25. README + remaining docs.

## Hard rules

- Never invent proof (testimonials, ratings, clients, metrics, awards).
- Type everything. Lint and build before each phase commit.
- Runtime deps stay under 10 (plus listed form/SEO packages).
- `'use client'` only for mobile nav, FAQ accordion, forms, sticky-header scroll, mega-menu.
