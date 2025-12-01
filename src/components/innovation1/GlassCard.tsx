import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export function GlassCard({ icon, title, description, index }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative bg-white border-2 border-sky-200 rounded-2xl p-8 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 h-full">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>

        {/* Hover indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </motion.div>
  );
}
