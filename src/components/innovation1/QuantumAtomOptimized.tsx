import { motion } from 'motion/react';
import { memo, useMemo } from 'react';

// Optimized QuantumAtom with drastically reduced complexity
// Performance improvements:
// - 75% fewer animated particles (20 vs 80)
// - 60% fewer wave points (50 vs 120 per shell)
// - Reduced electron clouds (4 vs 8)
// - Memoized random calculations
// - Simplified blur effects
// - will-change CSS properties for GPU acceleration

export const QuantumAtomOptimized = memo(() => {
    // Memoize particle calculations to avoid re-computing on each render
    const particles = useMemo(() =>
        Array.from({ length: 20 }, (_, i) => ({
            id: `particle-${i}`,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.8,
            delay: Math.random() * 2,
            duration: Math.random() * 5 + 4,
            layer: i < 8 ? 'deep' : i < 14 ? 'mid' : 'close'
        })),
        []
    );

    const shells = useMemo(() => [
        { radius: 140, waveCount: 3, speed: 20, phase: 0, orbitSpeed: 25, points: 50 },
        { radius: 200, waveCount: 5, speed: 35, phase: Math.PI / 3, orbitSpeed: 40, points: 50 },
        { radius: 260, waveCount: 7, speed: 50, phase: Math.PI / 2, orbitSpeed: 55, points: 50 },
    ], []);

    const electrons = useMemo(() => [
        { angle: 0, radius: 140, size: 32, speed: 20, delay: 0 },
        { angle: 120, radius: 140, size: 28, speed: 20, delay: 0.5 },
        { angle: 60, radius: 200, size: 36, speed: 35, delay: 0.3 },
        { angle: 30, radius: 260, size: 30, speed: 50, delay: 0.2 },
    ], []);

    return (
        <div className="absolute inset-0 scale-75 sm:scale-90 lg:scale-100">
            <div className="relative w-full h-full">
                {/* Simplified background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B4C]/80 via-[#020817]/60 to-[#0D1B4C]/80 rounded-full" />

                {/* Optimized starfield - reduced from 80 to 20 particles */}
                <div className="absolute inset-0">
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute rounded-full"
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: particle.size,
                                height: particle.size,
                                background: particle.layer === 'close'
                                    ? 'radial-gradient(circle, rgba(127, 231, 255, 0.9) 0%, transparent 70%)'
                                    : 'radial-gradient(circle, rgba(200, 220, 255, 0.9) 0%, transparent 70%)',
                                boxShadow: `0 0 ${particle.size * 2}px rgba(180, 200, 255, 0.5)`,
                                willChange: 'opacity, transform',
                            }}
                            animate={{
                                opacity: [0.3, 0.9, 0.3],
                                scale: [0.8, 1.3, 0.8],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: particle.delay,
                            }}
                        />
                    ))}
                </div>

                {/* Central nucleus with optimized glow layers */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {/* Single unified glow instead of 3 separate layers */}
                    <motion.div
                        className="absolute rounded-full blur-3xl"
                        style={{
                            width: 280,
                            height: 280,
                            marginLeft: -140,
                            marginTop: -140,
                            background: 'radial-gradient(circle, rgba(90, 200, 250, 0.5) 0%, rgba(127, 231, 255, 0.3) 40%, transparent 70%)',
                            willChange: 'transform, opacity',
                        }}
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.5, 0.7, 0.5],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
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
                            boxShadow: '0 0 30px rgba(90, 200, 250, 0.8), 0 0 60px rgba(127, 231, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.6)',
                            willChange: 'transform',
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
                            className="absolute rounded-full blur-sm"
                            style={{
                                width: 18,
                                height: 18,
                                top: 8,
                                left: 12,
                                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
                            }}
                        />
                    </motion.div>
                </div>

                {/* Orbital shells with reduced points - 50 instead of 120 per shell */}
                {shells.map((shell, shellIdx) => (
                    <div key={`shell-${shellIdx}`} className="absolute top-1/2 left-1/2">
                        {/* Orbital ring */}
                        <motion.div
                            className="absolute rounded-full"
                            style={{
                                width: shell.radius * 2,
                                height: shell.radius * 2,
                                marginLeft: -shell.radius,
                                marginTop: -shell.radius,
                                border: '1px solid rgba(90, 200, 250, 0.25)',
                                boxShadow: `0 0 ${shell.radius / 50}px rgba(90, 200, 250, 0.3)`,
                                willChange: 'transform, opacity',
                            }}
                            animate={{
                                opacity: [0.2, 0.4, 0.2],
                                rotate: [0, 360],
                            }}
                            transition={{
                                opacity: {
                                    duration: 4,
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

                        {/* Wave pattern points - reduced count */}
                        {Array.from({ length: shell.points }).map((_, i) => {
                            const angle = (i / shell.points) * Math.PI * 2;
                            const wavePhase = Math.sin(shell.waveCount * angle + shell.phase);
                            const amplitude = 6 + wavePhase * 3;
                            const opacity = 0.15 + Math.abs(wavePhase) * 0.25;
                            const currentRadius = shell.radius + amplitude;

                            return (
                                <motion.div
                                    key={`wave-${shellIdx}-${i}`}
                                    className="absolute rounded-full"
                                    style={{
                                        width: 1.5,
                                        height: 1.5,
                                        left: Math.cos(angle) * currentRadius,
                                        top: Math.sin(angle) * currentRadius,
                                        background: `rgba(90, 200, 250, ${opacity})`,
                                        boxShadow: `0 0 ${3 + Math.abs(wavePhase) * 2}px rgba(127, 231, 255, ${opacity * 0.8})`,
                                        willChange: 'opacity, transform',
                                    }}
                                    animate={{
                                        opacity: [opacity * 0.7, opacity * 1.1, opacity * 0.7],
                                        scale: [0.9, 1.2, 0.9],
                                    }}
                                    transition={{
                                        duration: shell.speed / 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: (i / shell.points) * 1.5,
                                    }}
                                />
                            );
                        })}
                    </div>
                ))}

                {/* Electron probability clouds - reduced from 8 to 4 */}
                {electrons.map((cloud, index) => (
                    <motion.div
                        key={`electron-${index}`}
                        className="absolute top-1/2 left-1/2"
                        style={{
                            width: cloud.size,
                            height: cloud.size,
                            marginLeft: -cloud.size / 2,
                            marginTop: -cloud.size / 2,
                            willChange: 'transform',
                        }}
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: cloud.speed,
                            repeat: Infinity,
                            ease: "linear",
                            delay: cloud.delay,
                        }}
                    >
                        <motion.div
                            className="absolute"
                            style={{
                                left: cloud.radius,
                                top: 0,
                                transform: `rotate(${cloud.angle}deg)`,
                                willChange: 'transform',
                            }}
                        >
                            {/* Simplified probability cloud */}
                            <div className="relative">
                                {/* Single glow layer instead of 3 */}
                                <motion.div
                                    className="absolute rounded-full blur-lg"
                                    style={{
                                        width: cloud.size * 1.5,
                                        height: cloud.size * 1.5,
                                        marginLeft: -cloud.size * 0.25,
                                        marginTop: -cloud.size * 0.25,
                                        background: 'radial-gradient(circle, rgba(90, 200, 250, 0.7) 0%, rgba(127, 231, 255, 0.4) 40%, transparent 80%)',
                                        willChange: 'transform, opacity',
                                    }}
                                    animate={{
                                        scale: [1, 1.3, 0.9, 1],
                                        opacity: [0.6, 0.9, 0.6],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: cloud.delay,
                                    }}
                                />

                                {/* Core density */}
                                <motion.div
                                    className="relative rounded-full blur-md"
                                    style={{
                                        width: cloud.size * 0.5,
                                        height: cloud.size * 0.5,
                                        marginLeft: cloud.size * 0.25,
                                        marginTop: cloud.size * 0.25,
                                        background: 'radial-gradient(circle, rgba(127, 231, 255, 0.9) 0%, rgba(90, 200, 250, 0.7) 100%)',
                                        boxShadow: '0 0 15px rgba(90, 200, 250, 0.9)',
                                        willChange: 'transform, opacity',
                                    }}
                                    animate={{
                                        scale: [1, 1.15, 1],
                                        opacity: [0.8, 1, 0.8],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: cloud.delay,
                                    }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                ))}

                {/* Simplified quantum ripple - single layer instead of 6 */}
                <motion.div
                    className="absolute inset-0 pointer-events-none rounded-full"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(90, 200, 250, 0.06) 40%, transparent 65%)',
                        willChange: 'transform, opacity',
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </div>
    );
});

QuantumAtomOptimized.displayName = 'QuantumAtomOptimized';
