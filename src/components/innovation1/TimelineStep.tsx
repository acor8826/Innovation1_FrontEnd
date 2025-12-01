import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface TimelineStepProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
  isLast?: boolean;
}

export function TimelineStep({ number, title, description, icon, index, isLast }: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Connecting line (hidden on last item) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-24 left-1/2 w-full h-0.5 bg-gradient-to-r from-sky-300 to-blue-300 -z-10"></div>
      )}

      {/* Card */}
      <div className="bg-white border-2 border-sky-200 rounded-2xl p-8 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 relative">
        {/* Number Badge */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">{number}</span>
        </div>

        {/* Icon */}
        <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 text-sky-500 mx-auto lg:mx-0">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center lg:text-left">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed text-center lg:text-left">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
