import Image from 'next/image';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { photos } from '@/data/images';
import { site } from '@/data/site';
import { primaryCta } from '@/data/navigation';

const proofChips = [
  `Santa Barbara · Est. ${site.founded}`,
  'No long-term contracts',
  'Lighthouse 95+ target on this site',
];

const planRows = ['w-[88%]', 'w-[72%]', 'w-[60%]'];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
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
        className="absolute inset-0 z-[2] bg-gradient-to-t from-navy via-navy/70 to-navy/20"
        aria-hidden="true"
      />
      <div className="relative z-[3] mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-28 lg:pb-20">
        <Reveal className="max-w-3xl">
          <Eyebrow dark>Digital marketing for a stronger, local Santa Barbara</Eyebrow>
          <Heading as="h1" className="mt-5 !text-white" accent="Stronger">
            More Visibility. Better Customers. A Stronger Tomorrow.
          </Heading>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Strategy, websites, and marketing that help Santa Barbara businesses
            get found, get chosen, and grow.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button variant="secondary" tone="dark" href="/services">
              Our Services
            </Button>
          </div>
        </Reveal>
      </div>
      <div className="pointer-events-none absolute top-[22%] right-8 z-[3] hidden w-64 flex-col gap-3 lg:flex">
        {proofChips.map((chip, index) => (
          <Chip
            key={chip}
            dark
            className={index === 1 ? 'rotate-[1.5deg]' : 'rotate-[-1deg]'}
          >
            {chip}
          </Chip>
        ))}
      </div>
      <div className="absolute right-8 bottom-16 z-[3] hidden w-72 rounded-2xl bg-white p-5 shadow-xl lg:block">
        <p className="text-xs font-medium tracking-[0.18em] text-ocean uppercase">
          Sample 90-Day Growth Plan
        </p>
        <ul className="mt-4 space-y-3">
          {planRows.map((width) => (
            <li key={width} className="flex items-center gap-3">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                <Check size={12} aria-hidden="true" />
              </span>
              <span className={`h-2 rounded bg-sand ${width}`} />
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-stone">
          Written by a person. Delivered in 3 business days.
        </p>
      </div>
    </section>
  );
}
