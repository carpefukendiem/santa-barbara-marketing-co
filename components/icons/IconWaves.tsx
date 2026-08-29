import { iconDefaults, type IconProps } from './types';

export function IconWaves({
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
      <path d="M3.5 8.2c1.6-1.6 3.2 1.6 4.8 0s3.2 1.6 4.8 0 3.2 1.6 4.8 0 3.2 1.6 4.8 0" />
      <path d="M3.5 12.2c1.6-1.6 3.2 1.6 4.8 0s3.2 1.6 4.8 0 3.2 1.6 4.8 0 3.2 1.6 4.8 0" />
      <path d="M3.5 16.2c1.6-1.6 3.2 1.6 4.8 0s3.2 1.6 4.8 0 3.2 1.6 4.8 0 3.2 1.6 4.8 0" />
    </svg>
  );
}
