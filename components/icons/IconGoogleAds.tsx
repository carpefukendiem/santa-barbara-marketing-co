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
      <path d="M6.5 18.5 12 5.5l5.5 13" />
      <path d="M9.2 13.5h5.6" />
    </svg>
  );
}
