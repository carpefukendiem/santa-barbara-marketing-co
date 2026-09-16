import { site } from '@/data/site';
import { absoluteUrl } from './utils';

export type JsonLd = Record<string, unknown>;

function organizationId(): string {
  return `${site.url}/#organization`;
}

export function organizationSchema(): JsonLd {
  const sameAs = Object.values(site.social).filter(
    (url): url is string => typeof url === 'string' && url.length > 0,
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationId(),
    name: site.name,
    url: site.url,
    logo: absoluteUrl('/images/brand/sbmc-logo.png'),
    email: site.email,
    ...(site.phone ? { telephone: site.phone } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    foundingDate: site.founded,
    potentialAction: {
      '@type': 'ReserveAction',
      name: 'Book a Free Call',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${site.url}/book-a-call`,
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
    },
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { '@id': organizationId() },
    description: site.description,
  };
}

/**
 * Never emit aggregateRating, review, or PostalAddress.
 * There is no verified street address and no permissioned reviews.
 */
export function professionalServiceSchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
}): JsonLd {
  const sameAs = Object.values(site.social).filter(
    (url): url is string => typeof url === 'string' && url.length > 0,
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: input.name,
    url: input.url,
    logo: absoluteUrl('/images/brand/sbmc-logo.png'),
    image: input.image ?? absoluteUrl('/images/brand/og-default.png'),
    description: input.description,
    areaServed: site.areaServed.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: site.geo.lat,
        longitude: site.geo.lng,
      },
      geoRadius: '40234',
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: site.email,
      ...(site.phone ? { telephone: site.phone } : {}),
      areaServed: site.areaServed,
    },
    provider: { '@id': organizationId() },
    potentialAction: {
      '@type': 'ReserveAction',
      name: 'Book a Free Call',
      target: `${site.url}/book-a-call`,
    },
  };
}

export function serviceSchema(input: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url: input.url,
    provider: { '@id': organizationId() },
    areaServed: site.areaServed.map((city) => ({
      '@type': 'City',
      name: city,
    })),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageSchema(
  faqs: Array<{ question: string; answer: string }>,
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: { '@id': organizationId() },
    publisher: { '@id': organizationId() },
    image: input.image ?? absoluteUrl('/images/brand/og-default.png'),
    mainEntityOfPage: input.url,
  };
}
