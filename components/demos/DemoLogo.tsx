import Image from 'next/image';
import type { ReactNode } from 'react';

type DemoLogoProps = {
  logo: string | null;
  logoLight?: string | null;
  logoDark?: string | null;
  /** Background tone behind the logo: pick light or dark asset. */
  tone?: 'light' | 'dark';
  name: string;
  className?: string;
  wordmark: ReactNode | null;
  /** Intrinsic width hint for next/image. */
  width?: number;
  /** Intrinsic height hint for next/image. */
  height?: number;
};

/**
 * Renders a logo image when `logo` / light-dark variants are set, otherwise the wordmark.
 * Image is sized via CSS on `.demo-logo-img` (height-led).
 */
export function DemoLogo({
  logo,
  logoLight,
  logoDark,
  tone = 'dark',
  name,
  className,
  wordmark,
  width = 180,
  height = 40,
}: DemoLogoProps) {
  const src =
    tone === 'dark'
      ? logoDark || logo || logoLight
      : logoLight || logo || logoDark;

  if (src) {
    return (
      <a className={className} href="#top" aria-label={name}>
        <span className="demo-logo-img-wrap">
          <Image
            src={src}
            alt={name}
            width={width}
            height={height}
            className="demo-logo-img"
            priority
          />
        </span>
      </a>
    );
  }

  return (
    <a className={className} href="#top">
      {wordmark}
    </a>
  );
}
