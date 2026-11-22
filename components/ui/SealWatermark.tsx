import Image from 'next/image';
import { brand } from '@/data/images';
import { cn } from '@/lib/utils';

export function SealWatermark({
  className,
  size = 560,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src={brand.logo.src}
      alt=""
      width={size}
      height={size}
      sizes="(max-width: 768px) 180px, 280px"
      quality={60}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      className={cn('seal-watermark', className)}
      aria-hidden="true"
    />
  );
}
