import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { serviceIconMap } from '@/components/icons/maps';
import { faqsByCategory } from '@/data/faqs';
import { getService, services, type ServiceNavGroup } from '@/data/services';
import { primaryCta } from '@/data/navigation';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

const groupOrder: ServiceNavGroup[] = ['found', 'convert', 'systems'];

const groupCopy: Record<
  ServiceNavGroup,
  { title: string; lede: string }
> = {
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

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services' },
];

function SystemFlowDiagram() {
  return (
    <svg
      viewBox="0 0 800 168"
      role="img"
      aria-labelledby="system-flow-title system-flow-desc"
      className="mt-12 w-full text-sbmc-navy"
    >
      <title id="system-flow-title">How the work connects</title>
      <desc id="system-flow-desc">
        Traffic reaches the site, follow-up catches the lead, and measurement
        tells you which of those steps actually produced work.
      </desc>
      <line
        x1="88"
        y1="52"
        x2="712"
        y2="52"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-sbmc-border"
      />
      {[
        { x: 88, label: 'Traffic', note: 'Search, Maps, ads', fill: '#052136' },
        { x: 296, label: 'Site', note: 'The page that converts', fill: '#036c7d' },
        { x: 504, label: 'Follow-up', note: 'Call, text, after hours', fill: '#c96637' },
        { x: 712, label: 'Measurement', note: 'Calls and booked work', fill: '#6d8b79' },
      ].map((node, index) => (
        <g key={node.label}>
          {index < 3 ? (
            <polygon
              points={`${node.x + 78},46 ${node.x + 90},52 ${node.x + 78},58`}
              className="fill-sbmc-border"
            />
          ) : null}
          <circle cx={node.x} cy="52" r="22" fill={node.fill} />
          <text
            x={node.x}
            y="57"
            textAnchor="middle"
            fill="#f8f4ed"
            fontSize="13"
            fontFamily="var(--font-sans), system-ui, sans-serif"
            fontWeight="700"
          >
            {index + 1}
          </text>
          <text
            x={node.x}
            y="104"
            textAnchor="middle"
            fill="#0c2539"
            fontSize="15"
            fontFamily="var(--font-playfair), Georgia, serif"
            fontWeight="600"
          >
            {node.label}
          </text>
          <text
            x={node.x}
            y="126"
            textAnchor="middle"
            fill="#4a5a66"
            fontSize="12"
            fontFamily="var(--font-sans), system-ui, sans-serif"
          >
            {node.note}
          </text>
        </g>
      ))}
    </svg>
  );
}

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
      <Section className="bg-sbmc-cream-warm" padded={false}>
        <Container className="py-8 md:py-10">
          <Breadcrumbs items={crumbs} />
          <SectionEyebrow align="left" className="mt-10">
            Services
          </SectionEyebrow>
          <Heading as="h1" size="xl" className="mt-4 max-w-4xl">
            Full-Service Digital Marketing for Santa Barbara Businesses.
          </Heading>
          <p className="measure-lede mt-6 text-body-lg text-sbmc-ink">
            Most 805 businesses do not need five vendors and a stack of
            disconnected retainers. They need to get found, convert the visit,
            and follow up when the lead actually arrives. We group the work that
            way on purpose.
          </p>
          <p className="measure mt-4 text-body-lg text-sbmc-ink-muted">
            Get Found is search, Maps, and ads. Convert &amp; Grow is the site
            and the presence that turns a tap into a call. Systems is follow-up,
            measurement, and a plan so those pieces stay one job. You will not
            always buy all eleven. You should know how they connect before you
            buy any of them.
          </p>
          <div className="mt-8">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-sbmc-cream pt-6">
        <Container>
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
                <h2
                  id={`services-${groupId}`}
                  className="text-display-md text-sbmc-navy-soft"
                >
                  {copy.title}
                </h2>
                <p className="measure mt-3 text-body-lg text-sbmc-ink-muted">
                  {copy.lede}
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {groupServices.map((service) => {
                    const Icon = serviceIconMap[service.icon];
                    return (
                      <ServiceCard
                        key={service.slug}
                        title={service.shortName}
                        href={`/services/${service.slug}`}
                        blurb={service.cardBlurb}
                        icon={<Icon size={26} />}
                        iconBg={service.iconBg}
                        variant="bordered"
                      />
                    );
                  })}
                </div>
              </section>
            );
          })}
        </Container>
      </Section>

      <Section className="bg-sbmc-cream-warm">
        <Container>
          <SectionEyebrow>One system</SectionEyebrow>
          <Heading className="mt-4 text-center">
            Not five vendors. One sequence.
          </Heading>
          <p className="measure-lede mx-auto mt-5 text-center text-body-lg text-sbmc-ink-muted">
            Traffic is wasted if the page cannot take the call. A fast page is
            wasted if nobody follows up after 5 p.m. Follow-up is guesswork if
            you cannot tell which search produced the job. We plan those four
            steps as one system, even when you only hire us for one of them.
          </p>
          <SystemFlowDiagram />
        </Container>
      </Section>

      <Section className="bg-sbmc-cream">
        <Container>
          <SectionEyebrow>Where to start</SectionEyebrow>
          <Heading className="mt-4 text-center">Which do I need?</Heading>
          <p className="measure-lede mx-auto mt-5 text-center text-body-lg text-sbmc-ink-muted">
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
                  <h3 className="text-heading-sm">{scenario.title}</h3>
                  <p className="mt-3 flex-1 text-body-sm text-sbmc-ink-muted">
                    {scenario.body}
                  </p>
                  <p className="mt-6 text-eyebrow text-sbmc-teal">Start with</p>
                  <div className="mt-3">
                    <Button variant="link" href={`/services/${recommended.slug}`}>
                      {recommended.shortName}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-sbmc-cream-warm">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionEyebrow>Working together</SectionEyebrow>
            <Heading className="mt-4 text-center">
              Questions before you pick a service
            </Heading>
            <Accordion className="mt-10" items={faqs} />
          </div>
        </Container>
      </Section>

      <CtaBand
        heading="Not sure which service comes first?"
        subline="The Free 805 Growth Plan is a written 90-day priority list, not a pitch deck."
      />
    </>
  );
}
