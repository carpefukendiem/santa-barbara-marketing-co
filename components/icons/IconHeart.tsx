import { iconDefaults, type IconProps } from './types';

export function IconHeart({
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
      <path d="M12 19.2s-6.6-4.05-8.35-7.7C1.9 8.35 3.6 5.4 6.7 5.15c1.75-.15 3.3.8 4.15 2.2.85-1.4 2.4-2.35 4.15-2.2 3.1.25 4.8 3.2 3.05 6.35C18.6 15.15 12 19.2 12 19.2Z" />
    </svg>
  );
}
