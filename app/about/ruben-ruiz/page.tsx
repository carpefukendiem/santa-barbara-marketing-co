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
import { primaryCta } from '@/data/navigation';
import { site } from '@/data/site';
import {
  breadcrumbSchema,
  faqPageSchema,
  personSchema,
  webPageSchema,
} from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { formatPhone } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'Ruben Ruiz, Founder',
  description:
    'Ruben Ruiz founded Santa Barbara Marketing Co in 2026 and has marketed local businesses since 2007. Formerly Ranking SB. Local by residence, proof over promises, one system.',
  path: '/about/ruben-ruiz',
});

const faqs = [
  {
    question: 'Who is Ruben Ruiz?',
    answer:
      'Ruben Ruiz is the founder of Santa Barbara Marketing Co. He founded the agency in 2026 and has marketed local businesses since 2007. The company was formerly Ranking SB.',
  },
  {
    question: 'What does Santa Barbara Marketing Co do?',
    answer:
      'We are a marketing agency based in Santa Barbara that serves all of Santa Barbara County. The work covers websites, Local SEO, Google Business Profile, ads when they fit, and a full CRM with follow-up. Getting found, getting chosen, and getting followed up with are treated as one system.',
  },
  {
    question: 'What is the Local Lead Plan?',
    answer:
      'The Local Lead Plan is $297/mo or $2,970/yr. It is the bundled plan for the marketing website, Local SEO, review requests, and follow-up. Cancel anytime with 30-day written notice.',
  },
  {
    question: 'How do I reach Ruben or the team?',
    answer: `Email ${site.email} or call ${formatPhone(site.phone)}. You can also book a 20-Minute Call. The site and the agency work in English and Spanish.`,
  },
  {
    question: 'Where can I read more about the agency?',
    answer:
      'Start with the About page for the three pillars, the Resources library for longer writing, and Work when published case studies are ready. We do not invent testimonials or numbers to fill empty space.',
  },
];

