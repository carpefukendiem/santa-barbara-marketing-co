import { writeFileSync } from 'node:fs'
import {
  sitewideGraph,
  personSchema,
  localLeadPlanSchema,
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
  businessSchema,
  organizationSchema,
} from '../lib/schema.ts'
import { pricingPlan } from '../data/pricing.ts'
import { ADDONS } from '../lib/addons.ts'
import {
  organizationSameAsLinks,
  founderSameAsLinks,
} from '../data/site.ts'

const samples = {
  sitewide: sitewideGraph(),
  person: personSchema(),
  offer: localLeadPlanSchema(),
  article: articleSchema({
    headline: 'Local SEO in Santa Barbara',
    description: 'How local search works',
    url: 'https://www.sbmc.io/resources/local-seo-santa-barbara',
    datePublished: '2026-03-01',
    dateModified: '2026-03-01',
  }),
  breadcrumb: breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
  ]),
  faq: faqPageSchema([{ question: 'Q?', answer: 'A.' }]),
  service: serviceSchema({
    name: 'Local SEO',
    serviceType: 'Local SEO',
    description: 'Maps and local pages',
    url: 'https://www.sbmc.io/services/local-seo',
  }),
  webpage: webPageSchema({ path: '/pricing', name: 'Pricing' }),
  aboutPage: webPageSchema({ path: '/about', name: 'About', type: 'AboutPage' }),
  business: businessSchema(),
}

const errors: string[] = []
const allowedPrices = new Set([
  pricingPlan.monthlyAmount.toFixed(2),
  pricingPlan.annualAmount.toFixed(2),
  ADDONS.voice_ai.monthlyAmount.toFixed(2),
  ADDONS.chat_ai.monthlyAmount.toFixed(2),
])

for (const [name, node] of Object.entries(samples)) {
  const blob = JSON.stringify(node)
  try {
    JSON.parse(blob)
  } catch {
    errors.push(`${name}: invalid JSON`)
  }
  if (blob.includes('streetAddress')) errors.push(`${name}: streetAddress`)
  if (blob.includes('aggregateRating')) errors.push(`${name}: aggregateRating`)
  if (blob.includes('Suite') || blob.includes('Yanonali')) {
    errors.push(`${name}: street leak`)
  }
  if (/TODO_METRIC|TODO_CONFIRM/.test(blob)) {
    errors.push(`${name}: TODO placeholder`)
  }
}

const org = organizationSchema()
if (JSON.stringify(org.sameAs) !== JSON.stringify(organizationSameAsLinks())) {
  errors.push('org sameAs mismatch')
}
const person = personSchema()
if (JSON.stringify(person.sameAs) !== JSON.stringify(founderSameAsLinks())) {
  errors.push('person sameAs mismatch')
}
for (const m of JSON.stringify(samples.offer).matchAll(/"price":"(\d+\.\d{2})"/g)) {
  if (!allowedPrices.has(m[1])) errors.push(`unexpected price ${m[1]}`)
}
const area = (samples.business.areaServed as unknown[]) || []
if (area.length < 16) errors.push(`areaServed too small: ${area.length}`)

let remote: Record<string, unknown> = { status: 'skipped' }
try {
  const body = new URLSearchParams()
  body.set('newCode', JSON.stringify(samples.sitewide, null, 2))
  const res = await fetch('https://validator.schema.org/validate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      Accept: 'application/json',
    },
    body,
  })
  const text = await res.text()
  remote = { status: res.status, ok: res.ok, bodyPreview: text.slice(0, 2500) }
  if (!res.ok) errors.push(`schema.org validator HTTP ${res.status}`)
} catch (e) {
  remote = { status: 'error', detail: String(e) }
}

const report = {
  ok: errors.length === 0,
  errors,
  pageTypesValidated: Object.keys(samples),
  areaServedCount: area.length,
  orgSameAs: org.sameAs,
  personSameAs: person.sameAs,
  remoteValidator: remote,
}
writeFileSync(
  '/opt/cursor/artifacts/schema-validation.json',
  JSON.stringify(report, null, 2),
)
console.log(JSON.stringify(report, null, 2))
if (errors.length) process.exit(1)
