import { ADDONS } from '@/lib/addons';
import { pricingPlan } from '@/data/pricing';
import {
  founderSameAsLinks,
  organizationSameAsLinks,
  site,
} from '@/data/site';
import { absoluteUrl } from './utils';

export type JsonLd = Record<string, unknown>;

export function organizationId(): string {
  return `${site.url}/#organization`;
}

export function businessId(): string {
  return `${site.url}/#business`;
}

export function websiteId(): string {
  return `${site.url}/#website`;
}

export function personId(): string {
  return `${site.url}/about#ruben-ruiz`;
}

export function localLeadPlanId(): string {
  return `${site.url}/pricing#local-lead-plan`;
}

export function offerCatalogId(): string {
  return `${site.url}/pricing#catalog`;
}

function postalAddress(): JsonLd {
  return {
    '@type': 'PostalAddress',
    addressLocality: site.address.addressLocality,
    addressRegion: site.address.addressRegion,
    postalCode: site.address.postalCode,
    addressCountry: site.address.addressCountry,
  };
}

function areaServedNodes(
  places: ReadonlyArray<{ type: string; name: string }> = site.areaServed,
): JsonLd[] {
  return places.map((place) => ({
    '@type': place.type,
    name: place.name,
  }));
}

function reserveAction(): JsonLd {
  return {
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
  };
}

/** Organization node. Stable @id referenced site-wide. */
export function organizationSchema(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': organizationId(),
    name: site.name,
    alternateName: [...site.alternateNames],
    url: site.url,
    logo: absoluteUrl('/images/brand/sbmc-logo.png'),
    email: site.email,
    telephone: site.phone,
    foundingDate: site.founded,
    founder: { '@id': personId() },
    sameAs: organizationSameAsLinks(),
    potentialAction: reserveAction(),
  };
}

/**
 * Single ProfessionalService / LocalBusiness entity for the agency.
 * Service-area business: city-level address only, full county areaServed.
 */
export function businessSchema(): JsonLd {
  return {
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': businessId(),
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: absoluteUrl('/images/brand/og-default.png'),
    logo: absoluteUrl('/images/brand/sbmc-logo.png'),
    priceRange: `$${pricingPlan.monthlyAmount}/mo`,
    knowsLanguage: ['en', 'es'],
    parentOrganization: { '@id': organizationId() },
    address: postalAddress(),
    areaServed: areaServedNodes(),
    knowsAbout: [
      'Local SEO',
      'Google Business Profile',
      'Website design',
      'Google Ads',
      'Meta ads',
      'CRM and marketing automation',
      'E-commerce websites',
    ],
    hasOfferCatalog: { '@id': offerCatalogId() },
    potentialAction: reserveAction(),
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': websiteId(),
    url: site.url,
    name: site.name,
    inLanguage: 'en-US',
    publisher: { '@id': organizationId() },
    description: site.description,
  };
}

/** Sitewide graph for layout / SiteChrome (every public page). */
export function sitewideGraph(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema(), businessSchema(), websiteSchema()],
  };
}

export function personSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId(),
    name: site.founder.name,
    jobTitle: site.founder.jobTitle,
    worksFor: { '@id': organizationId() },
    knowsLanguage: ['en', 'es'],
    description: site.founder.description,
    url: absoluteUrl('/about'),
    sameAs: founderSameAsLinks(),
  };
}

function money(amount: number): string {
  return amount.toFixed(2);
}

/** The Local Lead Plan Service + Offers (monthly / yearly) and AI add-on Offers. */
export function localLeadPlanSchema(): JsonLd {
  const monthly = money(pricingPlan.monthlyAmount);
  const yearly = money(pricingPlan.annualAmount);
  const voice = money(ADDONS.voice_ai.monthlyAmount);
  const chat = money(ADDONS.chat_ai.monthlyAmount);

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': localLeadPlanId(),
    name: pricingPlan.name,
    serviceType:
      'Local marketing system: website, local SEO, Google Business Profile, full CRM and follow-up',
    provider: { '@id': businessId() },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Santa Barbara County, CA',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Monthly',
        price: monthly,
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: monthly,
          priceCurrency: 'USD',
          billingDuration: 'P1M',
          unitText: 'month',
        },
        url: absoluteUrl('/pricing'),
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Yearly (2 months free)',
        price: yearly,
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: yearly,
          priceCurrency: 'USD',
          billingDuration: 'P1Y',
          unitText: 'year',
        },
        url: absoluteUrl('/pricing'),
        availability: 'https://schema.org/InStock',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      '@id': offerCatalogId(),
      name: 'Add-ons',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: ADDONS.voice_ai.name },
          price: voice,
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: voice,
            priceCurrency: 'USD',
            billingDuration: 'P1M',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: ADDONS.chat_ai.name },
          price: chat,
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: chat,
            priceCurrency: 'USD',
            billingDuration: 'P1M',
          },
        },
      ],
    },
  };
}

export function webPageSchema(input: {
  path: string;
  name: string;
  description?: string;
  dateModified?: string;
  inLanguage?: string;
  type?: 'WebPage' | 'AboutPage';
}): JsonLd {
  const url = absoluteUrl(input.path);
  return {
    '@context': 'https://schema.org',
    '@type': input.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: input.name,
    ...(input.description ? { description: input.description } : {}),
    inLanguage: input.inLanguage ?? 'en-US',
    isPartOf: { '@id': websiteId() },
    about: { '@id': businessId() },
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
  };
}

export function serviceSchema(input: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
  areaServed?: ReadonlyArray<{ type: string; name: string }>;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url: input.url,
    provider: { '@id': businessId() },
    areaServed: areaServedNodes(input.areaServed ?? site.areaServed),
    offers: { '@id': localLeadPlanId() },
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
    author: { '@id': personId() },
    publisher: { '@id': organizationId() },
    image: input.image ?? absoluteUrl('/images/brand/og-default.png'),
    mainEntityOfPage: input.url,
  };
}

/** @deprecated Use businessSchema / sitewideGraph. Kept as alias during migration. */
export function localBusinessSchema(): JsonLd {
  return businessSchema();
}

/** @deprecated Prefer serviceSchema + sitewide business @id. */
export function professionalServiceSchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
}): JsonLd {
  return serviceSchema({
    name: input.name,
    serviceType: 'Digital marketing',
    description: input.description,
    url: input.url,
  });
}
