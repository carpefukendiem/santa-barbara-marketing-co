import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { HeroHeadline } from '@/components/sections/HeroHeadline';
import { SealWatermark } from '@/components/ui/SealWatermark';
import { photos } from '@/data/images';
import { primaryCta } from '@/data/navigation';
import { trustCapabilities } from '@/data/trust';
import { OfferPanel } from '@/components/offer/OfferPanel';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
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
      <SealWatermark className="absolute -bottom-40 -left-24 h-[480px] w-[480px]" />
      <div className="relative z-[2] mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-6 px-6 pb-10 pt-24 max-md:pt-[calc(env(safe-area-inset-top,0px)+84px)] lg:min-h-[78svh] lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-14 lg:pb-20 lg:pt-32">
        <div className="flex flex-col lg:col-span-7 max-md:min-h-0">
          <Eyebrow dark className="tracking-[0.12em] sm:tracking-[0.16em] mt-2 sm:mt-3">
            <span className="sm:hidden">Digital marketing · Santa Barbara</span>
            <span className="hidden sm:inline">Digital marketing · Santa Barbara, CA</span>
          </Eyebrow>
          <HeroHeadline />
          {/* Mobile: shorter description; Desktop: fuller version */}
          <p className="mt-2 max-w-lg text-[15px] leading-snug text-cream/80 sm:hidden">
            Local SEO, Google Ads, and websites that make the phone ring in the 805.
          </p>
          <p className="mt-3 hidden max-w-lg text-lg text-cream/75 sm:block">
            Local SEO, Google Ads, and websites that make the phone ring — for businesses from Carpinteria to Goleta, built by someone who’ll meet you for coffee.
          </p>
          {/* Keep call as a quieter secondary on desktop only */}
          <div className="mt-5 hidden items-start lg:flex">
            <Button variant="ghost" tone="dark" href={primaryCta.href}>
              {primaryCta.label}
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <OfferPanel className="lg:sticky lg:top-8" />
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
