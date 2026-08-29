import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Prose } from '@/components/ui/Prose';
import { Section } from '@/components/ui/Section';
import { LegalCallout } from '@/components/legal/LegalCallout';
import { JsonLd } from '@/components/seo/JsonLd';
import { site } from '@/data/site';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Accessibility',
  description:
    'Santa Barbara Marketing Co. aims for WCAG 2.1 AA. How to report an accessibility issue, and our commitment to usable pages. Starter statement.',
  path: '/accessibility',
});

export default function AccessibilityPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Accessibility', path: '/accessibility' },
        ])}
      />
      <Section className="bg-sbmc-cream">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Accessibility' },
            ]}
          />
          <Heading as="h1" size="lg" className="mt-8">
            Accessibility
          </Heading>
          <div className="mt-6 max-w-[65ch]">
            <LegalCallout />
          </div>
          <Prose className="mt-10">
            <p>
              {site.name} is committed to making this website usable by people
              with disabilities. The target standard is Web Content
              Accessibility Guidelines (WCAG) 2.1 Level AA. That means readable
              type, sufficient color contrast, keyboard access to navigation
              and forms, visible focus, captions or text alternatives for
              meaningful images, and forms that announce errors.
            </p>
            <h2>What we build for</h2>
            <p>
              Primary navigation can be operated with a keyboard. Menus expose
              expanded and collapsed state. Skip-to-content is available at the
              top of each page. Buttons and links have accessible names. Form
              fields have labels, and errors are tied to the field they
              describe. Decorative palm overlays and brand textures are hidden
              from assistive technology. This is an ongoing practice, not a
              badge we print on the homepage.
            </p>
            <h2>How to report an issue</h2>
            <p>
              If you have trouble using a page, email {site.email} with the
              subject line “Accessibility.” Please include the URL, the browser
              and device you were using, and what you were trying to do. We
              will reply and work to fix the barrier. We cannot promise a
              specific turnaround on every third-party widget (maps, analytics
              consent, or future booking tools), but we will not ignore a
              report about our own pages.
            </p>
            <p>
              If you need the Growth Plan or another document in an alternate
              format, say so in the same email. We serve Santa Barbara County
              businesses and want the site to work for the owners, staff, and
              customers who use it.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
