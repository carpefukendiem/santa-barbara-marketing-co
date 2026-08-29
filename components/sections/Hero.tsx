import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { photos } from '@/data/images';
import { primaryCta } from '@/data/navigation';

export function Hero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden md:min-h-[clamp(640px,84vh,860px)]">
      <Image
        src={photos.hero.src}
        alt={photos.hero.alt}
        fill
        priority
        fetchPriority="high"
        quality={78}
        sizes="100vw"
        className="photo-treatment object-cover"
        style={{ objectPosition: photos.hero.focalPoint }}
      />
      <GrainOverlay />
      <div className="hero-scrim absolute inset-0 z-[2]" aria-hidden="true" />
      <p
        className="font-script absolute right-[5%] top-[11%] z-[3] hidden text-[clamp(1.7rem,2.1vw,2.45rem)] leading-tight text-white [text-shadow:0_2px_14px_rgb(5_33_54/0.65),0_0_24px_rgb(5_33_54/0.35)] xl:block"
        aria-hidden="true"
      >
        Same Community. Bigger Opportunities.
      </p>
      <div className="relative z-[3] mx-auto flex max-w-[1200px] flex-col justify-center px-5 py-16 md:px-8 lg:min-h-[clamp(640px,84vh,860px)] lg:px-10">
        <div className="relative max-w-[42rem] lg:max-w-[46rem]">
          <div
            className="pointer-events-none absolute -inset-x-3 -inset-y-4 z-0 rounded-2xl bg-sbmc-cream md:hidden"
            aria-hidden="true"
          />
          <div className="relative z-[1]">
          <p className="text-eyebrow text-[0.8125rem] tracking-[0.14em] text-sbmc-navy">
            Digital marketing for a stronger, local Santa Barbara
          </p>
          <h1 className="text-hero-display mt-5 max-w-full text-sbmc-navy">
            <span className="block">More Visibility.</span>
            <span className="block">Better Customers.</span>
            <span className="block">A Stronger Tomorrow.</span>
          </h1>
          <p className="text-hero-lede mt-6 max-w-[36rem] text-sbmc-navy">
            Strategy, websites, and marketing that help Santa Barbara businesses
            get found, get chosen, and grow.
          </p>
          <div className="mt-9 flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
            <Button href={primaryCta.href} className="w-full sm:w-auto">
              {primaryCta.label}
            </Button>
            <Button variant="secondary" href="/services" className="w-full sm:w-auto">
              Our Services
            </Button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
