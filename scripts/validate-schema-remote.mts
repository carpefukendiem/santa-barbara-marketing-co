import { writeFileSync } from 'node:fs'
import {
  sitewideGraph,
  localLeadPlanSchema,
  personSchema,
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from '../lib/schema.ts'

const graphs: Record<string, unknown> = {
  sitewide: sitewideGraph(),
  offer: localLeadPlanSchema(),
  person: personSchema(),
  article: articleSchema({
    headline: 'Local SEO in Santa Barbara',
    description: 'How local search works',
    url: 'https://www.sbmc.io/resources/local-seo-santa-barbara',
    datePublished: '2026-03-01',
    dateModified: '2026-03-01',
  }),
  breadcrumb: breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]),
  faq: faqPageSchema([{ question: 'Example?', answer: 'Yes.' }]),
  service: serviceSchema({
    name: 'Local SEO',
    serviceType: 'Local SEO',
    description: 'Maps work',
    url: 'https://www.sbmc.io/services/local-seo',
  }),
  webpage: webPageSchema({ path: '/pricing', name: 'Pricing' }),
}

const results: Record<string, unknown> = {}

for (const [name, node] of Object.entries(graphs)) {
  const html = `<!doctype html><html><head><script type="application/ld+json">${JSON.stringify(node)}</script></head><body><h1>${name}</h1></body></html>`
  const body = new URLSearchParams({ html })
  try {
    const res = await fetch('https://validator.schema.org/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        Accept: 'application/json',
      },
      body,
    })
    const text = await res.text()
    const cleaned = text.replace(/^\)\]\}'\n/, '')
    let parsed: unknown = cleaned
    try {
      parsed = JSON.parse(cleaned)
    } catch {
      // keep string
    }
    if (parsed && typeof parsed === 'object') {
      const p = parsed as Record<string, unknown>
      results[name] = {
        status: res.status,
        totalNumErrors: p.totalNumErrors,
        totalNumWarnings: p.totalNumWarnings,
        numObjects: p.numObjects,
        errors: Array.isArray(p.errors) ? p.errors.slice(0, 8) : p.errors,
      }
    } else {
      results[name] = {
        status: res.status,
        bodyPreview: String(parsed).slice(0, 500),
      }
    }
  } catch (e) {
    results[name] = { error: String(e) }
  }
}

writeFileSync(
  '/opt/cursor/artifacts/schema-org-remote.json',
  JSON.stringify(results, null, 2),
)
console.log(JSON.stringify(results, null, 2))
