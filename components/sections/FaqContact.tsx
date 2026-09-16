import { FAQAccordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/forms/ContactForm';
import { homepageFaqs } from '@/data/faqs';
import { site } from '@/data/site';
import { telHref } from '@/lib/utils';

export function FaqContact() {
  return (
    <>
      <Section>
        <Reveal>
          <div className="max-w-4xl">
            <Eyebrow>Common questions</Eyebrow>
            <Heading className="mt-4">You Have Questions. We Have Answers.</Heading>
            <FAQAccordion className="mt-8" items={homepageFaqs} />
            <div className="mt-6">
              <Button variant="ghost" href="/faq">
                See all FAQs
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
      <Section bg="navy">
        <Reveal>
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow dark>{`Let's talk`}</Eyebrow>
              <Heading className="mt-4 !text-cream">Ready to Grow?</Heading>
              <p className="mt-4 text-lg text-cream/70">
                Tell us about the business. We will reply with a next step, not a
                drip sequence.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-6 inline-block font-mono text-sm text-cream underline underline-offset-4"
              >
                {site.email}
              </a>
              {site.phone ? (
                <a
                  href={telHref(site.phone)}
                  className="mt-3 block font-mono text-sm text-cream/70"
                >
                  {site.phone}
                </a>
              ) : null}
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
