import { iconDefaults, type IconProps } from './types';

export function IconCompass({
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
      <circle cx="12" cy="12" r="8.25" />
      <path d="m12 7.2 1.55 4.8 4.8 1.55-4.8 1.55L12 19.9l-1.55-4.8-4.8-1.55 4.8-1.55Z" />
      <path d="M9.4 12h5.2" />
    </svg>
  );
}
