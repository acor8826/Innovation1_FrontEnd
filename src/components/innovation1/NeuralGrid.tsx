export function NeuralGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Horizontal lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A6E1FF] to-transparent"
          style={{ top: `${i * 5}%` }}
        />
      ))}
      
      {/* Vertical lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#A6E1FF] to-transparent"
          style={{ left: `${i * 5}%` }}
        />
      ))}
      
      {/* Intersection nodes */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={`node-${i}`}
          className="absolute w-1 h-1 bg-[#A6E1FF] rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
