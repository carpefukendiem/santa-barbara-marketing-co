import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { primaryCta } from '@/data/navigation';

export function CtaBand({
  heading = "Let's Grow Your Business.",
  subline = 'Strategy. Marketing. Real Results.',
  ctaLabel = primaryCta.label,
  ctaHref = primaryCta.href,
}: {
  heading?: string;
  subline?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-tile">
      <div className="cta-noise pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:py-28">
        <Reveal>
          <Heading as="h2" className="!text-white">
            {heading}
          </Heading>
          <p className="mt-3 text-lg text-white/85">{subline}</p>
        </Reveal>
        <Button
          href={ctaHref}
          className="!bg-white !text-navy hover:!bg-sand hover:!text-navy"
        >
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}

export const CTABand = CtaBand;
