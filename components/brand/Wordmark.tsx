import Image from 'next/image';
import { brand } from '@/data/images';
import { cn } from '@/lib/utils';

export function Wordmark({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
  /** @deprecated Ignored; wordmark must not steal LCP preload from the hero. */
  priority?: boolean;
}) {
  const mark = inverted ? brand.wordmarkWhite : brand.wordmarkNavy;
  return (
    <Image
      src={mark.src}
      alt={mark.alt}
      width={mark.width}
      height={mark.height}
      sizes="(max-width: 767px) 224px, 320px"
      className={cn('header-wordmark object-contain object-left', className)}
      // Lazy + low priority so the hero owns LCP discovery / preload.
      loading="lazy"
      decoding="async"
      fetchPriority="low"
    />
  );
}
