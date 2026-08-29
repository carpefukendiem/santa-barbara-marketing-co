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
  title: 'Terms of Use',
  description:
    'Terms of use for Santa Barbara Marketing Co. services, payment, intellectual property, and liability, governed by California law. Starter content.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Terms', path: '/terms' },
        ])}
      />
      <Section className="bg-sbmc-cream">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Terms' },
            ]}
          />
          <Heading as="h1" size="lg" className="mt-8">
            Terms of Use
          </Heading>
          <div className="mt-6 max-w-[65ch]">
            <LegalCallout />
          </div>
          <Prose className="mt-10">
            <p>
              These terms govern use of {site.url} and, when we send a written
              proposal you accept, the marketing services of {site.name}. If a
              signed proposal conflicts with this page, the proposal controls
              for that engagement. Contact {site.email} with questions.
            </p>
            <h2>Services</h2>
            <p>
              We provide digital marketing services that may include Local SEO,
              search engine optimization, Google Ads management, website design
              and development, conversion work, Google Business Profile support,
              automation, analytics, and strategy. Scope, timeline, and fees
              are defined in a written proposal. The Free 805 Growth Plan is a
              complimentary document and a walkthrough call. It is not a
              promise of rankings, revenue, or a later discount.
            </p>
            <p>
              We do not guarantee search rankings, Map Pack placement, ad
              costs, or a volume of leads. Search engines, ad auctions, and
              your own response time affect outcomes. You remain responsible
              for the accuracy of business information, license numbers, offers,
              and claims we are asked to publish.
            </p>
            <h2>Payment</h2>
            <p>
              Fees, media spend, and payment schedule are stated in the
              proposal. Media spend for advertising platforms is billed by
              those platforms to you unless we agree otherwise in writing. Our
              fee is for management and production, not a markup we hide.
              Invoices are due as stated. Work may pause if invoices remain
              unpaid. The Growth Plan does not require a credit card.
            </p>
            <h2>Intellectual property</h2>
            <p>
              You keep ownership of materials you supply (logos, photos, copy,
              product data). We keep ownership of our pre-existing tools,
              components, and methods. Upon full payment, you receive a license
              to use original deliverables produced for you in connection with
              your business. We may display non-confidential work in our
              portfolio only with your permission. You may not copy this
              website’s design or copy as a template for another agency site.
            </p>
            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, {site.name} is not liable
              for indirect, incidental, special, consequential, or punitive
              damages, or for lost profits, lost leads, or lost data, arising
              from the site or from services. Our total liability for a paid
              engagement is limited to the fees you paid us for that engagement
              in the three months before the claim. Some California rules do
              not allow certain limitations. Those limitations apply only to
              the extent allowed.
            </p>
            <p>
              The website is provided as-is. We are not liable for third-party
              platforms (Google, hosting, CRMs) going down, changing their
              products, or suspending a listing for reasons outside our
              control.
            </p>
            <h2>California law</h2>
            <p>
              These terms are governed by the laws of the State of California,
              without regard to conflict-of-law rules. Courts located in Santa
              Barbara County, California, have exclusive jurisdiction, except
              where applicable law requires otherwise. If a provision is
              unenforceable, the rest remains in effect.
            </p>
            <p>
              We serve businesses in Santa Barbara County. Using the site from
              elsewhere does not create an office or a street address we have
              not published.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
