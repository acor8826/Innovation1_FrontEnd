import { MousePointer2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HoverHint() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the hint after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-32 left-1/2 -translate-x-1/2 z-30 animate-in fade-in slide-in-from-top-4 duration-1000">
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB]/30 to-[#C084F5]/30 rounded-full blur-xl"></div>
        
        {/* Card */}
        <div className="relative bg-[#020817]/95 backdrop-blur-2xl border border-[#2D9CDB]/40 rounded-full px-6 py-3 shadow-2xl flex items-center gap-3">
          <MousePointer2 className="w-4 h-4 text-[#A6E1FF] animate-pulse" />
          <span className="text-[#EEF8FF] text-sm whitespace-nowrap">
            Hover over the glowing orbs to explore AI services
          </span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-[#2D9CDB] rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-[#C084F5] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-1.5 h-1.5 bg-[#A6E1FF] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>

        {/* Pointer animation */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#2D9CDB]/40 animate-bounce"></div>
      </div>
    </div>
  );
}
