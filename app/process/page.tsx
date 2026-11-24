import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { PageHero } from '@/components/ui/PageHero';
import { Prose } from '@/components/ui/Prose';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { FAQAccordion } from '@/components/ui/Accordion';
import { CtaBand } from '@/components/sections/CtaBand';
import { AnswerFirst } from '@/components/seo/AnswerFirst';
import { JsonLd } from '@/components/seo/JsonLd';
import { site } from '@/data/site';
import {
  breadcrumbSchema,
  faqPageSchema,
  webPageSchema,
} from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { formatPhone } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'Our Process: Live in 30 Days',
  description:
    'How Santa Barbara Marketing Co launches a Local Lead Plan site in 30 days counted from logins, photos and content. Week-by-week timeline for Santa Barbara County businesses.',
  path: '/process',
});

const faqs = [
  {
    question: 'When does the 30-day clock start?',
    answer:
      'The timeline is counted from logins, photos and content. Until those inputs arrive, the calendar does not pretend a launch date is locked. Live in 30 days means a marketing site with a clear sitemap once we have what we need to build honestly.',
  },
  {
    question: 'Is there a free-month guarantee if the site is late?',
    answer:
      'No. We do not sell a free-month guarantee. We give a dated outline, say who we are waiting on, and keep the live-in-30-days promise tied to logins, photos and content.',
  },
  {
    question: 'What is included in the Local Lead Plan launch?',
    answer:
      'The Local Lead Plan is $297/mo or $2,970/yr. It covers the marketing website, Local SEO, review requests, and follow-up on a full CRM. Ad spend, Google Business Profile rebuilds when scoped separately, and print are quoted apart when you want them.',
  },
  {
    question: 'How do I start?',
    answer:
      'Book a 20-Minute Call if you want to talk first, open Pricing to see the plan in writing, or use Get Started when you are ready to enroll. Cancel anytime with 30-day written notice.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'We walk through what is live, what you have to do, and how we will report. Reporting is in English and tied to calls, forms, and booked work when you can share them. Monthly billing or the annual option continues until you cancel with 30-day written notice.',
  },
];

