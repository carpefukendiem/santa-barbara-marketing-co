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
};

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
}: PageHeroProps) {
  const resolvedCta = primaryCta === undefined ? siteCta : primaryCta;
  const showPhoto = Boolean(image) && (variant === 'photo' || variant === 'split');
  const lastWord = accent ?? title.trim().split(/\s+/).pop();
  const lastCrumb = breadcrumbs[breadcrumbs.length - 1]?.label?.trim().toLowerCase();
  const showEyebrow =
    Boolean(eyebrow) && eyebrow!.trim().toLowerCase() !== (lastCrumb || '');

  return (
    <section
      className={cn(
        'relative overflow-hidden bg-navy',
        compact ? 'pt-28 md:pt-40' : 'md:min-h-[56vh] pt-32 md:pt-44',
      )}
    >
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
      <div
        className={cn(
          'relative z-[1] mx-auto grid max-w-[1440px] px-6 lg:grid-cols-12 lg:px-14',
          align === 'start' ? 'items-start' : 'items-end',
          compact ? 'pb-10' : 'min-h-[56vh] pb-16',
        )}
      >
        {disableReveal ? (
          <div className="lg:col-span-7">
            <Breadcrumbs items={breadcrumbs} light className="pt-4" />
            {showEyebrow ? (
              <Eyebrow dark className={cn(tightMobile ? 'mt-3 sm:mt-6' : 'mt-6')}>
                {eyebrow}
              </Eyebrow>
            ) : null}
            <Heading
              as="h1"
              className={cn(tightMobile ? 'mt-2 sm:mt-4 !text-cream' : 'mt-4 !text-cream')}
              accent={lastWord}
            >
              {title}
            </Heading>
            {subhead ? (
              <p
                className={cn(
                  'max-w-xl text-lg text-cream/70',
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
          </div>
        ) : (
          <Reveal className="lg:col-span-7">
          <Breadcrumbs items={breadcrumbs} light className="pt-4" />
          {showEyebrow ? (
            <Eyebrow dark className={cn(tightMobile ? 'mt-3 sm:mt-6' : 'mt-6')}>
              {eyebrow}
            </Eyebrow>
          ) : null}
          <Heading
            as="h1"
            className={cn(tightMobile ? 'mt-2 sm:mt-4 !text-cream' : 'mt-4 !text-cream')}
            accent={lastWord}
          >
            {title}
          </Heading>
          {subhead ? (
            <p
              className={cn(
                'max-w-xl text-lg text-cream/70',
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
        </Reveal>
        )}
        {rightSlot ? (
          <div className="mt-10 lg:mt-0 lg:col-span-5 lg:col-start-8">
            {rightSlot}
          </div>
        ) : null}
      </div>
    </section>
  );
}
