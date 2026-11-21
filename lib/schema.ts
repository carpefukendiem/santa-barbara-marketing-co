import { site } from '@/data/site';
import { absoluteUrl } from './utils';

export type JsonLd = Record<string, unknown>;

function organizationId(): string {
  return `${site.url}/#organization`;
}

function localBusinessId(): string {
  return `${site.url}/#localbusiness`;
}

function postalAddress(): JsonLd {
  return {
    '@type': 'PostalAddress',
    streetAddress: site.address.streetAddress,
    addressLocality: site.address.addressLocality,
    addressRegion: site.address.addressRegion,
    postalCode: site.address.postalCode,
    addressCountry: site.address.addressCountry,
  };
}

function sameAsLinks(): string[] {
  return Object.values(site.social).filter(
    (url): url is string => typeof url === 'string' && url.length > 0,
  );
}

export function organizationSchema(): JsonLd {
  const sameAs = sameAsLinks();

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationId(),
    name: site.name,
    url: site.url,
    logo: absoluteUrl('/images/brand/sbmc-logo.png'),
    email: site.email,
    telephone: site.phone,
    address: postalAddress(),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    foundingDate: site.founded,
    potentialAction: {
      '@type': 'ReserveAction',
      name: 'Book a 20-Minute Call',
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

/**
 * LocalBusiness node with verified NAP and email.
 * Never emit aggregateRating or review without permissioned data.
 * Opening hours are omitted to match main (no published office hours).
 */
export function localBusinessSchema(): JsonLd {
  const sameAs = sameAsLinks();

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': localBusinessId(),
    name: site.napName,
    url: site.url,
    logo: absoluteUrl('/images/brand/sbmc-logo.png'),
    image: absoluteUrl('/images/brand/og-default.png'),
    email: site.email,
    telephone: site.phone,
    address: postalAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: site.areaServed.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    parentOrganization: { '@id': organizationId() },
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

export function professionalServiceSchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
}): JsonLd {
  const sameAs = sameAsLinks();

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: input.name,
    url: input.url,
    logo: absoluteUrl('/images/brand/sbmc-logo.png'),
    image: input.image ?? absoluteUrl('/images/brand/og-default.png'),
    description: input.description,
    email: site.email,
    telephone: site.phone,
    address: postalAddress(),
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
      telephone: site.phone,
      areaServed: site.areaServed,
    },
    provider: { '@id': organizationId() },
    potentialAction: {
      '@type': 'ReserveAction',
      name: 'Book a 20-Minute Call',
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
