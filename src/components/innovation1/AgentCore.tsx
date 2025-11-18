import { Brain, Cpu, Network, Sparkles } from 'lucide-react';

interface AgentCoreProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  icon?: 'brain' | 'cpu' | 'network' | 'sparkles';
  delay?: number;
}

export function AgentCore({ position, icon = 'brain', delay = 0 }: AgentCoreProps) {
  const icons = {
    brain: Brain,
    cpu: Cpu,
    network: Network,
    sparkles: Sparkles,
  };

  const Icon = icons[icon];

  const positions = {
    'top-left': 'top-20 left-20',
    'top-right': 'top-20 right-20',
    'bottom-left': 'bottom-20 left-20',
    'bottom-right': 'bottom-20 right-20',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div
      className={`absolute ${positions[position]} z-10`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Outer glow rings */}
      <div className="relative w-24 h-24 animate-pulse">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#C084F5] opacity-20 blur-xl animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#A6E1FF] to-[#C084F5] opacity-30 blur-lg animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        
        {/* Core orb */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#2D9CDB] via-[#A6E1FF] to-[#C084F5] shadow-2xl shadow-[#2D9CDB]/50 flex items-center justify-center animate-float">
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Inner pulse */}
        <div className="absolute inset-6 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '3s' }}></div>
      </div>
    </div>
  );
}
