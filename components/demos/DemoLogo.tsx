import Image from 'next/image';
import type { ReactNode } from 'react';

type DemoLogoProps = {
  logo: string | null;
  name: string;
  className?: string;
  wordmark: ReactNode | null;
};

/**
 * Renders a logo image when `logo` is set, otherwise the wordmark.
 * Image is sized to fit the wordmark slot on light or dark headers/footers.
 */
export function DemoLogo({ logo, name, className, wordmark }: DemoLogoProps) {
  if (logo) {
    return (
      <a className={className} href="#top" aria-label={name}>
        <span className="demo-logo-img-wrap">
          <Image
            src={logo}
            alt={name}
            width={180}
            height={40}
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
