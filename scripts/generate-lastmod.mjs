#!/usr/bin/env node
/**
 * Writes data/page-lastmod.json from git last-commit dates for route source files.
 * Run locally (or in CI with full history) before committing content changes.
 */
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

/** path in sitemap -> repo-relative source files that own the content */
const ROUTE_SOURCES = {
  '/': ['app/page.tsx', 'data/homepage-variants.ts', 'components/sections/HomePageContent.tsx'],
  '/services': ['app/services/page.tsx', 'data/services.ts'],
  '/services/print-and-apparel': ['data/printServices.ts'],
  '/industries': ['app/industries/page.tsx', 'data/industries.ts'],
  '/work': ['app/work/page.tsx', 'data/caseStudies.ts'],
  '/resources': ['app/resources/page.tsx', 'data/resources.ts'],
  '/pricing': ['app/pricing/page.tsx', 'data/pricing.ts', 'lib/addons.ts'],
  '/get-started': ['app/get-started/page.tsx'],
  '/local-lead-plan': ['app/local-lead-plan/page.tsx'],
  '/about': ['app/about/page.tsx'],
  '/about/ruben-ruiz': ['app/about/ruben-ruiz/page.tsx'],
  '/process': ['app/process/page.tsx'],
  '/contact': ['app/contact/page.tsx'],
  '/faq': ['app/faq/page.tsx', 'data/faqs.ts'],
  '/book-a-call': ['app/book-a-call/page.tsx'],
  '/privacy-policy': ['app/privacy-policy/page.tsx'],
  '/terms': ['app/terms/page.tsx'],
  '/accessibility': ['app/accessibility/page.tsx'],
  '/service-areas': ['app/service-areas/page.tsx', 'data/site.ts'],
}

function gitDate(files) {
  let latest = null
  for (const file of files) {
    try {
      const out = execFileSync(
        'git',
        ['log', '-1', '--format=%cI', '--', file],
        { cwd: root, encoding: 'utf8' },
      ).trim()
      if (!out) continue
      const d = new Date(out)
      if (!latest || d > latest) latest = d
    } catch {
      // ignore missing history
    }
  }
  return latest ? latest.toISOString() : null
}

function main() {
  const map = {}
  for (const [route, files] of Object.entries(ROUTE_SOURCES)) {
    const iso = gitDate(files)
    if (iso) map[route] = iso
  }

  // Dynamic content collections: one lastmod per slug file set
  const dynamic = [
    ['data/services.ts', '/services/'],
    ['data/printServices.ts', '/services/'],
    ['data/locations.ts', '/'],
    ['data/industries.ts', '/industries/'],
    ['data/caseStudies.ts', '/work/'],
    ['data/resources.ts', '/resources/'],
  ]
  for (const [file] of dynamic) {
    const iso = gitDate([file])
    if (iso) map[`__file__:${file}`] = iso
  }

  const outPath = join(root, 'data/page-lastmod.json')
  writeFileSync(outPath, `${JSON.stringify(map, null, 2)}\n`)
  console.log(`Wrote ${outPath} (${Object.keys(map).length} keys)`)
}

main()
