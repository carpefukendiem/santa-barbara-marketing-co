import { iconDefaults, type IconProps } from './types';

export function IconExecute({
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
      <path d="M13.6 5.2c2.6 1.15 4.55 3.1 5.7 5.7l-7.15 1.95-2.2-2.2z" />
      <path d="M10 10.7 5.8 17.4l1.85-.35 1.1 1.55.55-2.15 2.15-.5" />
      <path d="M9.4 13.15 7.2 10.95" />
      <circle cx="14.15" cy="9.85" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}
