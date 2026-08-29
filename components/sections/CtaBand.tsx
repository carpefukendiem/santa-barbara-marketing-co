import { Button } from '@/components/ui/Button';
import { IconSun } from '@/components/icons';
import { decor } from '@/data/images';
import { primaryCta } from '@/data/navigation';

export function CtaBand({
  heading = "Let's Grow Your Business.",
  subline = 'Strategy. Marketing. Real Results.',
}: {
  heading?: string;
  subline?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-sbmc-navy-deep">
      <div
        className="absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${decor.ctaWave.src})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-5 py-[clamp(3rem,6vw,4.5rem)] md:flex-row md:items-center md:px-8 lg:px-10">
        <div className="flex items-start gap-4">
          <span className="mt-1 text-sbmc-peach">
            <IconSun size={36} />
          </span>
          <div>
            <h2 className="text-display-md text-white md:text-display-lg">{heading}</h2>
            <p className="mt-2 text-body-lg text-white/80">{subline}</p>
          </div>
        </div>
        <Button href={primaryCta.href} tone="dark">
          {primaryCta.label}
        </Button>
      </div>
    </section>
  );
}
