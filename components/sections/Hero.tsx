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
    <section className="relative bg-navy">
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
      <div className="relative z-[2] mx-auto grid min-h-[72svh] max-w-[1440px] grid-cols-1 items-center gap-8 px-6 pb-16 pt-28 max-md:pt-[calc(env(safe-area-inset-top,0px)+84px)] lg:min-h-[82svh] lg:grid-cols-12 lg:px-14 lg:pb-20 lg:pt-32">
        <div className="flex flex-col lg:col-span-7 max-md:min-h-0">
          <Eyebrow dark>Digital marketing · Santa Barbara, CA</Eyebrow>
          <HeroHeadline />
          <p className="mt-4 max-w-lg text-lg text-cream/75 max-md:line-clamp-3">
            Local SEO, Google Ads, and websites that make the phone ring — for
            businesses from Carpinteria to Goleta, built by someone who’ll meet
            you for coffee.
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 md:flex-row md:items-center">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button variant="ghost" tone="dark" href="/services">
              Our Services
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
