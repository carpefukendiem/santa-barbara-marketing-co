import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { SealWatermark } from '@/components/ui/SealWatermark';
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
    <section className="relative overflow-hidden bg-tile py-24 lg:py-36">
      <SealWatermark
        size={600}
        className="absolute -right-24 top-1/2 h-[600px] w-[600px] -translate-y-1/2 opacity-[0.08]"
      />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-14">
        <Reveal>
          <Heading as="h2" className="text-7xl !text-cream">
            {heading}
          </Heading>
          <p className="mt-4 max-w-xl text-lg text-cream/80">{subline}</p>
          <div className="mt-8">
            <Button href={ctaHref} className="!bg-cream !text-tile">
              {ctaLabel}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export const CTABand = CtaBand;
