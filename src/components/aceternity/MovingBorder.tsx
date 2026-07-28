import type { ReactNode } from 'react';

export default function MovingBorder({
  children,
  duration = 2000,
  className = '',
  containerClassName = '',
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg p-[1px] ${containerClassName}`}
      style={
        {
          '--duration': `${duration}ms`,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #3b82f6)',
          backgroundSize: '200% 200%',
          animation: 'movingBorder var(--duration) linear infinite',
        }}
      />
      <div className={`relative bg-background rounded-lg ${className}`}>{children}</div>
      <style>
        {`
          @keyframes movingBorder {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
        `}
      </style>
    </div>
  );
}