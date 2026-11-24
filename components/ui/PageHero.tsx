import Image from 'next/image';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { SealWatermark } from '@/components/ui/SealWatermark';
import { Breadcrumbs, type Crumb } from '@/components/layout/Breadcrumbs';
import type { SiteImage } from '@/data/images';
import { primaryCta as siteCta } from '@/data/navigation';
import {
  HERO_IMAGE_QUALITY,
  PAGE_HERO_IMAGE_SIZES,
} from '@/lib/heroImage';
import { cn } from '@/lib/utils';

type Cta = { href: string; label: string };

type PageHeroProps = {
  variant: 'photo' | 'split' | 'simple';
  eyebrow?: string;
  title: string;
  accent?: string;
  subhead?: string;
  breadcrumbs: Crumb[];
  image?: SiteImage;
  primaryCta?: Cta | null;
  secondaryCta?: Cta;
  compact?: boolean;
  chips?: string[];
  icon?: unknown;
  rightSlot?: ReactNode;
  disableReveal?: boolean;
  align?: 'start' | 'end';
  tightMobile?: boolean;
  /** Paint under the fixed header. Turn off when a visible sibling sits above the hero. */
  overlay?: boolean;
};

function HeroCopy({
  eyebrow,
  title,
  lastWord,
  subhead,
  breadcrumbs,
  resolvedCta,
  secondaryCta,
  showEyebrow,
  tightMobile,
}: {
  eyebrow?: string;
  title: string;
  lastWord?: string;
  subhead?: string;
  breadcrumbs: Crumb[];
  resolvedCta: Cta | null;
  secondaryCta?: Cta;
  showEyebrow: boolean;
  tightMobile: boolean;
}) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} light className="pt-4" />
      {showEyebrow ? (
        <Eyebrow dark className={cn(tightMobile ? 'mt-3 sm:mt-6' : 'mt-6')}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <Heading
        as="h1"
        className={cn(
          tightMobile ? 'mt-2 sm:mt-4 !text-cream' : 'mt-4 !text-cream',
          /* Accent words use ochre on dark heroes (tile fails on bright photo areas). */
          'drop-shadow-[0_1px_12px_rgba(11,31,51,0.45)] [&_em]:!text-ochre',
        )}
        accent={lastWord}
      >
        {title}
      </Heading>
      {subhead ? (
        <p
          className={cn(
            'max-w-xl text-base leading-[1.6] text-cream sm:text-lg',
            tightMobile ? 'mt-3 sm:mt-5' : 'mt-5',
          )}
        >
          {subhead}
        </p>
      ) : null}
      {resolvedCta || secondaryCta ? (
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          {resolvedCta ? (
            <Button href={resolvedCta.href}>{resolvedCta.label}</Button>
          ) : null}
          {secondaryCta ? (
            <Button variant="ghost" tone="dark" href={secondaryCta.href}>
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export function PageHero({
  variant,
  eyebrow,
  title,
  accent,
  subhead,
  breadcrumbs,
  image,
  primaryCta,
  secondaryCta,
  compact = false,
  rightSlot,
  disableReveal = false,
  align = 'end',
  tightMobile = false,
  overlay = true,
}: PageHeroProps) {
  const resolvedCta = primaryCta === undefined ? siteCta : primaryCta;
  const showPhoto = Boolean(image) && (variant === 'photo' || variant === 'split');
  const lastWord = accent ?? title.trim().split(/\s+/).pop();
  const lastCrumb = breadcrumbs[breadcrumbs.length - 1]?.label?.trim().toLowerCase();
  const showEyebrow =
    Boolean(eyebrow) && eyebrow!.trim().toLowerCase() !== (lastCrumb || '');

  const copyProps = {
    eyebrow,
    title,
    lastWord,
    subhead,
    breadcrumbs,
    resolvedCta,
    secondaryCta,
    showEyebrow,
    tightMobile,
  };

  return (
    <section
      className={cn(
        'hero-pad relative overflow-hidden bg-navy',
        overlay && 'hero-overlay',
        compact && 'hero-pad-compact',
        !compact && 'md:min-h-[56vh]',
      )}
    >
      {showPhoto && image ? (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-y-0 right-0 w-full lg:w-5/12">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              fetchPriority="high"
              loading="eager"
              quality={HERO_IMAGE_QUALITY}
              sizes={PAGE_HERO_IMAGE_SIZES}
              className="object-cover"
              style={{ objectPosition: image.focalPoint }}
            />
          </div>
          {/* Mobile: lighter overall wash; keep a stronger bottom-left text scrim. */}
          <div
            className="absolute inset-0 bg-[rgba(11,31,51,0.68)] lg:hidden"
            aria-hidden="true"
          />
          {/* Desktop: photo shows through on the right; scrim the text column. */}
          <div
            className="absolute inset-0 hidden bg-gradient-to-r from-[rgba(11,31,51,0.82)] via-[rgba(11,31,51,0.55)] via-48% to-transparent to-72% lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[rgba(11,31,51,0.8)] via-[rgba(11,31,51,0.12)] to-[rgba(11,31,51,0.32)] lg:from-[rgba(11,31,51,0.4)] lg:via-transparent lg:to-transparent"
            aria-hidden="true"
          />
        </div>
      ) : (
        <SealWatermark className="absolute top-10 right-0 h-[420px] w-[min(420px,100%)] max-w-full opacity-[0.06]" />
      )}
      <div
        className={cn(
          'relative z-[1] mx-auto grid max-w-[1440px] px-6 lg:grid-cols-12 lg:px-14',
          align === 'start' ? 'items-start' : 'items-end',
          compact ? 'pb-10' : 'min-h-[56vh] pb-16',
        )}
      >
        {disableReveal ? (
          <div className="min-w-0 lg:col-span-7">
            <HeroCopy {...copyProps} />
          </div>
        ) : (
          <Reveal className="min-w-0 lg:col-span-7">
            <HeroCopy {...copyProps} />
          </Reveal>
        )}
        {rightSlot ? (
          <div className="mt-10 min-w-0 lg:mt-0 lg:col-span-5 lg:col-start-8">
            {rightSlot}
          </div>
        ) : null}
      </div>
    </section>
  );
}
