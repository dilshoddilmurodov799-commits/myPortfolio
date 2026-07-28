import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface TimelineEntry {
  title: string;
  content: ReactNode;
}

export default function Timeline({ data }: { data: TimelineEntry[] }) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 h-full w-[2px] bg-border" />

      {/* Timeline items */}
      <div className="space-y-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex gap-6"
          >
            {/* Dot */}
            <div className="relative flex items-start">
              <motion.div
                className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className="w-3 h-3 rounded-full bg-primary" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <div>{item.content}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}