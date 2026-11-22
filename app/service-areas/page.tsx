import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { AnswerFirst } from '@/components/seo/AnswerFirst'
import { JsonLd } from '@/components/seo/JsonLd'
import { CtaBand } from '@/components/sections/CtaBand'
import { overviewLocations, locations } from '@/data/locations'
import { site } from '@/data/site'
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/utils'

export const metadata = buildMetadata({
  title: 'Service Areas in Santa Barbara County',
  description:
    'Santa Barbara Marketing Co serves all of Santa Barbara County: Santa Barbara, Goleta, Montecito, Carpinteria, Santa Maria, Lompoc, and the Santa Ynez Valley.',
  path: '/service-areas',
})

const faqs = [
  {
    question: 'Do you only work in downtown Santa Barbara?',
    answer:
      'No. We are a service-area business covering Santa Barbara County, including North County (Santa Maria, Lompoc, Orcutt, Guadalupe) and the Santa Ynez Valley (Solvang, Buellton, Santa Ynez, Los Olivos, Ballard, Los Alamos).',
  },
  {
    question: 'Do you have a walk-in office?',
    answer:
      'No. We are a service-area business. Reach us by phone at (805) 307-7600 or email info@sbmc.io, or book a 30-Minute Call.',
  },
]

const cityServicePages = locations.filter(
  (location) => location.pageType !== 'overview',
)

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: '/service-areas',
            name: 'Service Areas in Santa Barbara County',
            description:
              'Marketing for businesses across Santa Barbara County.',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Service Areas', path: '/service-areas' },
          ]),
          serviceSchema({
            name: 'Digital marketing across Santa Barbara County',
            serviceType: 'Digital marketing',
            description:
              'Websites, local SEO, Google Business Profile, ads, and CRM follow-up for Santa Barbara County businesses.',
            url: absoluteUrl('/service-areas'),
          }),
          faqPageSchema(faqs),
        ]}
      />
      <PageHero
        variant="simple"
        eyebrow="Service areas"
        title="We serve all of Santa Barbara County"
        accent="Santa Barbara County"
        subhead="From the South Coast to Santa Maria, Lompoc, and the Santa Ynez Valley. One agency, honest geography."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas' },
        ]}
      />
      <AnswerFirst
        answer="Santa Barbara Marketing Co is based in Santa Barbara and serves businesses across Santa Barbara County. City hubs and service pages cover Santa Barbara, Goleta, Montecito, Carpinteria, Santa Maria, Lompoc, and the Santa Ynez Valley. The Local Lead Plan is $297/mo."
        facts={[
          { label: 'Base', value: 'Santa Barbara, CA' },
          { label: 'Coverage', value: 'Santa Barbara County' },
          { label: 'Plan', value: '$297/mo or $2,970/yr' },
          { label: 'Contact', value: '(805) 307-7600' },
        ]}
      />
      <Section bg="white">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-navy">City hubs</h2>
              <p className="mt-3 max-w-prose text-ink/80">
                Live pages with local detail for markets we write about as
                separate places, not swapped city names.
              </p>
              <ul className="mt-6 space-y-3">
                {overviewLocations.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/${location.slug}`}
                      className="text-lg text-navy underline-offset-4 hover:underline"
                    >
                      {location.city}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="mt-10 font-display text-2xl text-navy">
                City service pages
              </h3>
              <ul className="mt-4 space-y-2">
                {cityServicePages.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/${location.slug}`}
                      className="text-navy underline-offset-4 hover:underline"
                    >
                      {location.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl text-navy">
                County coverage
              </h2>
              <p className="mt-3 max-w-prose text-ink/80">
                Places we serve as a service-area business. Hub pages link above
                for the markets we have written in full. Smaller places in the
                list are covered from those hubs and from the county offer.
              </p>
              <ul className="mt-6 columns-1 gap-8 sm:columns-2">
                {site.areaServed
                  .filter((place) => place.type !== 'AdministrativeArea')
                  .map((place) => {
                    const hub = overviewLocations.find((location) => {
                      const city = place.name.replace(', CA', '')
                      return (
                        location.city === city ||
                        (city === 'Solvang' &&
                          location.slug ===
                            'santa-ynez-valley-digital-marketing') ||
                        (city === 'Buellton' &&
                          location.slug ===
                            'santa-ynez-valley-digital-marketing') ||
                        (city === 'Santa Ynez' &&
                          location.slug ===
                            'santa-ynez-valley-digital-marketing') ||
                        (city === 'Los Olivos' &&
                          location.slug ===
                            'santa-ynez-valley-digital-marketing') ||
                        (city === 'Orcutt' &&
                          location.slug === 'santa-maria-digital-marketing') ||
                        (city === 'Guadalupe' &&
                          location.slug === 'santa-maria-digital-marketing')
                      )
                    })
                    return (
                      <li
                        key={place.name}
                        className="mb-2 break-inside-avoid text-ink"
                      >
                        {hub ? (
                          <Link
                            href={`/${hub.slug}`}
                            className="text-navy underline-offset-4 hover:underline"
                          >
                            {place.name.replace(', CA', '')}
                          </Link>
                        ) : (
                          place.name.replace(', CA', '')
                        )}
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>
      <CtaBand
        heading="Tell us where you actually win work."
        subline="A 30-Minute Call starts with geography you can defend, not a wish list."
      />
    </>
  )
}
