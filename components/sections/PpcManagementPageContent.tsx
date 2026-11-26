import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { NumberedList } from '@/components/ui/NumberedList';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/sections/CtaBand';
import { RoiCalculator } from '@/components/ppc/RoiCalculator';
import { AnswerFirst } from '@/components/seo/AnswerFirst';
import { JsonLd } from '@/components/seo/JsonLd';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { primaryCta } from '@/data/navigation';
import { pricingPlan } from '@/data/pricing';
import { ppcManagement } from '@/data/ppc-management';
import { getResource, resourceCategoryLabels, type Resource } from '@/data/resources';
import { getService, type Service } from '@/data/services';
import {
  breadcrumbSchema,
  faqPageSchema,
  ppcManagementServiceSchema,
  webPageSchema,
} from '@/lib/schema';
import { formatUsd } from '@/lib/utils';

const googleAdsCityPages = [
  { label: 'Santa Barbara Google Ads', href: '/santa-barbara-google-ads' },
  { label: 'Goleta Google Ads', href: '/goleta-google-ads' },
] as const;

export function PpcManagementPageContent() {
  const relatedServices = ppcManagement.relatedServiceSlugs
    .map((slug) => getService(slug))
    .filter((item): item is Service => Boolean(item))
    .slice(0, 4);

  const relatedResources = ppcManagement.relatedResourceSlugs
    .map((slug) => getResource(slug))
    .filter((item): item is Resource => item != null && item.status === 'published')
    .slice(0, 4);

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: ppcManagement.shortName },
  ];

  const managementFee = formatUsd(ppcManagement.monthlyAmount);
  const minBudget = formatUsd(ppcManagement.minAdBudgetMonthly);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: ppcManagement.href,
            name: ppcManagement.metaTitle,
            description: ppcManagement.metaDescription,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: ppcManagement.shortName, path: ppcManagement.href },
          ]),
          ppcManagementServiceSchema(),
          faqPageSchema(
            ppcManagement.faqs.map((faq) => ({
              question: faq.question,
              answer: faq.answer,
            })),
          ),
        ]}
      />

      <PageHero
        variant="simple"
        eyebrow={ppcManagement.eyebrow}
        title={ppcManagement.h1}
        subhead={ppcManagement.heroLede}
        breadcrumbs={crumbs}
        primaryCta={{ href: primaryCta.href, label: primaryCta.label }}
        secondaryCta={{ href: '/pricing', label: 'See Local Lead Plan' }}
      />

      <AnswerFirst
        answer={`${ppcManagement.serviceName} is ${managementFee}/mo. You pay Google for ad spend on your own card (minimum ${minBudget}/mo) and own the account. Sold as a Local Lead Plan add-on or standalone. ${ppcManagement.seoVsAds}`}
        facts={[
          { label: 'Management', value: `${managementFee}/mo` },
          { label: 'Ad spend min', value: `${minBudget}/mo to Google` },
          { label: 'As add-on', value: 'Local Lead Plan' },
          { label: 'Standalone', value: '20-Minute Call' },
        ]}
      />

      <Section>
        <Reveal>
          <Eyebrow>The money</Eyebrow>
          <Heading className="mt-4">{ppcManagement.moneyExplanation.title}</Heading>
          <div className="mt-10 max-w-3xl space-y-6 text-stone">
            <p>{ppcManagement.moneyExplanation.management}</p>
            <p>{ppcManagement.moneyExplanation.adSpend}</p>
            <p>{ppcManagement.moneyExplanation.twoWays}</p>
            <p className="text-ink">
              <strong>{ppcManagement.goLivePromise}</strong>{' '}
              {ppcManagement.goLiveFrame}
            </p>
            <p>{ppcManagement.cancelNotice}</p>
          </div>
        </Reveal>
      </Section>

      <Section bg="sand">
        <Reveal>
          <Eyebrow>What you get</Eyebrow>
          <Heading className="mt-4">What is included</Heading>
          <p className="mt-4 max-w-2xl text-stone">
            {ppcManagement.seoVsAds} Local Services Ads are included where your
            category qualifies.{' '}
            <Link href="/services/local-service-ads" className="text-ink underline">
              Read about Local Services Ads
            </Link>
            .
          </p>
          <NumberedList
            className="mt-10"
            items={ppcManagement.included.map((item, index) => ({
              index: index + 1,
              name: item.title,
              description: item.body,
            }))}
          />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Out of scope</Eyebrow>
              <Heading className="mt-4">Not included</Heading>
              <ul className="mt-8 max-w-xl divide-y divide-rule">
                {ppcManagement.notIncluded.map((item) => (
                  <li key={item} className="py-4 text-stone">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-stone">{ppcManagement.multiLocationNote}</p>
            </div>
            <div>
              <Eyebrow>How you buy it</Eyebrow>
              <Heading className="mt-4">Add-on or standalone</Heading>
              <div className="mt-8 space-y-6">
                <div className="border-t-2 border-tile pt-6">
                  <h3 className="font-display text-2xl text-ink">
                    Local Lead Plan add-on
                  </h3>
                  <p className="mt-3 text-stone">{ppcManagement.planClientNote}</p>
                  <div className="mt-5">
                    <Button href="/pricing">View pricing</Button>
                  </div>
                </div>
                <div className="border-t-2 border-tile pt-6">
                  <h3 className="font-display text-2xl text-ink">Standalone</h3>
                  <p className="mt-3 text-stone">{ppcManagement.standaloneNote}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button href={primaryCta.href}>{primaryCta.label}</Button>
                    <Button variant="ghost" href="/local-lead-plan">
                      About The Local Lead Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section bg="tile">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow dark>{ppcManagement.whoItsFor.title}</Eyebrow>
              <ul className="mt-8 space-y-4">
                {ppcManagement.whoItsFor.items.map((item) => (
                  <li key={item} className="border-l border-cream/30 pl-5 text-cream">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow dark>{ppcManagement.whoItsNotFor.title}</Eyebrow>
              <ul className="mt-8 space-y-4">
                {ppcManagement.whoItsNotFor.items.map((item) => (
                  <li key={item} className="border-l border-cream/30 pl-5 text-cream">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow>Estimate</Eyebrow>
          <Heading className="mt-4">Run your own numbers</Heading>
          <p className="mt-4 max-w-2xl text-stone">
            Inputs start empty. Nothing is pre-filled, and no sample result is
            shown until you enter values.
          </p>
          <div className="mt-10">
            <RoiCalculator />
          </div>
        </Reveal>
      </Section>

      <Section bg="sand">
        <Reveal>
          <Eyebrow>Local pages</Eyebrow>
          <Heading className="mt-4">Google Ads by city</Heading>
          <p className="mt-4 max-w-2xl text-stone">
            City pages for paid search context. Management is still{' '}
            {managementFee}/mo with ad spend paid to Google.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {googleAdsCityPages.map((page) => (
              <div key={page.href} className="border-t-2 border-tile pt-6">
                <h3 className="font-display text-2xl">{page.label}</h3>
                <div className="mt-5">
                  <Button variant="ghost" href={page.href}>
                    {page.label}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>Questions</Eyebrow>
              <Heading className="mt-4">Google Ads FAQs</Heading>
              <FAQAccordion
                className="mt-10"
                items={ppcManagement.faqs.map((faq) => ({
                  question: faq.question,
                  answer: faq.answer,
                }))}
              />
            </div>
            <aside className="lg:col-span-4 lg:col-start-9">
              {relatedServices.length > 0 ? (
                <>
                  <p className="border-t-2 border-tile pt-4 font-mono text-[13px] uppercase tracking-[0.12em] text-stone">
                    Related services
                  </p>
                  <ul className="mt-4 space-y-3">
                    {relatedServices.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/services/${related.slug}`}
                          className="font-display text-xl text-ink"
                        >
                          {related.shortName}
                        </Link>
                        <p className="mt-1 text-sm text-stone">{related.cardBlurb}</p>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
              <p className="mt-8 text-sm text-stone">
                The Local Lead Plan is {formatUsd(pricingPlan.monthlyAmount)}/mo
                or {formatUsd(pricingPlan.annualAmount)}/yr. PPC management is{' '}
                {managementFee}/mo on top when you add it.
              </p>
              <div className="mt-6">
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              </div>
              <p className="mt-4 text-sm text-stone">
                <a href={ppcManagement.contactPhoneHref}>
                  {ppcManagement.contactPhoneDisplay}
                </a>
                {' · '}
                <a href={`mailto:${ppcManagement.contactEmail}`}>
                  {ppcManagement.contactEmail}
                </a>
              </p>
            </aside>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        heading="Ready to turn on Google Ads?"
        subline="Book a 20-Minute Call for standalone, or open Pricing if you already want The Local Lead Plan."
      />

      {relatedResources.length > 0 ? (
        <Section bg="white">
          <Reveal>
            <Eyebrow>Reading</Eyebrow>
            <Heading className="mt-4">Related resources</Heading>
            <div className="mt-12 space-y-0">
              {relatedResources.map((resource) => (
                <div key={resource.slug} className="border-t border-rule py-7">
                  <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-stone">
                    {resourceCategoryLabels[resource.category]}
                  </p>
                  <h3 className="mt-3 font-display text-3xl">
                    <Link href={`/resources/${resource.slug}`}>{resource.title}</Link>
                  </h3>
                  <p className="mt-3 text-stone">{resource.excerpt}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>
      ) : null}
    </>
  );
}
