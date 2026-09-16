import { FAQAccordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/forms/ContactForm';
import { homepageFaqs } from '@/data/faqs';
import { site } from '@/data/site';

export function FaqContact() {
  return (
    <>
      <Section bg="white">
        <Reveal>
          <Eyebrow>Common questions</Eyebrow>
          <Heading className="mt-4">You Have Questions. We Have Answers.</Heading>
          <FAQAccordion className="mt-8" items={homepageFaqs} />
          <div className="mt-6">
            <Button variant="ghost" href="/faq">
              See all FAQs
            </Button>
          </div>
        </Reveal>
      </Section>
      <Section bg="sand">
        <Reveal>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>{`Let's talk`}</Eyebrow>
              <Heading className="mt-4">Ready to Grow?</Heading>
              <p className="mt-4 text-lg text-stone">
                Tell us about the business. We will reply with a next step, not a
                drip sequence.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-6 inline-block text-ocean underline underline-offset-4"
              >
                {site.email}
              </a>
            </div>
            <ContactForm />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
