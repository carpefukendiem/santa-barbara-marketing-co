import { iconDefaults, type IconProps } from './types';

export function IconGrow({
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
      <rect x="5" y="14.5" width="3.2" height="5" rx="0.7" />
      <rect x="9.6" y="11.5" width="3.2" height="8" rx="0.7" />
      <rect x="14.2" y="8" width="3.2" height="11.5" rx="0.7" />
    </svg>
  );
}
