import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { SealWatermark } from '@/components/ui/SealWatermark';
import { Breadcrumbs, type Crumb } from '@/components/layout/Breadcrumbs';
import type { SiteImage } from '@/data/images';
import { primaryCta as siteCta } from '@/data/navigation';

type Cta = { href: string; label: string };

type PageHeroProps = {
  variant: 'photo' | 'split' | 'simple';
  eyebrow?: string;
  title: string;
  accent?: string;
  subhead?: string;
  breadcrumbs: Crumb[];
  image?: SiteImage;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  chips?: string[];
  icon?: unknown;
};

export function PageHero({
  variant,
  eyebrow,
  title,
  accent,
  subhead,
  breadcrumbs,
  image,
  primaryCta = siteCta,
  secondaryCta,
}: PageHeroProps) {
  const showPhoto = Boolean(image) && (variant === 'photo' || variant === 'split');
  const lastWord = accent ?? title.trim().split(/\s+/).pop();

  return (
    <section className="relative min-h-[56vh] overflow-hidden bg-navy pt-28">
      {showPhoto && image ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-5/12">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            quality={78}
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
            style={{ objectPosition: image.focalPoint }}
          />
          <div
            className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-[--navy] via-[--navy]/60 to-transparent"
            aria-hidden="true"
          />
        </div>
      ) : (
        <SealWatermark className="absolute -right-20 top-10 h-[420px] w-[420px] opacity-[0.06]" />
      )}
      <div className="relative z-[1] mx-auto grid min-h-[56vh] max-w-[1440px] items-end px-6 pb-16 lg:grid-cols-12 lg:px-14">
        <Reveal className="lg:col-span-7">
          <Breadcrumbs items={breadcrumbs} light />
          {eyebrow ? (
            <Eyebrow dark className="mt-6">
              {eyebrow}
            </Eyebrow>
          ) : null}
          <Heading as="h1" className="mt-4 !text-cream" accent={lastWord}>
            {title}
          </Heading>
          {subhead ? (
            <p className="mt-5 max-w-xl text-lg text-cream/70">{subhead}</p>
          ) : null}
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            {primaryCta ? (
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
            ) : null}
            {secondaryCta ? (
              <Button variant="ghost" tone="dark" href={secondaryCta.href}>
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
