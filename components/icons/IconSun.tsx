import { iconDefaults, type IconProps } from './types';

export function IconSun({
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
      <circle cx="12" cy="12" r="3.4" />
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * Math.PI) / 4;
        const inner = 5.5;
        const outer = 9.2;
        return (
          <line
            key={`l-${i}`}
            x1={12 + Math.cos(angle) * inner}
            y1={12 + Math.sin(angle) * inner}
            x2={12 + Math.cos(angle) * outer}
            y2={12 + Math.sin(angle) * outer}
          />
        );
      })}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * Math.PI) / 4 + Math.PI / 8;
        const inner = 5.5;
        const outer = 7.4;
        return (
          <line
            key={`s-${i}`}
            x1={12 + Math.cos(angle) * inner}
            y1={12 + Math.sin(angle) * inner}
            x2={12 + Math.cos(angle) * outer}
            y2={12 + Math.sin(angle) * outer}
          />
        );
      })}
    </svg>
  );
}
