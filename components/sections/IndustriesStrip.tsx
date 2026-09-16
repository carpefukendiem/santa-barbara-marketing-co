import Link from 'next/link';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { industries } from '@/data/industries';

export function IndustriesStrip() {
  return (
    <Section>
      <Reveal>
        <Heading>Industries we know how to market.</Heading>
        <p className="mt-10 font-display text-5xl font-light leading-tight">
          {industries.map((industry, index) => (
            <span key={industry.slug}>
              {index > 0 ? <span className="text-ochre"> / </span> : null}
              <Link
                href={`/industries/${industry.slug}`}
                className="underline-offset-8 hover:underline hover:decoration-tile"
              >
                {industry.navLabel}
              </Link>
            </span>
          ))}
        </p>
        <p className="mt-8 text-stone">
          Not on the list? Most of what we do transfers.{' '}
          <Link href="/contact" className="underline underline-offset-4">
            Tell us about your business.
          </Link>
        </p>
      </Reveal>
    </Section>
  );
}
