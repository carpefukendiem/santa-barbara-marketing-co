import type { SVGProps } from 'react';

export type IconProps = {
  className?: string;
  size?: number;
  'aria-hidden'?: boolean;
} & Omit<SVGProps<SVGSVGElement>, 'width' | 'height'>;

export const iconDefaults = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  focusable: false as const,
};
