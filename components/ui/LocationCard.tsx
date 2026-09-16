import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { cn } from '@/lib/utils';
import type { SiteImage } from '@/data/images';

export type LocationCardProps = {
  href: string;
  city: string;
  tagline: string;
  image: SiteImage;
  className?: string;
};

export function LocationCard({
  href,
  city,
  tagline,
  image,
  className,
}: LocationCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative block aspect-[4/5] min-w-[240px] overflow-hidden rounded-2xl',
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 25vw"
        quality={78}
        className="photo-treatment object-cover transition-transform duration-700 ease-sbmc group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        style={{ objectPosition: image.focalPoint }}
      />
      {image.needsHighRes ? <GrainOverlay /> : null}
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-t from-navy via-navy/35 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 z-[3] flex items-end justify-between gap-3 p-5">
        <div>
          <p className="font-display text-2xl text-white">{city}</p>
          <p className="mt-1 text-sm text-white/75">{tagline}</p>
        </div>
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur">
          <ArrowUpRight size={18} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
