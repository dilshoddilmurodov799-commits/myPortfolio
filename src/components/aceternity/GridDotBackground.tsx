export function GridBackground({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 -z-10 ${className || ''}`}>
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}

export function DotBackground({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 -z-10 ${className || ''}`}>
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}

export function GridAndDotBackground({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 -z-10 ${className || ''}`}>
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      {/* Dots */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 2px, transparent 2px)`,
          backgroundSize: '50px 50px',
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 0%, var(--background) 100%)',
        }}
      />
    </div>
  );
}