const weeks = [
  {
    title: 'Week 1: Inputs, access, and the real sitemap',
    body: 'The first week is intake with teeth. We collect Google Business Profile, Analytics, Search Console, and any ad accounts you already have. We need a short list of the services you actually want to sell, photos you already own, and who answers the phone. That is enough to begin. We do not ask for a twelve-page brand questionnaire before we look at the Map Pack. The sitemap is written from the searches and service lines you can win in Santa Barbara County, not from a national template with a city name swapped in.',
  },
  {
    title: 'Week 2: Structure, copy skeleton, and CRM foundation',
    body: 'With access and content in hand, we shape pages so the phone and the form are obvious on a mobile screen. Titles, service pages, and location context get drafted against the geography you can actually serve, whether that is downtown and the waterfront, Old Town Goleta and Hollister, Coast Village Road, Linden in Carpinteria, or north-county markets. The full CRM foundation starts here so leads have a place to land. Forms, missed-call text-back paths, and review-request flows are planned as part of the same system, not as afterthoughts bolted on after launch week.',
  },
  {
    title: 'Week 3: Build, tracking, and follow-up wiring',
    body: 'Week three is production. The marketing site is assembled for Core Web Vitals, readable type, and tap targets that call you. Tracking is verified so calls and forms are not vanity guesses. Local SEO and on-site SEO work stay aligned with the listing: NAP consistency, page intent, and technical cleanup so the site and the Google Business Profile agree. Follow-up on the full CRM is wired so a form fill or a missed inquiry gets a path back to you instead of sitting until Tuesday. If photography or copy is still missing, the calendar says so. The 30-day clock does not rewrite history to protect a sales slide.',
  },
  {
    title: 'Week 4: QA, launch, and handoff',
    body: 'The last week is quality and launch. We test the site on a real phone, confirm click-to-call, forms, and the follow-up paths, and walk through what is live, what you own, and how reporting will look. Training is in person when that is the right fit. You should leave knowing how to spot a missed lead and how we will talk about the month in English. Launch is not a free month. It is the start of the Local Lead Plan retainer, billed monthly at $297 or annually at $2,970, until you cancel with 30-day written notice.',
  },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: '/process',
            name: 'Our Process: Live in 30 Days',
            description:
              'How Santa Barbara Marketing Co launches websites in 30 days counted from logins, photos and content.',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Process', path: '/process' },
          ]),
          faqPageSchema(faqs),
        ]}
      />
      <PageHero
        variant="simple"
        eyebrow="Process"
        title="Live in 30 days, counted from the inputs that matter"
        accent="30 days"
        subhead="Logins, photos and content start the clock. A marketing site, Local SEO, and follow-up on a full CRM ship as one system. No free-month guarantee."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Process' },
        ]}
      />
      <AnswerFirst
        answer="Santa Barbara Marketing Co builds Local Lead Plan websites to go live in 30 days once we have your logins, photos and content. The plan is $297/mo or $2,970/yr. There is no free-month guarantee. Cancel anytime with 30-day written notice."
        facts={[
          { label: 'Timeline', value: '30 days from inputs' },
          { label: 'Starts when', value: 'Logins, photos, content' },
          { label: 'Plan', value: '$297/mo or $2,970/yr' },
          { label: 'Guarantee', value: 'No free-month offer' },
        ]}
      />

      <Section bg="sand">
        <Reveal>
          <Prose>
            <p>
              Owners ask the same question after every pitch deck: when is the
              site actually live? Our answer is specific. Live in 30 days once
              we have your logins, photos and content. The clock is not a vibe.
              It is not a ranking promise. It is not a free month if someone on
              either side is late. It is a build calendar for a marketing site
              with a clear sitemap, counted from the inputs required to do the
              work honestly.
            </p>
            <p>
              Santa Barbara Marketing Co was founded in {site.founded} by{' '}
              {site.founder.name}, who has marketed local businesses since 2007.
              Formerly Ranking SB. We serve all of Santa Barbara County. The
              Local Lead Plan is $297/mo or $2,970/yr and bundles the marketing
              website, Local SEO, review requests, and follow-up on a full CRM.
              English and Spanish are how we work. Cancel anytime with 30-day
              written notice. This page is the operational version of those
              facts: what happens before the clock starts, what each week is
              for, and what launch does and does not mean.
            </p>
            <h2>Before the clock starts</h2>
            <p>
              A 30-day promise without inputs is marketing theater. We need
              access to Google Business Profile, Google Analytics, Search
              Console, and any ad accounts you already run. We need a short list
              of the services you actually want to sell, not every category a
              competitor stuffed into a directory listing. We need photos you
              already own or a clear plan for photography. We need to know who
              answers the phone and what happens when they miss it.
            </p>
            <p>
              Until those pieces arrive, we will not invent a launch Friday to
              make a proposal look aggressive. If you are waiting on us, you will
              know. If we are waiting on copy or logins, we will say that too.
              Custom features, booking systems, bilingual page sets, ecommerce
              catalogs, or a large original photo library add time beyond a
              focused marketing site. When that is true, you get a dated outline,
              not a vague &quot;soon.&quot;
            </p>
            <h2>What the 30 days are for</h2>
            <p>
              The Local Lead Plan treats getting found, getting chosen, and
              getting followed up with as one connected problem. The website has
              to take the call on a phone. The listing and the pages have to
              agree. Review requests have to be easy for customers without fake
              testimonials. Missed inquiries need a path back into a full CRM
              instead of an inbox that waits until Tuesday. Building those pieces
              in parallel is the point of the month. Shipping a pretty homepage
              with no follow-up is how leads leak after the ribbon cutting.
            </p>
            <p>
              Geography stays honest inside the calendar. A Funk Zone tasting
              room, a Goleta HVAC company on Hollister, a Coast Village Road
              practice, and a Santa Maria contractor do not share one sitemap.
              Downtown and waterfront demand moves on visitor timing. Old Town
              Goleta and UCSB-adjacent searches move on resident jobs. Montecito
              is lower volume and higher consideration. Carpinteria has its own
              main street. We plan pages around the markets you can win, which is
              the same standard on our{' '}
              <Link href="/about">About</Link> page and on every location page we
              publish.
            </p>
          </Prose>
        </Reveal>
      </Section>

      <Section bg="white">
        <Reveal>
          <Eyebrow>Timeline</Eyebrow>
          <Heading className="mt-4">Week by week inside the 30 days</Heading>
          <p className="mt-4 max-w-[60ch] text-lg text-stone">
            Four weeks after logins, photos and content are in. Adjustments
            happen when scope is larger than a focused marketing site. The
            outline below is the default Local Lead Plan launch path.
          </p>
          <ol className="mt-12 space-y-10">
            {weeks.map((week, index) => (
              <li key={week.title} className="border-t border-rule pt-8">
                <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-ocean">
                  Week {index + 1}
                </p>
                <h2 className="mt-3 font-display text-3xl text-navy">
                  {week.title}
                </h2>
                <p className="mt-4 max-w-[70ch] text-lg leading-relaxed text-stone">
                  {week.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      <Section bg="sand">
        <Reveal>
          <Prose>
            <h2>What live means, and what it does not</h2>
            <p>
              Live means the marketing site is on your domain, click-to-call and
              forms work on a phone, tracking is verified, and the follow-up
              paths on the full CRM are running for the plan you bought. Live
              does not mean a first-page ranking. Live does not mean a free month
              of service if photography arrived late or if a booking integration
              grew the scope. Live does not mean invented case-study numbers on
              day thirty-one. Proof over promises still applies on launch day.
            </p>
            <p>
              After launch, reporting stays in English. You should see which
              pages or campaigns produced calls, forms, and booked work when you
              can share booked-work data. Monthly is typical. If something is
              down, we say so and what we are changing. SEO needs time, so we
              recommend a horizon of at least 90 days for the search work to have
              a chance to show. That is a recommendation, not a trap. Cancel
              anytime with 30-day written notice.
            </p>
            <h2>How this connects to pricing</h2>
            <p>
              The process on this page is the Local Lead Plan launch path. The
              price is $297/mo or $2,970/yr with two months free on the annual
              option. Google Ads media spend, when you want ads, is billed by
              Google and managed under a separate scope. Print and apparel are
              quoted per order. Voice AI and Chat AI are optional add-ons and are
              not required to launch the site. If you want the plan in writing
              before a call, read <Link href="/pricing">Pricing</Link>. If you
              want to talk first,{' '}
              <Link href="/book-a-call">book a 20-Minute Call</Link>. If you are
              ready to enroll, open <Link href="/get-started">Get Started</Link>.
            </p>
            <h2>Who this process fits</h2>
            <p>
              This calendar fits one-location shops, clinics, restaurants,
              contractors, professional firms, and property businesses that sell
              inside Santa Barbara County and need a site that takes the call
              plus follow-up that does not wait a week. It is a poor fit if you
              need a national media team, a twenty-person brand department, or a
              promise that Google will crown you by Friday. It is a good fit if
              you can deliver logins, photos and content, and you want a dated
              outline instead of a slogan.
            </p>
            <p>
              Questions before you start can go to{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a> or{' '}
              <a href={`tel:${site.phone}`}>{formatPhone(site.phone)}</a>. The
              next step is still the Local Lead Plan: talk on a call, read
              pricing, or enroll on Get Started.
            </p>
          </Prose>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/get-started">Get Started</Button>
            <Button variant="ghost" href="/pricing">
              See pricing
            </Button>
            <Button variant="ghost" href="/book-a-call">
              Book a 20-Minute Call
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section bg="white">
        <Reveal>
          <Eyebrow>Questions</Eyebrow>
          <Heading className="mt-4">Process FAQs</Heading>
          <FAQAccordion className="mt-10" items={faqs} />
        </Reveal>
      </Section>

      <CtaBand
        heading="Start the Local Lead Plan."
        subline="$297/mo or $2,970/yr. Live in 30 days from logins, photos and content. Cancel anytime with 30-day written notice."
        ctaLabel="Get Started"
        ctaHref="/get-started"
      />
    </>
  );
}
