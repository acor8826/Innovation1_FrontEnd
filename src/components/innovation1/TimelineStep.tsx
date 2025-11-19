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
    <div className="relative flex-1">
      {/* Connecting line */}
      {!isLast && (
        <div className="absolute top-16 left-1/2 w-full h-1 hidden lg:block">
          <div className="h-full bg-gradient-to-r from-[#2D9CDB] via-[#A6E1FF] to-[#2D9CDB] opacity-30" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      )}
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="relative z-10 text-center"
      >
        {/* Agent node */}
        <div className="relative inline-block mb-6">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#C084F5] blur-xl opacity-60" />
          
          {/* Node circle */}
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#0D1B4C] to-[#020817] border-2 border-[#2D9CDB] flex flex-col items-center justify-center shadow-2xl">
            {/* Icon */}
            <div className="text-[#A6E1FF] mb-1">
              {icon}
            </div>
            {/* Number */}
            <span className="text-2xl font-bold text-[#EEF8FF]">{number}</span>
            
            {/* Inner glow */}
            <div className="absolute inset-4 rounded-full bg-[#2D9CDB]/20 blur-md" />
          </div>
          
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#A6E1FF]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              delay: index * 0.3,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        </div>
        
        {/* Text */}
        <h3 className="text-xl font-bold text-[#EEF8FF] mb-2">
          {title}
        </h3>
        <p className="text-[#A6E1FF]/70 text-sm max-w-xs mx-auto">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
