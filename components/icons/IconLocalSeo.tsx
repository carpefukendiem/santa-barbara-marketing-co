import { iconDefaults, type IconProps } from './types';

export function IconLocalSeo({
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
      <circle cx="10.5" cy="10.5" r="6.25" />
      <path d="M15.2 15.2 20 20" />
    </svg>
  );
}
