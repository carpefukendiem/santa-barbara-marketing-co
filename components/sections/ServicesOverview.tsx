import { FAQAccordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { IconCircle } from '@/components/ui/IconCircle';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqsByCategory } from '@/data/faqs';
import { getService, services, type ServiceNavGroup } from '@/data/services';
import { primaryCta } from '@/data/navigation';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import { serviceLucide } from '@/lib/lucideIcons';

const groupOrder: ServiceNavGroup[] = ['found', 'convert', 'systems'];

const groupCopy: Record<ServiceNavGroup, { title: string; lede: string }> = {
  found: {
    title: 'Get Found',
    lede: 'Search, Maps, and ads so a resident on the Mesa or a visitor on Cabrillo can actually find you.',
  },
  convert: {
    title: 'Convert & Grow',
    lede: 'The site, the offer, and the public presence that turn a tap into a call or a booking.',
  },
  systems: {
    title: 'Systems',
    lede: 'Follow-up, measurement, and a written plan so the channels do not cancel each other out.',
  },
};

const scenarios = [
  {
    title: 'People search. The phone stays quiet.',
    body: 'You have a listing and a website, but the Map Pack still goes to shops closer to the searcher or with a livelier profile. Start with Local SEO so you work the geography your pin can actually win.',
    serviceSlug: 'local-seo',
  },
  {
    title: 'Maps sends them. The page loses them.',
    body: 'Taps from the pier or a hotel room die on a slow homepage with a buried phone number. Start with the website so a few-minute visitor decision can actually complete.',
    serviceSlug: 'web-design',
  },
  {
    title: 'Leads arrive. Nobody catches them.',
    body: 'After-hours voicemail and a two-day callback habit waste traffic you already paid to earn. Start with follow-up, not another channel, until someone answers.',
    serviceSlug: 'marketing-automation',
  },
] as const;

export function ServicesOverview() {
  const faqs = faqsByCategory('working-together');

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
          faqPageSchema(faqs),
        ]}
      />
      <PageHero
        variant="simple"
        eyebrow="Services"
        title="Full-Service Digital Marketing for Santa Barbara Businesses."
        accent="Santa Barbara"
        subhead="Most 805 businesses do not need five vendors and a stack of disconnected retainers. They need to get found, convert the visit, and follow up when the lead actually arrives. We group the work that way on purpose."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />

      <Section bg="white">
        <Reveal>
          <p className="max-w-[65ch] text-lg text-stone">
            Get Found is search, Maps, and ads. Convert &amp; Grow is the site
            and the presence that turns a tap into a call. Systems is follow-up,
            measurement, and a plan so those pieces stay one job. You will not
            always buy all eleven. You should know how they connect before you
            buy any of them.
          </p>
          <div className="mt-8">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
          </div>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceLucide(service.slug, service.icon);
              return (
                <Card key={service.slug} className="p-6">
                  <IconCircle icon={Icon} />
                  <h3 className="mt-5 text-h3 text-navy">{service.shortName}</h3>
                  <p className="mt-3 text-stone">{service.cardBlurb}</p>
                  <div className="mt-5">
                    <Button variant="ghost" href={`/services/${service.slug}`}>
                      Learn more
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </Reveal>
      </Section>

      <Section bg="sand">
        <Reveal>
          {groupOrder.map((groupId) => {
            const copy = groupCopy[groupId];
            const groupServices = services.filter(
              (service) => service.navGroup === groupId,
            );
            return (
              <section
                key={groupId}
                aria-labelledby={`services-${groupId}`}
                className="mt-16 first:mt-0"
              >
                <h2 id={`services-${groupId}`} className="text-h2 text-navy">
                  {copy.title}
                </h2>
                <p className="mt-3 max-w-[65ch] text-lg text-stone">{copy.lede}</p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {groupServices.map((service) => (
                    <li key={service.slug}>
                      <Button variant="ghost" href={`/services/${service.slug}`}>
                        {service.shortName}
                      </Button>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </Reveal>
      </Section>

      <Section bg="white">
        <Reveal>
          <Eyebrow align="center">One system</Eyebrow>
          <Heading className="mt-4 text-center">
            Not five vendors. One sequence.
          </Heading>
          <p className="mx-auto mt-5 max-w-[58ch] text-center text-lg text-stone">
            Traffic is wasted if the page cannot take the call. A fast page is
            wasted if nobody follows up after 5 p.m. Follow-up is guesswork if
            you cannot tell which search produced the job. We plan those four
            steps as one system, even when you only hire us for one of them.
          </p>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Traffic', note: 'Search, Maps, ads' },
              { label: 'Site', note: 'The page that converts' },
              { label: 'Follow-up', note: 'Call, text, after hours' },
              { label: 'Measurement', note: 'Calls and booked work' },
            ].map((node, index) => (
              <li key={node.label}>
                <Card className="h-full p-6 text-center">
                  <p className="font-display text-sm text-ocean">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 text-h3 text-navy">{node.label}</h3>
                  <p className="mt-2 text-sm text-stone">{node.note}</p>
                </Card>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      <Section bg="sand">
        <Reveal>
          <Eyebrow align="center">Where to start</Eyebrow>
          <Heading className="mt-4 text-center">Which do I need?</Heading>
          <p className="mx-auto mt-5 max-w-[58ch] text-center text-lg text-stone">
            Three common 805 situations, and the service we would usually open
            with. The Growth Plan is how we confirm that for your pin and your
            category, instead of selling the whole menu.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {scenarios.map((scenario) => {
              const recommended = getService(scenario.serviceSlug);
              if (!recommended) return null;
              return (
                <Card key={scenario.title} className="flex h-full flex-col p-7">
                  <h3 className="text-h3 text-navy">{scenario.title}</h3>
                  <p className="mt-3 flex-1 text-stone">{scenario.body}</p>
                  <p className="mt-6 text-eyebrow text-ocean">Start with</p>
                  <div className="mt-3">
                    <Button variant="ghost" href={`/services/${recommended.slug}`}>
                      {recommended.shortName}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </Reveal>
      </Section>

      <Section bg="white">
        <Reveal>
          <Eyebrow>Working together</Eyebrow>
          <Heading className="mt-4">Questions before you pick a service</Heading>
          <FAQAccordion className="mt-10" items={faqs} />
        </Reveal>
      </Section>

      <CtaBand
        heading="Not sure which service comes first?"
        subline="The Free 805 Growth Plan is a written 90-day priority list, not a pitch deck."
      />
    </>
  );
}
