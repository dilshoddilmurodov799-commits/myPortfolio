import { motion } from 'motion/react';

export default function TextGenerateEffect({
  words,
  className = '',
}: {
  words: string;
  className?: string;
}) {
  const wordsArray = words.split(' ');

  return (
    <div className={className}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 0.5,
            delay: idx * 0.1,
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </div>
  );
}