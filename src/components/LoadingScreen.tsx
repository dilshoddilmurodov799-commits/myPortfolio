import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const greetings = [
  { text: 'Hello', lang: 'English' },
  { text: 'Salom', lang: 'Uzbek' },
  { text: 'Привет', lang: 'Russian' },
  { text: 'Hei', lang: 'Finnish' },
  { text: 'Hallo', lang: 'German' },
  { text: '你好', lang: 'Chinese' },
  { text: 'Bonjour', lang: 'French' },
  { text: 'こんにちは', lang: 'Japanese' },
  { text: 'مرحبا', lang: 'Arabic' },
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentIndex < greetings.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 1500); // Changed from 2000 to 1500
      return () => clearTimeout(timer);
    } else {
      // All greetings shown, start exit animation
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 800);
      }, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isExiting ? '-100%' : 0 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center">
        <AnimatePresence mode="wait">
          {currentIndex < greetings.length && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.2, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-4"
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {greetings[currentIndex].text}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg"
              >
                {greetings[currentIndex].lang}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress indicator */}
        <motion.div
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {greetings.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                index <= currentIndex ? 'bg-foreground w-8' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}