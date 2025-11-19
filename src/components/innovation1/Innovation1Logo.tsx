interface Innovation1LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  showText?: boolean;
}

export function Innovation1Logo({ size = 'md', animated = true, showText = true }: Innovation1LogoProps) {
  const sizes = {
    sm: { container: 'w-8 h-8', text: 'text-base' },
    md: { container: 'w-12 h-12', text: 'text-xl' },
    lg: { container: 'w-16 h-16', text: 'text-2xl' },
    xl: { container: 'w-24 h-24', text: 'text-4xl' },
  };

  const sizeConfig = sizes[size];

  return (
    <div className="flex items-center gap-3 group">
      {/* Logo Icon */}
      <div className={`relative ${sizeConfig.container}`}>
        {/* Outer glow ring */}
        {animated && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D9CDB] to-[#C084F5] rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
        )}
        
        {/* Main container */}
        <div className={`relative ${sizeConfig.container} bg-gradient-to-br from-[#2D9CDB] via-[#C084F5] to-[#A6E1FF] rounded-xl shadow-xl shadow-[#2D9CDB]/30 group-hover:scale-110 transition-transform overflow-hidden`}>
          {/* Animated shimmer overlay */}
          {animated && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          )}
          
          {/* Custom SVG Logo */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full p-2"
          >
            {/* Central hexagon */}
            <path
              d="M 50 20 L 70 32.5 L 70 57.5 L 50 70 L 30 57.5 L 30 32.5 Z"
              stroke="white"
              strokeWidth="3"
              fill="white"
              fillOpacity="0.2"
              className={animated ? "animate-pulse" : ""}
            />
            
            {/* Neural connection nodes */}
            <circle cx="50" cy="50" r="6" fill="white" />
            <circle cx="50" cy="25" r="4" fill="white" opacity="0.9" />
            <circle cx="65" cy="35" r="4" fill="white" opacity="0.9" />
            <circle cx="65" cy="55" r="4" fill="white" opacity="0.9" />
            <circle cx="50" cy="65" r="4" fill="white" opacity="0.9" />
            <circle cx="35" cy="55" r="4" fill="white" opacity="0.9" />
            <circle cx="35" cy="35" r="4" fill="white" opacity="0.9" />
            
            {/* Connection lines */}
            <line x1="50" y1="50" x2="50" y2="25" stroke="white" strokeWidth="1.5" opacity="0.6" />
            <line x1="50" y1="50" x2="65" y2="35" stroke="white" strokeWidth="1.5" opacity="0.6" />
            <line x1="50" y1="50" x2="65" y2="55" stroke="white" strokeWidth="1.5" opacity="0.6" />
            <line x1="50" y1="50" x2="50" y2="65" stroke="white" strokeWidth="1.5" opacity="0.6" />
            <line x1="50" y1="50" x2="35" y2="55" stroke="white" strokeWidth="1.5" opacity="0.6" />
            <line x1="50" y1="50" x2="35" y2="35" stroke="white" strokeWidth="1.5" opacity="0.6" />
            
            {/* Corner accent nodes */}
            <circle cx="20" cy="20" r="2" fill="white" opacity="0.5" />
            <circle cx="80" cy="20" r="2" fill="white" opacity="0.5" />
            <circle cx="80" cy="80" r="2" fill="white" opacity="0.5" />
            <circle cx="20" cy="80" r="2" fill="white" opacity="0.5" />
            
            {/* "1" integrated into design */}
            <path
              d="M 55 40 L 55 60 M 52 43 L 55 40"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Pulsing dots indicator */}
        {animated && (
          <div className="absolute -bottom-1 -right-1 flex gap-0.5">
            <div className="w-1 h-1 bg-[#4ADE80] rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-[#4ADE80] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-1 h-1 bg-[#4ADE80] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        )}
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${sizeConfig.text} bg-gradient-to-r from-[#EEF8FF] to-[#A6E1FF] bg-clip-text text-transparent tracking-tight`}>
            Innovation1
          </span>
          {size === 'lg' || size === 'xl' ? (
            <span className="text-xs text-[#A6E1FF]/60 tracking-wider uppercase">
              AI Systems
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}
