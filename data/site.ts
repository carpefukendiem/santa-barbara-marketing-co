import { SITE_URL } from '@/lib/siteUrl'

export const site = {
  name: 'Santa Barbara Marketing Co.',
  shortName: 'SBMC',
  url: SITE_URL,
  tagline: 'Local Businesses. Lasting Growth.',
  description:
    'Santa Barbara Marketing Co. is a full-service digital marketing agency serving Santa Barbara, Goleta, Montecito, and Carpinteria. Local SEO, websites, Google Ads, and follow-up systems for 805 businesses.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'info@sbmc.io',
  phone: process.env.NEXT_PUBLIC_PHONE ?? process.env.NEXT_PUBLIC_CONTACT_PHONE ?? null,
  areaServed: [
    'Santa Barbara',
    'Goleta',
    'Montecito',
    'Carpinteria',
    'Summerland',
    'Santa Barbara County',
  ],
  geo: { lat: 34.4208, lng: -119.6982 },
  social: {
    instagram: null as string | null,
    linkedin: null as string | null,
    youtube: null as string | null,
  },
  founded: '2026',
} as const;

export type Site = typeof site;
