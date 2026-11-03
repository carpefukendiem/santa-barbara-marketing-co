import Image from 'next/image';
import { brand } from '@/data/images';
import { cn } from '@/lib/utils';

export function Wordmark({
  inverted = false,
  className,
  priority = false,
}: {
  inverted?: boolean;
  className?: string;
  priority?: boolean;
}) {
  const mark = inverted ? brand.wordmarkWhite : brand.wordmarkNavy;
  return (
    <Image
      src={mark.src}
      alt={mark.alt}
      width={mark.width}
      height={mark.height}
      sizes="(max-width: 767px) 200px, 280px"
      className={cn('header-wordmark object-contain object-left', className)}
      priority={priority}
    />
  );
}
