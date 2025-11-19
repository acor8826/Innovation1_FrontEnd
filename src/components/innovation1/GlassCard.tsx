import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

export function GlassCard({ icon, title, description, index = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-[#2D9CDB]/50 to-[#C084F5]/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card */}
      <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
        {/* Icon container */}
        <div className="mb-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <div className="text-white">
              {icon}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-[#EEF8FF] mb-3">
          {title}
        </h3>
        <p className="text-[#A6E1FF]/80 leading-relaxed">
          {description}
        </p>
        
        {/* Decorative corner accent */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#2D9CDB]/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}
