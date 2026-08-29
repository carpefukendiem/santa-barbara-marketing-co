import { iconDefaults, type IconProps } from './types';

export function IconAutomations({
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
      <circle cx="12" cy="12" r="2.6" />
      <path d="M12 3.6v2.2M12 18.2v2.2M20.4 12h-2.2M5.8 12H3.6M17.95 6.05l-1.55 1.55M7.6 16.4l-1.55 1.55M17.95 17.95l-1.55-1.55M7.6 7.6 6.05 6.05" />
      <circle cx="12" cy="12" r="6.4" />
    </svg>
  );
}
