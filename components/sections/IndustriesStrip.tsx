import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { industries } from '@/data/industries';

export function IndustriesStrip() {
  return (
    <Section className="bg-sbmc-cream py-20">
      <Container>
        <SectionEyebrow>Who we work with</SectionEyebrow>
        <Heading className="mt-4 text-center">Industries we know how to market.</Heading>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="rounded-[12px] border border-sbmc-border bg-sbmc-white px-5 py-6 text-center font-sans text-[0.78rem] font-bold uppercase tracking-[0.08em] text-sbmc-navy shadow-card transition-[box-shadow,transform] duration-300 ease-sbmc hover:-translate-y-0.5 hover:shadow-lift"
            >
              {industry.navLabel}
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-body-sm text-sbmc-ink-muted">
          Not on the list? Most of what we do transfers.{' '}
          <Link href="/contact" className="font-medium text-sbmc-teal">
            Tell us about your business.
          </Link>
        </p>
      </Container>
    </Section>
  );
}
