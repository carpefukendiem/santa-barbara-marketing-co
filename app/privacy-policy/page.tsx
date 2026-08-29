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
  title: 'Privacy Policy',
  description:
    'How Santa Barbara Marketing Co. handles form data, analytics, cookies, and California privacy rights. Starter policy, pending attorney review.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
        ])}
      />
      <Section className="bg-sbmc-cream">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Privacy Policy' },
            ]}
          />
          <Heading as="h1" size="lg" className="mt-8">
            Privacy Policy
          </Heading>
          <div className="mt-6 max-w-[65ch]">
            <LegalCallout />
          </div>
          <Prose className="mt-10">
            <p>
              This policy describes how {site.name} (“we”) collects and uses
              information when you visit {site.url} or submit a form. We do not
              sell personal information. We do not have a verified street
              address to list here. Contact us at {site.email}.
            </p>
            <h2>Form data</h2>
            <p>
              Growth Plan and contact forms collect the fields you choose to
              provide: name, business name, email, phone, website, primary goal,
              and a short description of your marketing challenge. We use that
              information to write and deliver the plan, to reply to your
              message, and to follow up about working together if you ask us
              to. We do not add you to a promotional drip sequence because you
              submitted a form.
            </p>
            <p>
              Forms include an anti-spam honeypot and a minimum time-on-form
              check. Those fields are used only to reject automated submissions.
              Lead data is sent to the provider configured for this site (for
              example a CRM or email webhook). If no production provider is
              configured, submissions are logged in a development environment
              only.
            </p>
            <h2>Analytics</h2>
            <p>
              If analytics scripts are enabled, we may use tools such as Google
              Analytics or a tag manager to understand which pages are used,
              which devices load the site, and which calls-to-action are
              clicked. Analytics is configured through environment variables.
              When those variables are empty, the scripts are not loaded. We do
              not use analytics to build a credit or employment profile.
            </p>
            <h2>Cookies</h2>
            <p>
              Essential cookies may be set by the site host to deliver the page
              securely. Analytics and advertising cookies, if enabled, are set
              by those third parties. You can control cookies in your browser.
              Blocking cookies may affect measurement, not the core content of
              the site.
            </p>
            <h2>Third parties</h2>
            <p>
              Depending on configuration, we may share form submissions with a
              CRM (such as GoHighLevel or HubSpot), an email provider (such as
              Resend), or a webhook you control. Hosting and content delivery
              may be provided by Vercel or a similar host. Google may process
              analytics or ads conversion data if those products are turned on.
              Each provider has its own privacy policy. We do not sell your
              information to data brokers.
            </p>
            <h2>CCPA / CPRA</h2>
            <p>
              If you are a California resident, you may request to know what
              personal information we have collected about you, request
              deletion, request correction, and opt out of sale or sharing of
              personal information. We do not sell personal information as that
              term is commonly understood, and we do not use it for
              cross-context behavioral advertising unless a future ads
              configuration requires a separate disclosure. To exercise rights,
              email {site.email} with the subject line “Privacy request.” We
              will verify the request with the email address you used on the
              site.
            </p>
            <h2>Retention</h2>
            <p>
              Form submissions are kept as long as needed to deliver the Growth
              Plan or respond to a contact request, and then as long as needed
              for legitimate business records (typically up to 24 months unless
              a longer period is required for a contract or dispute). Analytics
              data follows the retention settings of the analytics product in
              use. You may ask us to delete your form data by emailing{' '}
              {site.email}.
            </p>
            <h2>Contact</h2>
            <p>
              Privacy questions go to {site.email}. We serve Santa Barbara,
              Goleta, Montecito, and Carpinteria. Do not send sensitive medical
              information or payment card data through the marketing forms on
              this site.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
