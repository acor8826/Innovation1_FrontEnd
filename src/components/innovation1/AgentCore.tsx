import { motion } from 'motion/react';

interface AgentCoreProps {
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
  position?: { x: string; y: string };
}

export function AgentCore({ delay = 0, size = 'md', position }: AgentCoreProps) {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  return (
    <motion.div
      className={`absolute ${sizeMap[size]} ${position ? '' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}`}
      style={position ? { left: position.x, top: position.y } : {}}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.1, 1],
        rotate: 360,
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#C084F5] blur-xl opacity-60" />
      
      {/* Core sphere */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#A6E1FF] to-[#2D9CDB] shadow-2xl">
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/30" />
      </div>
      
      {/* Inner light */}
      <div className="absolute inset-4 rounded-full bg-white/40 blur-md" />
      
      {/* Pulsing ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#A6E1FF]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 3,
          delay: delay + 1,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
    </motion.div>
  );
}
