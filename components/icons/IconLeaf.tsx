import { iconDefaults, type IconProps } from './types';

export function IconLeaf({
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
      <path d="M6.2 17.6c8.4.4 12.4-5.1 11.6-13.2-7.8-.9-13.4 3.8-13.2 11.8Z" />
      <path d="M8.2 15.8c2.1-2.6 5.2-4.2 8.8-4.6" />
    </svg>
  );
}
