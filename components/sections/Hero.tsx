import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { photos } from '@/data/images';
import { primaryCta } from '@/data/navigation';

export function Hero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden md:min-h-[clamp(560px,78vh,760px)]">
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
      <div
        className="absolute inset-0 z-[2] bg-[linear-gradient(to_bottom,rgb(248_244_237/0.97)_0%,rgb(248_244_237/0.88)_42%,rgb(248_244_237/0.4)_72%,transparent_100%)] md:bg-[linear-gradient(100deg,rgb(248_244_237/0.97)_0%,rgb(248_244_237/0.88)_32%,rgb(248_244_237/0.35)_52%,transparent_72%)]"
        aria-hidden="true"
      />
      <p
        className="font-script absolute right-10 top-10 z-[3] hidden text-2xl text-sbmc-navy xl:block"
        aria-hidden="true"
      >
        Same Community. Bigger Opportunities.
      </p>
      <div className="relative z-[3] mx-auto flex max-w-[1200px] flex-col justify-center px-5 py-16 md:px-8 lg:min-h-[clamp(560px,78vh,760px)] lg:px-10">
        <p className="text-eyebrow text-sbmc-teal">
          Digital marketing for a stronger, local Santa Barbara
        </p>
        <h1 className="mt-4 max-w-3xl text-display-lg text-sbmc-navy-soft md:text-display-xl">
          More Visibility.
          <br />
          Better Customers.
          <br />
          A Stronger Tomorrow.
        </h1>
        <p className="mt-6 max-w-[36rem] text-body-lg text-sbmc-ink">
          Strategy, websites, and marketing that help Santa Barbara businesses
          get found, get chosen, and grow.
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
          <Button href={primaryCta.href} className="w-full sm:w-auto">
            {primaryCta.label}
          </Button>
          <Button variant="secondary" href="/services" className="w-full sm:w-auto">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
