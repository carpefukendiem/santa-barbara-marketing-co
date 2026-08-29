export function GrainDefs() {
  return (
    <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
      <defs>
        <filter id="sbmc-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function GrainOverlay({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[1] mix-blend-overlay opacity-[0.03] ${className ?? ''}`}
      aria-hidden="true"
    >
      <div
        className="h-full w-full"
        style={{ filter: 'url(#sbmc-grain)' }}
      />
    </div>
  );
}
