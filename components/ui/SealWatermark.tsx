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
      className={cn('seal-watermark', className)}
      aria-hidden="true"
    />
  );
}
