import { useEffect, useRef } from 'react';

export function NeuralLattice() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      glow: number;
    }> = [];

    // Create neural nodes
    for (let i = 0; i < 80; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        glow: Math.random() * Math.PI * 2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw neural connections
      nodes.forEach((n1, i) => {
        nodes.slice(i + 1).forEach((n2) => {
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = 0.3 * (1 - distance / 200);
            const gradient = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y);
            gradient.addColorStop(0, `rgba(45, 156, 219, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(192, 132, 245, ${opacity})`);
            gradient.addColorStop(1, `rgba(166, 225, 255, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        });

        // Update node position
        n1.x += n1.vx;
        n1.y += n1.vy;
        n1.glow += 0.02;

        // Bounce off edges
        if (n1.x < 0 || n1.x > canvas.width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > canvas.height) n1.vy *= -1;

        // Draw node with pulsing glow
        const glowIntensity = (Math.sin(n1.glow) + 1) / 2;
        const gradient = ctx.createRadialGradient(n1.x, n1.y, 0, n1.x, n1.y, n1.size * 4);
        gradient.addColorStop(0, `rgba(166, 225, 255, ${0.8 * glowIntensity})`);
        gradient.addColorStop(0.3, `rgba(192, 132, 245, ${0.4 * glowIntensity})`);
        gradient.addColorStop(1, 'rgba(166, 225, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.fillStyle = '#EEF8FF';
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
}
