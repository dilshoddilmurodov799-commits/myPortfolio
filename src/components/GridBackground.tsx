interface GridBackgroundProps {
  variant?: 'default' | 'hero';
}

export default function GridBackground({ variant = 'default' }: GridBackgroundProps) {
  const isHero = variant === 'hero';
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid pattern - black for light mode, grey for dark mode on hero */}
      {isHero ? (
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000000 1.5px, transparent 1.5px),
              linear-gradient(to bottom, #000000 1.5px, transparent 1.5px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      ) : (
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1.5px, transparent 1.5px),
              linear-gradient(to bottom, currentColor 1.5px, transparent 1.5px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      )}
      
      {/* Hero specific styling */}
      {isHero && (
        <div
          className="absolute inset-0 dark:opacity-100 opacity-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #404040 1.5px, transparent 1.5px),
              linear-gradient(to bottom, #404040 1.5px, transparent 1.5px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      )}
      
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Gradient overlay to fade edges */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 0%, var(--background) 100%)',
        }}
      />
    </div>
  );
}