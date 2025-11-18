import { LucideIcon } from 'lucide-react';

interface ModernButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export function ModernButton({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  onClick,
  className = '' 
}: ModernButtonProps) {
  const baseStyles = "px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 group relative overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] text-white hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105",
    secondary: "bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:scale-105"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Animated glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      <span className="relative z-10">{children}</span>
      {Icon && <Icon className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
}
