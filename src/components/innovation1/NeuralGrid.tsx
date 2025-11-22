import { useMemo } from 'react';

export function NeuralGrid() {
  // Memoize node positions so they don't change on every render
  const nodes = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Horizontal lines - using CSS grid instead of individual elements */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hGradient" x1="0%" x2="100%">
            <stop offset="0%" stopColor="rgba(166, 225, 255, 0)" />
            <stop offset="50%" stopColor="rgba(166, 225, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(166, 225, 255, 0)" />
          </linearGradient>
        </defs>
        {/* Horizontal lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={`${i * 5}%`}
            x2="100%"
            y2={`${i * 5}%`}
            stroke="url(#hGradient)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {/* Vertical lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={`${i * 5}%`}
            y1="0"
            x2={`${i * 5}%`}
            y2="100%"
            stroke="url(#hGradient)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Intersection nodes - memoized to prevent recalculation */}
      {nodes.map((node) => (
        <div
          key={`node-${node.id}`}
          className="absolute w-1 h-1 bg-[#A6E1FF] rounded-full animate-pulse"
          style={{
            left: node.left,
            top: node.top,
            animationDelay: `${node.delay}s`,
            animationDuration: `${node.duration}s`,
            willChange: 'opacity',
          }}
        />
      ))}
    </div>
  );
}
