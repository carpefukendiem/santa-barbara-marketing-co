import Image from 'next/image';
import Link from 'next/link';
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
        'group relative block aspect-[4/3] min-w-[240px] overflow-hidden rounded-[12px]',
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 25vw"
        quality={78}
        className="photo-treatment object-cover transition-transform duration-400 ease-sbmc group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        style={{ objectPosition: image.focalPoint }}
      />
      {image.needsHighRes ? <GrainOverlay /> : null}
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-t from-[rgb(5_33_54/0.85)] from-0% via-[rgb(5_33_54/0.35)] via-35% to-transparent to-65% transition-colors duration-300 group-hover:from-[rgb(5_33_54/0.92)]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 z-[3] p-5">
        <p className="font-sans text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-white">
          {city}
        </p>
        <p className="mt-1 text-body-sm text-white/80">{tagline}</p>
      </div>
    </Link>
  );
}
