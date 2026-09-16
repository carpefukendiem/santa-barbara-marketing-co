import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { Breadcrumbs, type Crumb } from '@/components/layout/Breadcrumbs';
import type { SiteImage } from '@/data/images';

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
  icon?: LucideIcon;
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
  chips = [],
  icon: Icon,
}: PageHeroProps) {
  if (variant === 'photo' && image) {
    return (
      <section className="relative min-h-[60vh] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          quality={78}
          sizes="100vw"
          className="photo-treatment object-cover"
          style={{ objectPosition: image.focalPoint }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/25"
          aria-hidden="true"
        />
        <div className="relative z-[1] mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-6 py-16">
          <Reveal>
            <Breadcrumbs items={breadcrumbs} light />
            {eyebrow ? (
              <Eyebrow dark className="mt-6">
                {eyebrow}
              </Eyebrow>
            ) : null}
            <Heading as="h1" className="mt-4 max-w-3xl !text-white" accent={accent}>
              {title}
            </Heading>
            {subhead ? (
              <p className="mt-5 max-w-2xl text-lg text-white/80">{subhead}</p>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              ) : null}
              {secondaryCta ? (
                <Button variant="secondary" tone="dark" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  if (variant === 'split') {
    return (
      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <Reveal>
            <Breadcrumbs items={breadcrumbs} />
            {eyebrow ? <Eyebrow className="mt-6">{eyebrow}</Eyebrow> : null}
            <Heading as="h1" className="mt-4 text-navy" accent={accent}>
              {title}
            </Heading>
            {subhead ? (
              <p className="mt-5 max-w-xl text-lg text-stone">{subhead}</p>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              ) : null}
              {secondaryCta ? (
                <Button variant="secondary" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </Reveal>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy p-8 min-h-[280px]">
              {Icon ? (
                <Icon
                  className="pointer-events-none absolute -right-6 -bottom-6 h-56 w-56 text-white opacity-10"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative z-[1] flex flex-wrap gap-3">
                {chips.map((chip) => (
                  <Chip key={chip} dark>
                    {chip}
                  </Chip>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <Breadcrumbs items={breadcrumbs} />
          {eyebrow ? <Eyebrow className="mt-6">{eyebrow}</Eyebrow> : null}
          <Heading as="h1" className="mt-4 text-navy" accent={accent}>
            {title}
          </Heading>
          {subhead ? <p className="mt-5 text-lg text-stone">{subhead}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}
