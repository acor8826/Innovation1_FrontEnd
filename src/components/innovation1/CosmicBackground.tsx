export function CosmicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Cosmic Black Base */}
      <div className="absolute inset-0 bg-[#020817]"></div>
      
      {/* Nebula Clouds */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#C084F5] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#2D9CDB] rounded-full blur-[120px] opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-[#A6E1FF] rounded-full blur-[140px] opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Star Field */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(166,225,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(166,225,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-30"></div>
    </div>
  );
}
