import { motion } from 'motion/react';

export function QuantumAtom() {
  return (
    <div className="absolute inset-0 scale-75 sm:scale-90 lg:scale-100">
      <div className="relative w-full h-full">
        {/* Deep space gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B4C]/80 via-[#020817]/60 to-[#0D1B4C]/80 rounded-full" />
        
        {/* SVG Filter for Perlin Noise Distortion */}
        <svg className="absolute inset-0 w-0 h-0">
          <defs>
            <filter id="quantumDistortion" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.012 0.015"
                numOctaves="4"
                seed="2"
                stitchTiles="stitch"
                result="turbulence"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.012 0.015; 0.015 0.012; 0.012 0.015"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale="25"
                xChannelSelector="R"
                yChannelSelector="G"
              >
                <animate
                  attributeName="scale"
                  values="25; 35; 20; 25"
                  dur="12s"
                  repeatCount="indefinite"
                />
              </feDisplacementMap>
              <feGaussianBlur stdDeviation="0.5" />
            </filter>
            
            <filter id="heatDistortion" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.008 0.01"
                numOctaves="3"
                seed="5"
                result="turbulence"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.008 0.01; 0.01 0.008; 0.008 0.01"
                  dur="15s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale="15"
                xChannelSelector="R"
                yChannelSelector="B"
              >
                <animate
                  attributeName="scale"
                  values="15; 22; 12; 15"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </feDisplacementMap>
            </filter>
          </defs>
        </svg>
        
        {/* Enhanced background starfield with parallax and twinkling */}
        <div className="absolute inset-0">
          {/* Layer 1: Deep background stars (slow parallax) */}
          {Array.from({ length: 40 }, (_, i) => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 1.5 + 0.5,
            delay: Math.random() * 3,
            duration: Math.random() * 4 + 3,
          })).map((star, index) => (
            <motion.div
              key={`deep-${index}`}
              className="absolute rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                background: 'radial-gradient(circle, rgba(200, 220, 255, 0.9) 0%, rgba(150, 180, 255, 0.4) 50%, transparent 100%)',
                boxShadow: `0 0 ${star.size * 2}px rgba(180, 200, 255, 0.6)`,
              }}
              animate={{
                opacity: [0.3, 0.9, 0.3],
                scale: [0.8, 1.3, 0.8],
                x: [0, -10, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              }}
            />
          ))}
          
          {/* Layer 2: Mid-distance stars (medium parallax) */}
          {Array.from({ length: 25 }, (_, i) => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 2,
            duration: Math.random() * 3 + 2,
          })).map((star, index) => (
            <motion.div
              key={`mid-${index}`}
              className="absolute rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                background: 'radial-gradient(circle, rgba(127, 231, 255, 0.9) 0%, rgba(90, 200, 250, 0.5) 50%, transparent 100%)',
                boxShadow: `0 0 ${star.size * 3}px rgba(90, 200, 250, 0.7)`,
              }}
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.5, 1],
                x: [0, -20, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              }}
            />
          ))}
          
          {/* Layer 3: Close foreground particles (fast parallax) */}
          {Array.from({ length: 15 }, (_, i) => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1.5,
            delay: Math.random() * 2,
          })).map((particle, index) => (
            <motion.div
              key={`close-${index}`}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                background: 'radial-gradient(circle, rgba(127, 231, 255, 0.8) 0%, rgba(90, 200, 250, 0.4) 50%, transparent 100%)',
                boxShadow: `0 0 ${particle.size * 2}px rgba(90, 200, 250, 0.6)`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
                x: [0, -30, 0],
                y: [0, -25, 0],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}
          
          {/* Meteor streaks */}
          {[0, 1, 2].map((meteorIdx) => (
            <motion.div
              key={`meteor-${meteorIdx}`}
              className="absolute w-20 h-0.5 rounded-full"
              style={{
                left: `${20 + meteorIdx * 30}%`,
                top: `${10 + meteorIdx * 25}%`,
                background: 'linear-gradient(90deg, transparent 0%, rgba(127, 231, 255, 0.8) 30%, rgba(90, 200, 250, 0.4) 100%)',
                boxShadow: '0 0 10px rgba(127, 231, 255, 0.6)',
                transformOrigin: 'left center',
                rotate: 45,
              }}
              animate={{
                x: [-100, 200],
                y: [-50, 100],
                opacity: [0, 0.8, 0],
                scaleX: [0.5, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeIn",
                delay: meteorIdx * 8 + 2,
                repeatDelay: 15,
              }}
            />
          ))}
        </div>
        
        {/* Central nucleus with multi-layer glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Outer diffused glow */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              width: 300,
              height: 300,
              marginLeft: -150,
              marginTop: -150,
              background: 'radial-gradient(circle, rgba(90, 200, 250, 0.4) 0%, rgba(120, 175, 255, 0.3) 30%, rgba(127, 231, 255, 0.2) 50%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Mid glow layer */}
          <motion.div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{
              width: 180,
              height: 180,
              marginLeft: -90,
              marginTop: -90,
              background: 'radial-gradient(circle, rgba(120, 175, 255, 0.7) 0%, rgba(90, 200, 250, 0.5) 40%, rgba(127, 231, 255, 0.3) 60%, transparent 80%)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          
          {/* Core nucleus sphere */}
          <motion.div
            className="relative rounded-full"
            style={{
              width: 60,
              height: 60,
              marginLeft: -30,
              marginTop: -30,
              background: 'radial-gradient(circle at 30% 30%, #EEF8FF 0%, #7FE7FF 30%, #5AC8FA 60%, #78AFFF 100%)',
              boxShadow: `
                0 0 30px rgba(90, 200, 250, 0.8),
                0 0 60px rgba(127, 231, 255, 0.6),
                inset 0 0 20px rgba(255, 255, 255, 0.6)
              `,
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Highlight reflection */}
            <div
              className="absolute rounded-full"
              style={{
                width: 20,
                height: 20,
                top: 8,
                left: 12,
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                filter: 'blur(3px)',
              }}
            />
          </motion.div>
        </div>
        
        {/* Wave function orbital shells - Standing waves with enhanced ripple distortion */}
        {[
          { radius: 140, waveCount: 3, speed: 20, phase: 0, orbitSpeed: 25 },
          { radius: 200, waveCount: 5, speed: 35, phase: Math.PI / 3, orbitSpeed: 40 },
          { radius: 260, waveCount: 7, speed: 50, phase: Math.PI / 2, orbitSpeed: 55 },
        ].map((shell, shellIdx) => (
          <div key={shellIdx} className="absolute top-1/2 left-1/2">
            {/* Orbital path ring with ripple distortion */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: shell.radius * 2,
                height: shell.radius * 2,
                marginLeft: -shell.radius,
                marginTop: -shell.radius,
                border: '1px solid rgba(90, 200, 250, 0.3)',
                boxShadow: `0 0 ${shell.radius / 40}px rgba(90, 200, 250, 0.4), inset 0 0 ${shell.radius / 50}px rgba(127, 231, 255, 0.2)`,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.03, 0.98, 1],
                rotate: [0, 360],
              }}
              transition={{
                opacity: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: shell.orbitSpeed * 2,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />
            
            {/* Generate wave pattern points with shimmer */}
            {Array.from({ length: 120 }).map((_, i) => {
              const angle = (i / 120) * Math.PI * 2;
              const wavePhase = Math.sin(shell.waveCount * angle + shell.phase);
              const amplitude = 8 + wavePhase * 4;
              const opacity = 0.2 + Math.abs(wavePhase) * 0.3;
              const currentRadius = shell.radius + amplitude;
              
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: 2,
                    height: 2,
                    left: Math.cos(angle) * currentRadius,
                    top: Math.sin(angle) * currentRadius,
                    background: `rgba(90, 200, 250, ${opacity})`,
                    boxShadow: `0 0 ${4 + Math.abs(wavePhase) * 3}px rgba(127, 231, 255, ${opacity * 0.8})`,
                  }}
                  animate={{
                    opacity: [opacity * 0.6, opacity * 1.2, opacity * 0.6],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    duration: shell.speed / 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (i / 120) * 2,
                  }}
                />
              );
            })}
          </div>
        ))}
        
        {/* Electron probability clouds with orbital rotation and wave wobble */}
        {[
          { angle: 0, radius: 140, size: 40, speed: 20, delay: 0, wavePhase: 0, orbitSpeed: 22 },
          { angle: 120, radius: 140, size: 35, speed: 20, delay: 0.5, wavePhase: Math.PI / 2, orbitSpeed: 25 },
          { angle: 240, radius: 140, size: 38, speed: 20, delay: 1, wavePhase: Math.PI, orbitSpeed: 23 },
          { angle: 60, radius: 200, size: 45, speed: 35, delay: 0.3, wavePhase: Math.PI / 4, orbitSpeed: 38 },
          { angle: 180, radius: 200, size: 40, speed: 35, delay: 0.8, wavePhase: Math.PI * 0.75, orbitSpeed: 42 },
          { angle: 30, radius: 260, size: 38, speed: 50, delay: 0.2, wavePhase: Math.PI / 6, orbitSpeed: 52 },
          { angle: 150, radius: 260, size: 42, speed: 50, delay: 0.7, wavePhase: Math.PI / 3, orbitSpeed: 58 },
          { angle: 270, radius: 260, size: 36, speed: 50, delay: 1.2, wavePhase: Math.PI * 0.8, orbitSpeed: 55 },
        ].map((cloud, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2"
            style={{
              width: cloud.size,
              height: cloud.size,
              marginLeft: -cloud.size / 2,
              marginTop: -cloud.size / 2,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: cloud.orbitSpeed,
              repeat: Infinity,
              ease: [0.45, 0.05, 0.55, 0.95], // Custom quantum easing (non-linear)
              delay: cloud.delay,
            }}
          >
            <motion.div
              className="absolute"
              style={{
                left: cloud.radius,
                top: 0,
                transform: `rotate(${cloud.angle}deg)`,
              }}
              animate={{
                // Wave function wobble - radius oscillation
                x: [0, Math.cos(cloud.wavePhase) * 3, Math.sin(cloud.wavePhase) * 2, 0],
                y: [0, Math.sin(cloud.wavePhase) * 3, Math.cos(cloud.wavePhase) * 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: cloud.delay,
              }}
            >
              {/* Probability cloud - fuzzy quantum appearance */}
              <div className="relative">
                {/* Outer probability diffusion with luminance wobble */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{
                    width: cloud.size * 1.8,
                    height: cloud.size * 1.8,
                    marginLeft: -cloud.size * 0.4,
                    marginTop: -cloud.size * 0.4,
                    background: 'radial-gradient(circle, rgba(90, 200, 250, 0.6) 0%, rgba(127, 231, 255, 0.4) 30%, rgba(90, 200, 250, 0.2) 60%, transparent 100%)',
                  }}
                  animate={{
                    scale: [1, 1.3, 0.9, 1],
                    opacity: [0.5, 0.9, 0.6, 0.5],
                    filter: [
                      'brightness(1) saturate(1)',
                      'brightness(1.3) saturate(1.2)',
                      'brightness(0.9) saturate(0.9)',
                      'brightness(1) saturate(1)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: cloud.delay,
                  }}
                />
                
                {/* Wave function interference pattern with wobble */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-lg"
                  style={{
                    width: cloud.size * 1.3,
                    height: cloud.size * 1.3,
                    marginLeft: -cloud.size * 0.15,
                    marginTop: -cloud.size * 0.15,
                    background: 'radial-gradient(circle, rgba(127, 231, 255, 0.7) 0%, rgba(90, 200, 250, 0.5) 40%, transparent 80%)',
                  }}
                  animate={{
                    scale: [0.9, 1.2, 0.9],
                    opacity: [0.6, 1, 0.6],
                    rotate: [0, 180, 360],
                    x: [0, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4, 0],
                    y: [0, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: [0.42, 0, 0.58, 1], // Quantum ease
                    delay: cloud.delay + 0.5,
                  }}
                />
                
                {/* Core probability density with glow pulsing */}
                <motion.div
                  className="relative rounded-full blur-md"
                  style={{
                    width: cloud.size * 0.6,
                    height: cloud.size * 0.6,
                    marginLeft: cloud.size * 0.2,
                    marginTop: cloud.size * 0.2,
                    background: 'radial-gradient(circle, rgba(127, 231, 255, 0.9) 0%, rgba(90, 200, 250, 0.7) 50%, rgba(120, 175, 255, 0.5) 100%)',
                    boxShadow: '0 0 20px rgba(90, 200, 250, 0.9), 0 0 40px rgba(127, 231, 255, 0.6)',
                  }}
                  animate={{
                    scale: [1, 1.2, 0.9, 1],
                    opacity: [0.8, 1, 0.7, 0.8],
                    boxShadow: [
                      '0 0 20px rgba(90, 200, 250, 0.9), 0 0 40px rgba(127, 231, 255, 0.6)',
                      '0 0 30px rgba(90, 200, 250, 1), 0 0 60px rgba(127, 231, 255, 0.8)',
                      '0 0 15px rgba(90, 200, 250, 0.8), 0 0 30px rgba(127, 231, 255, 0.5)',
                      '0 0 20px rgba(90, 200, 250, 0.9), 0 0 40px rgba(127, 231, 255, 0.6)',
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: cloud.delay,
                  }}
                />
                
                {/* Wave oscillation nodes with random jitter */}
                {[0, 60, 120, 180, 240, 300].map((nodeAngle, nodeIdx) => (
                  <motion.div
                    key={nodeIdx}
                    className="absolute rounded-full blur-sm"
                    style={{
                      width: 4,
                      height: 4,
                      left: cloud.size * 0.4 + Math.cos((nodeAngle * Math.PI) / 180) * cloud.size * 0.2,
                      top: cloud.size * 0.4 + Math.sin((nodeAngle * Math.PI) / 180) * cloud.size * 0.2,
                      background: 'rgba(127, 231, 255, 0.8)',
                      boxShadow: '0 0 8px rgba(90, 200, 250, 0.9)',
                    }}
                    animate={{
                      opacity: [0.3, 0.9, 0.3],
                      scale: [0.5, 1.5, 0.5],
                      x: [0, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, 0],
                      y: [0, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: cloud.delay + (nodeIdx * 0.1),
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
        
        {/* Wave interference patterns - overlapping probability waves */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 400px 200px at 40% 50%, rgba(90, 200, 250, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse 300px 250px at 60% 50%, rgba(127, 231, 255, 0.06) 0%, transparent 60%)
            `,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Quantum ripple effect - probability wave propagation */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(90, 200, 250, 0.08) 40%, transparent 60%)',
            border: '1px solid rgba(90, 200, 250, 0.1)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary quantum ripple - out of phase */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 30%, rgba(127, 231, 255, 0.06) 50%, transparent 70%)',
            border: '1px solid rgba(127, 231, 255, 0.08)',
          }}
          animate={{
            scale: [1.2, 1.5, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        
        {/* Quantum Field Perlin Noise Wave Function Overlay - Heat Distortion Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full opacity-60">
          {/* Layer 1: Primary quantum field distortion */}
          <motion.div
            className="absolute inset-0"
            style={{
              filter: 'url(#quantumDistortion)',
              background: `
                radial-gradient(circle at 30% 40%, rgba(90, 200, 250, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 70% 60%, rgba(127, 231, 255, 0.12) 0%, transparent 40%),
                radial-gradient(circle at 50% 50%, rgba(120, 175, 255, 0.08) 0%, transparent 50%)
              `,
            }}
            animate={{
              x: [0, 20, -15, 0],
              y: [0, -15, 20, 0],
              scale: [1, 1.05, 0.98, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Layer 2: Secondary heat distortion field */}
          <motion.div
            className="absolute inset-0"
            style={{
              filter: 'url(#heatDistortion)',
              background: `
                radial-gradient(ellipse 500px 300px at 35% 45%, rgba(127, 231, 255, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse 400px 350px at 65% 55%, rgba(90, 200, 250, 0.08) 0%, transparent 50%)
              `,
            }}
            animate={{
              x: [0, -25, 18, 0],
              y: [0, 18, -22, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: [0.45, 0.05, 0.55, 0.95],
            }}
          />
          
          {/* Layer 3: Electromagnetic turbulence waves */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                conic-gradient(from 0deg at 50% 50%, 
                  transparent 0deg,
                  rgba(90, 200, 250, 0.06) 60deg,
                  transparent 120deg,
                  rgba(127, 231, 255, 0.04) 180deg,
                  transparent 240deg,
                  rgba(120, 175, 255, 0.05) 300deg,
                  transparent 360deg
                )
              `,
              filter: 'blur(40px)',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.08, 0.95, 1],
            }}
            transition={{
              rotate: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
          
          {/* Layer 4: Flowing gradient streams */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, 
                  transparent 0%,
                  rgba(90, 200, 250, 0.08) 25%,
                  transparent 50%,
                  rgba(127, 231, 255, 0.06) 75%,
                  transparent 100%
                )
              `,
              filter: 'blur(30px)',
            }}
            animate={{
              x: [-50, 50, -50],
              y: [30, -30, 30],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Layer 5: Pulsating quantum foam */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 40% 35%, rgba(127, 231, 255, 0.12) 0%, transparent 25%),
                radial-gradient(circle at 60% 65%, rgba(90, 200, 250, 0.1) 0%, transparent 30%),
                radial-gradient(circle at 50% 50%, rgba(120, 175, 255, 0.08) 0%, transparent 35%)
              `,
              filter: 'blur(50px)',
            }}
            animate={{
              scale: [1, 1.15, 0.92, 1],
              opacity: [0.4, 0.7, 0.5, 0.4],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          
          {/* Layer 6: Warping edge fields */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 20% 50%, rgba(90, 200, 250, 0.1) 0%, transparent 40%),
                radial-gradient(ellipse at 80% 50%, rgba(127, 231, 255, 0.08) 0%, transparent 40%),
                radial-gradient(ellipse at 50% 20%, rgba(120, 175, 255, 0.06) 0%, transparent 35%),
                radial-gradient(ellipse at 50% 80%, rgba(90, 200, 250, 0.07) 0%, transparent 35%)
              `,
              filter: 'blur(35px)',
            }}
            animate={{
              x: [15, -15, 15],
              y: [-12, 12, -12],
              scale: [0.98, 1.06, 0.98],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
            }}
          />
        </div>
      </div>
    </div>
  );
}