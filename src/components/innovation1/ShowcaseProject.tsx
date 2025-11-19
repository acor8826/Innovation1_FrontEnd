import { motion } from 'motion/react';

interface ShowcaseProjectProps {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  index: number;
}

export function ShowcaseProject({ title, description, tags, gradient, index }: ShowcaseProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow border */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-[#2D9CDB] to-[#C084F5] rounded-2xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-500" />
      
      {/* Card */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
        {/* Thumbnail area with gradient */}
        <div className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
          {/* Abstract tech pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="white" />
                  <line x1="0" y1="20" x2="40" y2="20" stroke="white" strokeWidth="0.5" />
                  <line x1="20" y1="0" x2="20" y2="40" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
            </svg>
          </div>
          
          {/* Central orb */}
          <div className="relative w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md animate-pulse" />
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-[#EEF8FF] mb-2">
            {title}
          </h3>
          <p className="text-[#A6E1FF]/70 text-sm mb-4">
            {description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-[#2D9CDB]/20 text-[#A6E1FF] rounded-full border border-[#2D9CDB]/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D9CDB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}
