import type { MetadataRoute } from 'next';
import { caseStudies } from '@/data/caseStudies';
import { industries } from '@/data/industries';
import { locations } from '@/data/locations';
import { publishedResources } from '@/data/resources';
import { printServices } from '@/data/printServices';
import { services } from '@/data/services';
import { site } from '@/data/site';

const SITE_LAST_MODIFIED = new Date('2026-08-29T12:00:00-07:00');

function entry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
  lastModified: Date = SITE_LAST_MODIFIED,
): MetadataRoute.Sitemap[number] {
  const url = path === '/' ? site.url : `${site.url}${path}`;
  return { url, lastModified, changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    entry('/', 1, 'weekly'),
    entry('/services', 0.9, 'monthly'),
    entry('/services/print-and-apparel', 0.8, 'monthly'),
    entry('/industries', 0.8, 'monthly'),
    entry('/work', 0.7, 'monthly'),
    entry('/resources', 0.6, 'weekly'),
    entry('/about', 0.7, 'monthly'),
    entry('/contact', 0.7, 'monthly'),
    entry('/faq', 0.7, 'monthly'),
    entry('/book-a-call', 0.9, 'monthly'),
    entry('/privacy-policy', 0.1, 'yearly'),
    entry('/terms', 0.1, 'yearly'),
    entry('/accessibility', 0.1, 'yearly'),
  ];

  const serviceEntries = [
    ...services.map((service) => entry(`/services/${service.slug}`, 0.8, 'monthly')),
    ...printServices.map((service) =>
      entry(`/services/${service.slug}`, 0.8, 'monthly'),
    ),
  ];

  const locationEntries = locations.map((location) =>
    entry(
      `/${location.slug}`,
      location.pageType === 'overview' ? 0.9 : 0.8,
      'monthly',
    ),
  );

  const industryEntries = industries.map((industry) =>
    entry(`/industries/${industry.slug}`, 0.8, 'monthly'),
  );

  const workEntries = caseStudies
    .filter((study) => !study.isPlaceholder)
    .map((study) => entry(`/work/${study.slug}`, 0.8, 'monthly'));

  const resourceEntries = publishedResources.map((resource) =>
    entry(
      `/resources/${resource.slug}`,
      0.6,
      'monthly',
      new Date(`${resource.dateModified}T12:00:00-07:00`),
    ),
  );

  return [
    ...staticEntries,
    ...serviceEntries,
    ...locationEntries,
    ...industryEntries,
    ...workEntries,
    ...resourceEntries,
  ];
}
