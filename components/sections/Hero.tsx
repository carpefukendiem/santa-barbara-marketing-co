import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { HeroHeadline } from '@/components/sections/HeroHeadline';
import { SealWatermark } from '@/components/ui/SealWatermark';
import { photos } from '@/data/images';
import { primaryCta } from '@/data/navigation';
import { trustCapabilities } from '@/data/trust';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-navy">
      <div className="absolute inset-0 lg:grid lg:grid-cols-12">
        <div className="hidden lg:col-span-7 lg:block" />
        <div className="absolute inset-0 lg:relative lg:col-span-5">
          <Image
            src={photos.hero.src}
            alt={photos.hero.alt}
            fill
            priority
            fetchPriority="high"
            quality={78}
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
            style={{ objectPosition: photos.hero.focalPoint }}
          />
          <div
            className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-[--navy] via-[--navy]/60 to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-navy/50 lg:hidden"
            aria-hidden="true"
          />
        </div>
      </div>
      <SealWatermark className="absolute -bottom-40 -left-24 h-[560px] w-[560px]" />
      <div className="relative z-[2] mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-6 pb-24 pt-32 lg:grid lg:grid-cols-12 lg:items-end lg:px-14 lg:pb-28">
        <div className="lg:col-span-7">
          <Eyebrow dark>Digital marketing for a stronger, local Santa Barbara</Eyebrow>
          <HeroHeadline />
          <p className="mt-6 max-w-lg text-xl text-cream/70">
            Strategy, websites, and marketing that help Santa Barbara businesses
            get found, get chosen, and grow.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button variant="ghost" tone="dark" href="/services">
              Our Services
            </Button>
          </div>
        </div>
      </div>
      <div className="relative z-[2] border-t border-cream/20">
        <p className="mx-auto max-w-[1440px] px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-cream/60 lg:px-14">
          {trustCapabilities.map((item) => item.label).join(' · ')}
        </p>
      </div>
    </section>
  );
}
