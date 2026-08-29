import { iconDefaults, type IconProps } from './types';

export function IconDiscover({
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
      <circle cx="12" cy="12" r="3.25" />
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * Math.PI) / 4;
        const inner = 5.6;
        const outer = 9.4;
        const x1 = 12 + Math.cos(angle) * inner;
        const y1 = 12 + Math.sin(angle) * inner;
        const x2 = 12 + Math.cos(angle) * outer;
        const y2 = 12 + Math.sin(angle) * outer;
        return (
          <line key={`long-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />
        );
      })}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * Math.PI) / 4 + Math.PI / 8;
        const inner = 5.6;
        const outer = 7.6;
        const x1 = 12 + Math.cos(angle) * inner;
        const y1 = 12 + Math.sin(angle) * inner;
        const x2 = 12 + Math.cos(angle) * outer;
        const y2 = 12 + Math.sin(angle) * outer;
        return (
          <line key={`short-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />
        );
      })}
    </svg>
  );
}
