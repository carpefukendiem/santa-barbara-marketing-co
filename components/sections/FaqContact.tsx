import Image from 'next/image';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ContactForm } from '@/components/forms/ContactForm';
import { homepageFaqs } from '@/data/faqs';
import { decor } from '@/data/images';

export function FaqContact() {
  return (
    <Section className="relative overflow-hidden bg-sbmc-cream">
      <Image
        src={decor.palmFrondLeft.src}
        alt=""
        width={decor.palmFrondLeft.width}
        height={decor.palmFrondLeft.height}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden w-40 opacity-[0.08] md:block"
      />
      <Image
        src={decor.palmFrondCenter.src}
        alt=""
        width={decor.palmFrondCenter.width}
        height={decor.palmFrondCenter.height}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 hidden w-40 scale-x-[-1] opacity-[0.08] md:block"
      />
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionEyebrow align="left">Common questions</SectionEyebrow>
            <Heading className="mt-4">You Have Questions. We Have Answers.</Heading>
            <Accordion className="mt-8" items={homepageFaqs} />
            <div className="mt-6">
              <Button variant="link" href="/faq">
                See all FAQs
              </Button>
            </div>
          </div>
          <div>
            <SectionEyebrow align="left">{`Let's talk`}</SectionEyebrow>
            <Heading className="mt-4">Ready to Grow?</Heading>
            <p className="mt-4 text-body-lg text-sbmc-ink-muted">
              Tell us about the business. We will reply with a next step, not a
              drip sequence.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
