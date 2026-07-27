import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Card {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
}

export const AppleCardsCarousel = ({ items }: { items: Card[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="flex gap-4 overflow-x-scroll py-10 scrollbar-hide">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="shrink-0"
          >
            <Card
              card={item}
              index={index}
              isActive={activeCard === index}
              setActive={setActiveCard}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Card = ({
  card,
  index,
  isActive,
  setActive,
}: {
  card: Card;
  index: number;
  isActive: boolean;
  setActive: (index: number | null) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [30, -30]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-30, 30]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="w-80 md:w-96 h-[30rem] rounded-3xl overflow-hidden cursor-pointer"
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setActive(isActive ? null : index)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="absolute inset-0 backdrop-blur-xl bg-card/40 border border-white/10 rounded-3xl overflow-hidden">
          <div className="relative h-64 overflow-hidden">
            <ImageWithFallback
              src={card.src}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-white/70 mb-1">{card.category}</p>
              <h3 className="text-2xl text-white">{card.title}</h3>
            </div>
          </div>
          <div className="p-6">
            {card.content}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};