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
      <path d="M10.15 2.9h3.7v2.05l1.48.52 1.45-1.45 2.62 2.55-1.45 1.45.52 1.48H21.1v3.7h-2.08l-.52 1.48 1.45 1.45-2.62 2.55-1.45-1.45-.52 1.48v2.08h-3.7v-2.08l-1.48-.52-1.45 1.45-2.62-2.55 1.45-1.45-.52-1.48H2.9v-3.7h2.08l.52-1.48-1.45-1.45 2.62-2.55 1.45 1.45.52-1.48V2.9Z" />
      <circle cx="12" cy="12" r="2.85" />
    </svg>
  );
}
