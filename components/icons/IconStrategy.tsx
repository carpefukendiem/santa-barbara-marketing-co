import { iconDefaults, type IconProps } from './types';

export function IconStrategy({
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
      <path d="M5 19V5" />
      <path d="M5 19h14" />
      <path d="M8 16v-3" />
      <path d="M11.5 16V10" />
      <path d="M15 16V8.5" />
      <path d="M7.5 12.5 11 9l3 2.2 4.2-5.2" />
      <path d="M16.2 6h2.5v2.5" />
    </svg>
  );
}
