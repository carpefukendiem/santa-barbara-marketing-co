import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { IconCompass, IconHeart, IconWaves } from '@/components/icons';
import { photos } from '@/data/images';
import { primaryCta } from '@/data/navigation';
import { site } from '@/data/site';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About Santa Barbara Marketing Co.',
  description:
    "We're a Santa Barbara digital marketing agency founded in 2024. Local by residence, proof over promises, one system. Request a Free 805 Growth Plan.",
  path: '/about',
});

const pillars = [
  {
    title: 'Local by residence',
    icon: IconWaves,
    body: 'We live in the 805. A Funk Zone tasting room, a Goleta HVAC company, and a Coast Village Road practice have three different search problems. We plan around that.',
  },
  {
    title: 'Proof over promises',
    icon: IconHeart,
    body: 'No invented numbers, no first-page guarantee, no vanity dashboards. Reporting in English, tied to calls, forms, and booked work.',
  },
  {
    title: 'One system',
    icon: IconCompass,
    body: 'Getting found, getting chosen, and getting followed up with are one connected problem. We build all three so leads stop leaking between vendors.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <Section className="bg-sbmc-cream pb-0">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'About' },
            ]}
          />
          <SectionEyebrow align="left" className="mt-8">
            About the agency
          </SectionEyebrow>
          <Heading as="h1" size="lg" className="mt-4 max-w-3xl">
            A Santa Barbara agency that shows its work
          </Heading>
          <p className="mt-6 max-w-[60ch] text-body-lg text-sbmc-ink-muted">
            Founded in {site.founded}. Local by residence. Proof over promises.
            One system for getting found, getting chosen, and getting followed
            up with.
          </p>
        </Container>
        <div className="mt-12 grid lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[420px]">
            <Image
              src={photos.localStreet.src}
              alt={photos.localStreet.alt}
              fill
              quality={78}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="photo-treatment object-cover"
              style={{ objectPosition: photos.localStreet.focalPoint }}
            />
            <GrainOverlay />
          </div>
          <div className="flex items-center bg-sbmc-navy-deep px-5 py-12 md:px-12">
            <p className="font-script max-w-[28ch] text-2xl text-white md:text-3xl">
              Local People. Local Businesses. A Stronger 805.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-sbmc-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[12px] border border-sbmc-border p-6">
                <span className="text-sbmc-teal">
                  <pillar.icon size={22} />
                </span>
                <h2 className="mt-4 text-heading-sm">{pillar.title}</h2>
                <p className="mt-3 text-body-sm text-sbmc-ink-muted">{pillar.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-sbmc-cream">
        <Container>
          <article className="measure space-y-6 text-body-lg text-sbmc-ink">
            <p>
              Santa Barbara Marketing Co. is a digital marketing agency for
              businesses in Santa Barbara, Goleta, Montecito, and Carpinteria.
              We were founded in {site.founded}. We live in the 805. That is
              the origin story. There is no invented decade on a wall, and there
              is no claim that we have been serving this county for a generation.
              If a sentence cannot be checked, it does not belong on this site.
            </p>
            <p>
              We started the company because the local market had split into two
              unhelpful camps. Legacy shops had real relationships and dated
              websites. Out-of-town operators had modern-looking pages,
              noun-swapped city copy, and testimonials that did not hold up.
              Business owners were asked to choose between a brochure and a
              fiction. We built a third option: a local team that publishes
              what it can prove, measures the work in calls and booked jobs, and
              treats search, the website, and follow-up as one system.
            </p>
            <h2 className="text-display-md text-sbmc-navy-soft">
              Local by residence, not by landing page
            </h2>
            <p>
              A Funk Zone tasting room, a Goleta HVAC company, and a Coast
              Village Road practice do not have the same search problem.
              Residents searching from a home in San Roque behave differently
              from a visitor on a hotel phone deciding in ten seconds. A Goleta
              pin will not reliably win the Map Pack for downtown Santa Barbara.
              Montecito work is lower volume and higher consideration.
              Carpinteria has its own main street and its own queries. We plan
              around those facts because we live with them. We do not clone a
              statewide template and drop in a city name.
            </p>
            <p>
              That is why the location pages on this site are written as
              separate markets. Downtown and the waterfront live on visitor
              timing. Old Town Goleta and the Hollister corridor live on
              resident jobs and UCSB-adjacent demand. If we take on your
              account, the first conversation is which geography you can
              actually win, not a wish list of every neighborhood from Hope
              Ranch to Summerland.
            </p>
            <h2 className="text-display-md text-sbmc-navy-soft">
              Proof over promises
            </h2>
            <p>
              We will not invent testimonials, star ratings, client names, or
              case-study numbers. We will not promise a first-page ranking.
              Where we do not have a published result yet, we say so. Our{' '}
              <Link href="/work" className="font-medium text-sbmc-teal">
                Work
              </Link>{' '}
              page is empty on purpose. A case study from this agency will name
              the client (with permission), the industry, the location, the
              services used, the challenge, the approach, what we built,
              screenshots we are allowed to show, metrics we can verify, a
              timeline, and an outcome. If we cannot verify a number, it does
              not go on the page. That is slower than writing a testimonial
              carousel. It is also the reason a serious owner should trust the
              rest of the site.
            </p>
            <p>
              Reporting is in English. You should be able to see which campaigns
              or pages produced calls, forms, and booked work. You should not
              need a fourteen-tab dashboard to find out whether the month was
              useful. If something is down, we say so and what we are changing.
            </p>
            <h2 className="text-display-md text-sbmc-navy-soft">One system</h2>
            <p>
              Most 805 businesses do not fail because they lacked a fifth
              vendor. They leak. The Google Business Profile is incomplete, the
              website hides the phone, the ads send people to a homepage
              carousel, and the form fill waits until Tuesday. Getting found,
              getting chosen, and getting followed up with are one connected
              problem. We work across{' '}
              <Link href="/services" className="font-medium text-sbmc-teal">
                Local SEO, websites, Google Ads, and follow-up
              </Link>{' '}
              so those pieces agree with each other. You can hire us for one of
              them. We will still tell you if the first dollar belongs somewhere
              else.
            </p>
            <h2 className="text-display-md text-sbmc-navy-soft">
              Honesty as a differentiator
            </h2>
            <p>
              Fabricated proof is common in this market. Invented names on
              templated location pages. Awards that cannot be found. Years in
              business that do not match a registration date. We will not
              compete that way. If we do not have a review we can permission,
              there is no review widget. If we do not have a street address we
              can verify, there is no fake suite number in schema. If a
              competitor is beating you on review velocity, we will say that in
              the Growth Plan instead of dressing it up.
            </p>
            <p>
              That posture is how we write service pages, location pages, and
              this About page. It is also how we will write your site. Long-term
              partnerships here mean month-to-month or defined project terms,
              spelled out before an invoice, not a lock-in buried in a PDF.
            </p>
            <h2 className="text-display-md text-sbmc-navy-soft">
              Who this is for
            </h2>
            <p>
              We work with one-location shops, clinics, restaurants,
              contractors, professional firms, and property businesses that sell
              inside Santa Barbara County. We are a poor fit if you need a
              national media team or a twenty-person brand department. We are a
              good fit if you want a plan you can read, a site that loads on a
              phone, and reporting that names the phone.
            </p>
            <h2 className="text-display-md text-sbmc-navy-soft">How to start</h2>
            <p>
              Request a{' '}
              <Link href="/free-growth-plan" className="font-medium text-sbmc-teal">
                Free 805 Growth Plan
              </Link>
              . We review how you show up in Search and Maps, look at competitors
              in your category, list the gaps, and send a prioritized 90-day
              plan {site.growthPlanTurnaround}. A person writes it. We walk
              through it on a short call. There is no contract attached to the
              document. If the plan is useful, we talk about what to run first.
              If it is not, you keep it.
            </p>
            <div className="pt-2">
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
            </div>
          </article>
        </Container>
      </Section>
      <CtaBand
        heading="Let's look at your market."
        subline="A written plan. A short call. No invented proof."
      />
    </>
  );
}
