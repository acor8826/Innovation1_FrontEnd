import { LucideIcon } from 'lucide-react';

interface GlassmorphCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: 'blue' | 'purple' | 'cyan';
}

export function GlassmorphCard({ 
  icon: Icon, 
  title, 
  description,
  accentColor = 'blue'
}: GlassmorphCardProps) {
  const accents = {
    blue: {
      glow: 'from-[#2D9CDB]/20 to-[#A6E1FF]/20',
      border: 'border-[#2D9CDB]/30 hover:border-[#2D9CDB]',
      iconBg: 'from-[#2D9CDB] to-[#A6E1FF]',
      shadow: 'shadow-[#2D9CDB]/20',
    },
    purple: {
      glow: 'from-[#C084F5]/20 to-[#A6E1FF]/20',
      border: 'border-[#C084F5]/30 hover:border-[#C084F5]',
      iconBg: 'from-[#C084F5] to-[#A6E1FF]',
      shadow: 'shadow-[#C084F5]/20',
    },
    cyan: {
      glow: 'from-[#A6E1FF]/20 to-[#2D9CDB]/20',
      border: 'border-[#A6E1FF]/30 hover:border-[#A6E1FF]',
      iconBg: 'from-[#A6E1FF] to-[#2D9CDB]',
      shadow: 'shadow-[#A6E1FF]/20',
    },
  };

  const accent = accents[accentColor];

  return (
    <div className="relative group h-full">
      {/* Animated glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent.glow} rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100`}></div>
      
      {/* Glass card */}
      <div className={`relative h-full bg-white/5 backdrop-blur-xl border ${accent.border} rounded-3xl p-8 transition-all duration-500 group-hover:shadow-2xl ${accent.shadow} group-hover:-translate-y-2`}>
        {/* Floating nodes decoration */}
        <div className="absolute top-4 right-4 flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#A6E1FF]/60 animate-pulse"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#C084F5]/60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#2D9CDB]/60 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Icon */}
        <div className={`relative w-20 h-20 bg-gradient-to-br ${accent.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl ${accent.shadow}`}>
          <Icon className="w-10 h-10 text-white" />
          
          {/* Icon glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${accent.iconBg} rounded-2xl blur-lg opacity-50`}></div>
        </div>

        {/* Content */}
        <h3 className="text-[#EEF8FF] mb-4">{title}</h3>
        <p className="text-[#A6E1FF]/80 leading-relaxed">{description}</p>

        {/* Gradient line */}
        <div className={`mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${accent.iconBg} transition-all duration-500 rounded-full`}></div>
      </div>
    </div>
  );
}
