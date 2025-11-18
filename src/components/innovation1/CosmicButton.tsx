import { LucideIcon } from 'lucide-react';

interface CosmicButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function CosmicButton({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  onClick,
  className = '',
  size = 'md'
}: CosmicButtonProps) {
  const sizes = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-4',
    lg: 'px-10 py-5 text-lg',
  };

  const variants = {
    primary: `
      bg-gradient-to-r from-[#2D9CDB] via-[#C084F5] to-[#A6E1FF] text-white
      hover:shadow-2xl hover:shadow-[#2D9CDB]/50 hover:scale-105
      border border-[#A6E1FF]/50
    `,
    secondary: `
      bg-white/5 backdrop-blur-md border-2 border-[#2D9CDB]/50 text-[#EEF8FF]
      hover:bg-white/10 hover:border-[#C084F5] hover:scale-105
      hover:shadow-xl hover:shadow-[#C084F5]/30
    `,
    ghost: `
      bg-transparent border border-[#A6E1FF]/30 text-[#EEF8FF]
      hover:bg-white/5 hover:border-[#A6E1FF] hover:scale-105
    `,
  };

  return (
    <button 
      onClick={onClick}
      className={`
        ${sizes[size]}
        ${variants[variant]}
        rounded-xl transition-all duration-300 flex items-center gap-2 group relative overflow-hidden
        ${className}
      `}
    >
      {/* Animated shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Particle effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
      </div>
      
      <span className="relative z-10">{children}</span>
      {Icon && <Icon className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
}
