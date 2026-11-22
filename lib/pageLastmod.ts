import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { publishedResources } from '@/data/resources'

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

/**
 * Real lastmod for a sitemap path: content date when present, else git-derived
 * map from data/page-lastmod.json (not build time for every URL).
 */
export function pageLastModified(path: string): Date {
  if (path.startsWith('/resources/')) {
    const slug = path.slice('/resources/'.length)
    const resource = publishedResources.find((item) => item.slug === slug)
    if (resource?.dateModified) {
      return new Date(`${resource.dateModified}T12:00:00-07:00`)
    }
  }

  const map = loadMap()
  if (map[path]) return new Date(map[path])

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
    path.startsWith('/carpinteria-')
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

  // Conservative fallback: Prefer content-era date over "now" so every URL
  // does not share the build timestamp.
  return new Date('2026-08-29T12:00:00-07:00')
}
