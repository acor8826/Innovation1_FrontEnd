import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface ElectronNodeProps {
  angle: number;
  radius: number;
  size: number;
  speed: number;
  delay: number;
}

function ElectronNode({ angle, radius, size, speed, delay }: ElectronNodeProps) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    >
      <motion.div
        className="absolute"
        style={{
          left: radius,
          top: 0,
          transform: `rotate(${angle}deg)`,
        }}
        whileHover={{
          scale: 1.4,
          transition: { duration: 0.3 },
        }}
      >
        {/* Electron node with glow */}
        <div className="relative">
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-60"
            style={{
              width: size * 3,
              height: size * 3,
              marginLeft: -size,
              marginTop: -size,
              background: 'radial-gradient(circle, rgba(90, 200, 250, 0.8) 0%, rgba(127, 231, 255, 0.3) 40%, transparent 70%)',
            }}
          />
          
          {/* Inner glow */}
          <div
            className="absolute inset-0 rounded-full blur-md"
            style={{
              width: size * 2,
              height: size * 2,
              marginLeft: -size / 2,
              marginTop: -size / 2,
              background: 'radial-gradient(circle, rgba(120, 175, 255, 0.9) 0%, rgba(90, 200, 250, 0.5) 50%, transparent 80%)',
            }}
          />
          
          {/* Core node */}
          <motion.div
            className="relative rounded-full"
            style={{
              width: size,
              height: size,
              background: 'radial-gradient(circle, #7FE7FF 0%, #5AC8FA 50%, #78AFFF 100%)',
              boxShadow: '0 0 20px rgba(90, 200, 250, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.5)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

interface OrbitRingProps {
  radius: number;
  thickness: number;
  opacity: number;
  rotationSpeed: number;
}

function OrbitRing({ radius, thickness, opacity, rotationSpeed }: OrbitRingProps) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 rounded-full"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
        border: `${thickness}px solid transparent`,
        borderImage: 'linear-gradient(90deg, rgba(90, 200, 250, 0.6), rgba(127, 231, 255, 0.8), rgba(120, 175, 255, 0.6)) 1',
        boxShadow: `0 0 ${thickness * 4}px rgba(90, 200, 250, ${opacity}), inset 0 0 ${thickness * 2}px rgba(127, 231, 255, ${opacity * 0.5})`,
        opacity: opacity,
      }}
      animate={{
        rotate: 360,
        opacity: [opacity, opacity * 1.3, opacity],
      }}
      transition={{
        rotate: {
          duration: rotationSpeed,
          repeat: Infinity,
          ease: "linear",
        },
        opacity: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    />
  );
}

function Particle({ x, y, size, speed, delay }: { x: number; y: number; size: number; speed: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: 'radial-gradient(circle, rgba(127, 231, 255, 0.8) 0%, rgba(90, 200, 250, 0.4) 50%, transparent 100%)',
        boxShadow: `0 0 ${size * 2}px rgba(90, 200, 250, 0.6)`,
      }}
      animate={{
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
        y: [0, -20, 0],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );
}

export function AtomWaveFunction() {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; speed: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 8 + 4,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#020617]">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B4C] via-[#020817] to-[#0D1B4C]" />
      
      {/* Nebula glow backgrounds */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#2D9CDB] rounded-full blur-[200px] opacity-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#C084F5] rounded-full blur-[180px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(90, 200, 250, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(90, 200, 250, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Particle field */}
      <div className="absolute inset-0">
        {particles.map((particle, index) => (
          <Particle
            key={index}
            x={particle.x}
            y={particle.y}
            size={particle.size}
            speed={particle.speed}
            delay={particle.delay}
          />
        ))}
      </div>
      
      {/* Wave distortion overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse 800px 400px at 30% 50%, rgba(90, 200, 250, 0.15), transparent),
            radial-gradient(ellipse 600px 500px at 70% 50%, rgba(127, 231, 255, 0.1), transparent)
          `,
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Central atom structure */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Orbit rings */}
        <OrbitRing radius={180} thickness={1} opacity={0.4} rotationSpeed={20} />
        <OrbitRing radius={280} thickness={1} opacity={0.3} rotationSpeed={35} />
        <OrbitRing radius={380} thickness={1} opacity={0.25} rotationSpeed={50} />
        
        {/* Central nucleus */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Outer diffused glow */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              width: 400,
              height: 400,
              marginLeft: -200,
              marginTop: -200,
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
              width: 250,
              height: 250,
              marginLeft: -125,
              marginTop: -125,
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
          
          {/* Inner sharp glow */}
          <motion.div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              width: 150,
              height: 150,
              marginLeft: -75,
              marginTop: -75,
              background: 'radial-gradient(circle, rgba(127, 231, 255, 0.9) 0%, rgba(90, 200, 250, 0.7) 50%, rgba(120, 175, 255, 0.4) 80%, transparent 100%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          
          {/* Core nucleus sphere */}
          <motion.div
            className="relative rounded-full"
            style={{
              width: 80,
              height: 80,
              marginLeft: -40,
              marginTop: -40,
              background: 'radial-gradient(circle at 30% 30%, #EEF8FF 0%, #7FE7FF 30%, #5AC8FA 60%, #78AFFF 100%)',
              boxShadow: `
                0 0 40px rgba(90, 200, 250, 0.8),
                0 0 80px rgba(127, 231, 255, 0.6),
                inset 0 0 30px rgba(255, 255, 255, 0.6),
                inset -10px -10px 40px rgba(90, 200, 250, 0.4)
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
                width: 30,
                height: 30,
                top: 10,
                left: 15,
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                filter: 'blur(4px)',
              }}
            />
          </motion.div>
        </div>
        
        {/* Electron nodes on different orbits */}
        <ElectronNode angle={0} radius={180} size={16} speed={20} delay={0} />
        <ElectronNode angle={120} radius={180} size={14} speed={20} delay={0.5} />
        <ElectronNode angle={240} radius={180} size={15} speed={20} delay={1} />
        
        <ElectronNode angle={60} radius={280} size={18} speed={35} delay={0.3} />
        <ElectronNode angle={180} radius={280} size={16} speed={35} delay={0.8} />
        
        <ElectronNode angle={30} radius={380} size={14} speed={50} delay={0.2} />
        <ElectronNode angle={150} radius={380} size={15} speed={50} delay={0.7} />
        <ElectronNode angle={270} radius={380} size={13} speed={50} delay={1.2} />
      </div>
      
      {/* Quantum wave ripple effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(90, 200, 250, 0.05) 40%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Edge vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(2, 6, 23, 0.4) 70%, rgba(2, 6, 23, 0.8) 100%)',
        }}
      />
    </div>
  );
}
