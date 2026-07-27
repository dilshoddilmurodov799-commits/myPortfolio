import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface PageTransitionProps {
  pageName: string;
  onComplete: () => void;
}

export default function PageTransition({ pageName, onComplete }: PageTransitionProps) {
  const { t } = useLanguage();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 800);
    }, 1500); // Shortened to 1.5s

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: isExiting ? '-100%' : 0, opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Minimal decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h1 className="text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">
            {t(pageName)}
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
}