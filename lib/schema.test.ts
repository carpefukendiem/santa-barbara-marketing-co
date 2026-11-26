import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { ADDONS } from '@/lib/addons'
import { pricingPlan } from '@/data/pricing'
import { ppcManagement } from '@/data/ppc-management'
import {
  articleSchema,
  businessSchema,
  localLeadPlanSchema,
  organizationSchema,
  personSchema,
  ppcManagementServiceSchema,
  sitewideGraph,
  websiteSchema,
} from '@/lib/schema'
import {
  founderSameAsLinks,
  organizationSameAsLinks,
} from '@/data/site'

function collect(value: unknown, out: unknown[] = []): unknown[] {
  out.push(value)
  if (Array.isArray(value)) {
    for (const item of value) collect(item, out)
    return out
  }
  if (value && typeof value === 'object') {
    for (const child of Object.values(value as Record<string, unknown>)) {
      collect(child, out)
    }
  }
  return out
}

function json(value: unknown): string {
  return JSON.stringify(value)
}

describe('schema hard rules', () => {
  it('emits one business @id and no streetAddress or aggregateRating', () => {
    const graph = sitewideGraph()
    const blob = json(graph)
    assert.equal(blob.includes('streetAddress'), false)
    assert.equal(blob.includes('aggregateRating'), false)
    assert.equal(blob.includes('Suite 150'), false)
    assert.equal(blob.includes('Yanonali'), false)

    const nodes = (graph['@graph'] as Array<Record<string, unknown>>) ?? []
    const businessNodes = nodes.filter((node) => {
      const id = String(node['@id'] ?? '')
      return id.endsWith('#business') || id.endsWith('#localbusiness')
    })
    assert.equal(businessNodes.length, 1)
    assert.equal(String(businessNodes[0]['@id']).endsWith('#business'), true)
  })

  it('uses approved Organization and Person sameAs only', () => {
    const org = organizationSchema()
    assert.deepEqual(org.sameAs, organizationSameAsLinks())
    assert.equal(
      (org.sameAs as string[]).some((url) => /instagram|tiktok|yelp|maps\.google|x\.com|twitter/i.test(url)),
      false,
    )

    const business = businessSchema()
    assert.deepEqual(business.sameAs, organizationSameAsLinks())
    assert.deepEqual(business.sameAs, org.sameAs)

    const person = personSchema()
    assert.deepEqual(person.sameAs, founderSameAsLinks())
    assert.deepEqual(person.sameAs, ['https://www.linkedin.com/in/rubenruiz/'])
  })

  it('prices Offers from pricing.ts and addons only', () => {
    const offer = localLeadPlanSchema()
    const blob = json(offer)
    const allowed = [
      pricingPlan.monthlyAmount.toFixed(2),
      pricingPlan.annualAmount.toFixed(2),
      ADDONS.voice_ai.monthlyAmount.toFixed(2),
      ADDONS.chat_ai.monthlyAmount.toFixed(2),
      ppcManagement.monthlyAmount.toFixed(2),
    ]
    const priceMatches = blob.match(/"price":"(\d+\.\d{2})"/g) ?? []
    assert.ok(priceMatches.length >= 5)
    for (const match of priceMatches) {
      const amount = match.replace('"price":"', '').replace('"', '')
      assert.ok(allowed.includes(amount), `unexpected price ${amount}`)
    }
  })

  it('PPC management Service Offer uses $150/mo and unitCode MON', () => {
    const schema = ppcManagementServiceSchema()
    const offer = schema.offers as Record<string, unknown>
    assert.equal(offer.price, ppcManagement.monthlyAmount.toFixed(2))
    assert.equal(offer.priceCurrency, 'USD')
    const spec = offer.priceSpecification as Record<string, unknown>
    assert.equal(spec.unitCode, 'MON')
    assert.equal(spec.unitText, 'month')
    const blob = json(schema)
    assert.match(blob, /Ad spend is paid directly to Google/)
    assert.match(blob, /\$500 per month minimum/)
    assert.equal(blob.includes(ppcManagement.goLivePromise), false)
  })

  it('articles author Ruben Person @id', () => {
    const article = articleSchema({
      headline: 'Test',
      description: 'Test description',
      url: 'https://www.sbmc.io/resources/test',
      datePublished: '2026-01-01',
      dateModified: '2026-01-01',
    })
    assert.deepEqual(article.author, {
      '@id': 'https://www.sbmc.io/about#ruben-ruiz',
    })
  })

  it('business schema is ProfessionalService service-area shape', () => {
    const business = businessSchema()
    const types = business['@type']
    assert.ok(Array.isArray(types))
    assert.ok(types.includes('ProfessionalService'))
    assert.ok(types.includes('LocalBusiness'))
    assert.equal('geo' in business, false)
    assert.equal('serviceArea' in business, false)
    const address = business.address as Record<string, unknown>
    assert.equal('streetAddress' in address, false)
    assert.equal(address.addressLocality, 'Santa Barbara')
  })

  it('website schema references organization', () => {
    const website = websiteSchema()
    assert.deepEqual(website.publisher, {
      '@id': 'https://www.sbmc.io/#organization',
    })
  })

  it('JSON-LD round-trips through JSON.parse', () => {
    for (const node of collect(sitewideGraph())) {
      if (node && typeof node === 'object' && !Array.isArray(node)) {
        const parsed = JSON.parse(JSON.stringify(node))
        assert.equal(typeof parsed, 'object')
      }
    }
  })
})
