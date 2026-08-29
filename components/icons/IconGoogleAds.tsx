import { iconDefaults, type IconProps } from './types';

export function IconGoogleAds({
  className,
  size = 24,
  'aria-hidden': ariaHidden = true,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      aria-hidden={ariaHidden}
      {...iconDefaults}
      {...props}
    >
      <path d="M6.6 18.4 12 5.2l5.4 13.2" />
      <path d="M9 13.35h6" />
    </svg>
  );
}
