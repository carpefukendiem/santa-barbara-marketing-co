import Link from 'next/link';
import { Chip } from '@/components/ui/Chip';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { industries } from '@/data/industries';

export function IndustriesStrip() {
  return (
    <Section bg="sand">
      <Reveal>
        <div className="text-center">
          <Eyebrow align="center">Who we work with</Eyebrow>
          <Heading className="mt-4">Industries we know how to market.</Heading>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <Chip
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="px-6 py-3 text-base"
            >
              {industry.navLabel}
            </Chip>
          ))}
        </div>
        <p className="mt-8 text-center text-stone">
          Not on the list? Most of what we do transfers.{' '}
          <Link href="/contact" className="font-medium text-ocean underline underline-offset-4">
            Tell us about your business.
          </Link>
        </p>
      </Reveal>
    </Section>
  );
}
