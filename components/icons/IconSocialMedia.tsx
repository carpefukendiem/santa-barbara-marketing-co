import { iconDefaults, type IconProps } from './types';

export function IconSocialMedia({
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
      <path d="M6 6.5h9.5a2 2 0 0 1 2 2v6.2a2 2 0 0 1-2 2H10l-4.2 2.4V8.5a2 2 0 0 1 2-2Z" />
      <path d="M10.75 9.35c-.9-.85-2.35-.3-2.35.95 0 1.35 2.35 2.55 2.35 2.55s2.35-1.2 2.35-2.55c0-1.25-1.45-1.8-2.35-.95Z" />
    </svg>
  );
}
