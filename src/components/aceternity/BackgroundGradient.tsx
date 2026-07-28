import type { ReactNode } from 'react';
import { motion } from 'motion/react';

export default function BackgroundGradient({
  children,
  className = '',
  containerClassName = '',
  animate = true,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0 50%', '100% 50%', '0 50%'],
    },
  };

  return (
    <div className={`relative p-[2px] group ${containerClassName}`}>
      <motion.div
        className="absolute inset-0 rounded-lg opacity-60 group-hover:opacity-100 transition duration-500 will-change-transform"
        style={{
          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
          backgroundSize: '200% 200%',
        }}
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }
            : undefined
        }
      />
      <div className={`relative bg-card rounded-lg ${className}`}>{children}</div>
    </div>
  );
}