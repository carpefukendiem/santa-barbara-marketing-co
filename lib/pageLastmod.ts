import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { industries } from '@/data/industries'
import { locations } from '@/data/locations'
import { publishedResources } from '@/data/resources'
import { printServices } from '@/data/printServices'
import { services } from '@/data/services'

type LastmodMap = Record<string, string>

let cached: LastmodMap | null = null

function loadMap(): LastmodMap {
  if (cached) return cached
  const path = join(process.cwd(), 'data/page-lastmod.json')
  if (!existsSync(path)) {
    cached = {}
    return cached
  }
  cached = JSON.parse(readFileSync(path, 'utf8')) as LastmodMap
  return cached
}

function fromIsoDate(isoDate: string): Date {
  if (isoDate.includes('T')) return new Date(isoDate)
  return new Date(`${isoDate}T12:00:00-07:00`)
}

/**
 * Real lastmod for a sitemap path.
 * Prefer an explicit per-URL stamp in data/page-lastmod.json, then per-entry
 * dateModified on the content object, then file-level stamps. Never use build time.
 */
export function pageLastModified(path: string): Date {
  const map = loadMap()
  if (map[path]) return new Date(map[path])

  if (path.startsWith('/resources/')) {
    const slug = path.slice('/resources/'.length)
    const resource = publishedResources.find((item) => item.slug === slug)
    if (resource?.dateModified) {
      return fromIsoDate(resource.dateModified)
    }
  }

  if (path.startsWith('/services/')) {
    const slug = path.slice('/services/'.length)
    const service = services.find((item) => item.slug === slug)
    if (service?.dateModified) {
      return fromIsoDate(service.dateModified)
    }
    const printService = printServices.find((item) => item.slug === slug)
    if (printService && 'dateModified' in printService) {
      const value = (printService as { dateModified?: string }).dateModified
      if (value) return fromIsoDate(value)
    }
  }

  if (path.startsWith('/industries/')) {
    const slug = path.slice('/industries/'.length)
    const industry = industries.find((item) => item.slug === slug)
    if (industry?.dateModified) {
      return fromIsoDate(industry.dateModified)
    }
  }

  const location = locations.find((item) => `/${item.slug}` === path)
  if (location?.dateModified) {
    return fromIsoDate(location.dateModified)
  }

  if (path.startsWith('/services/')) {
    const fileKey = path.includes('print') ||
      ['screen-printing', 'custom-apparel', 'promotional-products', 'team-stores'].some(
        (slug) => path.endsWith(slug),
      )
      ? '__file__:data/printServices.ts'
      : '__file__:data/services.ts'
    if (map[fileKey]) return new Date(map[fileKey])
  }
  if (
    path.startsWith('/santa-') ||
    path.startsWith('/goleta-') ||
    path.startsWith('/montecito-') ||
    path.startsWith('/carpinteria-') ||
    path.startsWith('/lompoc-')
  ) {
    if (map['__file__:data/locations.ts']) {
      return new Date(map['__file__:data/locations.ts'])
    }
  }
  if (path.startsWith('/industries/')) {
    if (map['__file__:data/industries.ts']) {
      return new Date(map['__file__:data/industries.ts'])
    }
  }
  if (path.startsWith('/work/')) {
    if (map['__file__:data/caseStudies.ts']) {
      return new Date(map['__file__:data/caseStudies.ts'])
    }
  }

  return new Date('2026-08-29T12:00:00-07:00')
}
