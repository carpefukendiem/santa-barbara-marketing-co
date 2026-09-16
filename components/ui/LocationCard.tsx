import Image from 'next/image';
import Link from 'next/link';
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
    <Link href={href} className={cn('group block', className)}>
      <div className="aspect-[3/4] overflow-hidden rounded-sm">
        <Image
          src={image.src}
          alt={image.alt}
          fill={false}
          width={image.width}
          height={image.height}
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 25vw"
          quality={78}
          className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
          style={{ objectPosition: image.focalPoint }}
        />
      </div>
      <p className="mt-5 font-display text-4xl font-light">{city}</p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] opacity-60">
        {tagline}
      </p>
      <span className="mt-4 block h-px bg-current opacity-20" aria-hidden="true" />
    </Link>
  );
}