export default function RubenRuizPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: '/about/ruben-ruiz',
            name: 'Ruben Ruiz, Founder',
            description:
              'Ruben Ruiz founded Santa Barbara Marketing Co in 2026 and has marketed local businesses since 2007. Formerly Ranking SB.',
            type: 'AboutPage',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Ruben Ruiz', path: '/about/ruben-ruiz' },
          ]),
          personSchema(),
          faqPageSchema(faqs),
        ]}
      />
      <PageHero
        variant="simple"
        eyebrow="Founder"
        title="Ruben Ruiz"
        subhead={`Founder of ${site.name}. Marketing local businesses since 2007. Agency founded in ${site.founded}. Formerly Ranking SB.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Ruben Ruiz' },
        ]}
      />
      <AnswerFirst
        answer={`Ruben Ruiz founded Santa Barbara Marketing Co in ${site.founded} after marketing local businesses since 2007. The agency was formerly Ranking SB. It serves Santa Barbara County with a Local Lead Plan at $297/mo or $2,970/yr, English and Spanish support, and a proof-over-promises standard.`}
        facts={[
          { label: 'Role', value: site.founder.jobTitle },
          { label: 'Marketing since', value: '2007' },
          { label: 'Agency founded', value: site.founded },
          { label: 'Formerly', value: 'Ranking SB' },
        ]}
      />

      <Section bg="sand">
        <Reveal>
          <Prose>
            <p>
              Ruben Ruiz is the founder of Santa Barbara Marketing Co. The
              agency opened in {site.founded}. The marketing work behind it did
              not. Ruben has marketed local businesses since 2007. That span is
              the part of the story that can be checked. The company name on the
              door is newer. Formerly Ranking SB. The rename is public on this
              site and in schema. There is no invented decade under the current
              brand, and there is no claim that Santa Barbara Marketing Co has
              been operating under this name for a generation.
            </p>
            <p>
              This page exists so articles, bylines, and the founder profile have
              a clear home. The public URL for Ruben is here. The same Person
              identity used across the site still resolves for articles. If you
              want the agency pillars in full, read{' '}
              <Link href="/about">About</Link>. If you want longer operational
              writing, open <Link href="/resources">Resources</Link>. If you
              want published proof when it exists, open{' '}
              <Link href="/work">Work</Link>. Work stays empty until a case
              study can name the client with permission, the industry, the
              location, the services used, the challenge, the approach, what
              was built, screenshots we are allowed to show, metrics we can
              verify, a timeline, and an outcome.
            </p>
            <h2>Why the agency exists</h2>
            <p>
              The local market had split into two unhelpful camps. Legacy shops
              had real relationships and dated websites. Out-of-town operators
              had modern-looking pages, noun-swapped city copy, and testimonials
              that did not hold up. Business owners were asked to choose between
              a brochure and a fiction. Santa Barbara Marketing Co was built as
              a third option: a local team that publishes what it can prove,
              measures the work in calls and booked jobs, and treats search, the
              website, and follow-up as one system.
            </p>
            <p>
              That is not a personality brand. It is an operating standard.
              Local by residence. Proof over promises. One system. Those three
              lines sit on the About page because they describe how the work is
              sold and how it is refused. Ruben&apos;s job as founder is to keep
              the company inside that fence when a faster pitch would sell
              better.
            </p>
            <h2>Local by residence</h2>
            <p>
              The agency is based in Santa Barbara and serves all of Santa
              Barbara County. A Funk Zone tasting room, a Goleta HVAC company,
              and a Coast Village Road practice do not share one search problem.
              Residents searching from a home in San Roque behave differently
              from a visitor on a hotel phone deciding in ten seconds. A Goleta
              pin will not reliably win the Map Pack for downtown Santa Barbara.
              Montecito work is lower volume and higher consideration.
              Carpinteria has its own main street and its own queries. Old Town
              Goleta and the Hollister corridor live on resident jobs and
              UCSB-adjacent demand. Santa Maria, Lompoc, and the Santa Ynez
              Valley are separate markets inside the same county.
            </p>
            <p>
              Living here is the point of the pillar, not a slogan. Planning
              starts with which geography a business can actually win, not a
              wish list of every neighborhood from Hope Ranch to Summerland.
              Location pages on this site are written as separate markets for
              that reason. Ruben&apos;s role is to keep that honesty in the
              first conversation, before anyone talks about channels.
            </p>
            <h2>Proof over promises</h2>
            <p>
              The site does not invent testimonials, star ratings, client names,
              or case-study numbers. It does not promise a first-page ranking.
              Where there is no published result yet, the page says so.
              Reporting is in English. Owners should see which campaigns or
              pages produced calls, forms, and booked work without a fourteen-tab
              dashboard. If something is down, the team says so and what is
              changing.
            </p>
            <p>
              That posture is how Ruben expects the agency to compete. Fabricated
              proof is common in this market. Invented names on templated
              location pages. Awards that cannot be found. Years in business that
              do not match a registration date. Santa Barbara Marketing Co will
              not compete that way. The city, phone, and email in the footer and
              on Contact are the ones published in schema. The business is a
              service-area business with no walk-in office. If a competitor is
              beating you on review velocity, that belongs in a 20-minute call,
              not in a dressed-up homepage claim.
            </p>
            <h2>One system</h2>
            <p>
              Most 805 businesses do not fail because they lacked a fifth
              vendor. They leak. The Google Business Profile is incomplete, the
              website hides the phone, the ads send people to a homepage
              carousel, and the form fill waits until Tuesday. Getting found,
              getting chosen, and getting followed up with are one connected
              problem. The Local Lead Plan is built around that connection: a
              marketing website, Local SEO, review requests, and follow-up on a
              full CRM, priced at $297/mo or $2,970/yr.
            </p>
            <p>
              Sites are live in 30 days once we have your logins, photos and
              content. That clock is honest about inputs. It is not a free-month
              marketing gimmick, and it is not a ranking guarantee. Cancel
              anytime with 30-day written notice, spelled out before an invoice,
              not buried in a PDF. English and Spanish are part of how the agency
              works and how the site declares language support.
            </p>
            <h2>Who this page is for</h2>
            <p>
              This page is for owners who want to know who founded the company
              before they book a call. It is also for search engines and article
              consumers that need a stable Person entity. It is not a resume of
              employers, degrees, awards, or client counts. Those details are
              not published here because they are not part of the verifiable
              record this site uses. The facts that are public are the founding
              year, the 2007 start of local marketing work, the Ranking SB
              history, the county service area, the plan price, the contact
              channels, the language support, and the three pillars.
            </p>
            <p>
              If you want a written look at your market,{' '}
              <Link href="/book-a-call">book a 20-Minute Call</Link>. Email{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
              <a href={`tel:${site.phone}`}>{formatPhone(site.phone)}</a> if
              you prefer. The About page explains the agency. This page names the
              founder. Both should agree.
            </p>
          </Prose>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button variant="ghost" href="/about">
              About the agency
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section bg="white">
        <Reveal>
          <Eyebrow>Questions</Eyebrow>
          <Heading className="mt-4">Founder FAQs</Heading>
          <FAQAccordion className="mt-10" items={faqs} />
          <p className="mt-10 max-w-[60ch] text-stone">
            More agency context lives on <Link href="/about">About</Link>,
            longer writing on <Link href="/resources">Resources</Link>, and
            published proof on <Link href="/work">Work</Link> when case studies
            are ready.
          </p>
        </Reveal>
      </Section>

      <CtaBand
        heading="Want a written look at your market?"
        subline="A 20-minute call. A short list of what we would do first. No invented proof."
      />
    </>
  );
}
