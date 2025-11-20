import { AtomWaveFunction } from '../components/innovation1/AtomWaveFunction';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AtomWaveFunctionDemo() {
  return (
    <div className="relative">
      <SEO
        title="Atom Wave Function Animation | Innovation1"
        description="Quantum-inspired animated visualization showcasing Innovation1's AI-powered design aesthetic"
        keywords="quantum animation, atom visualization, wave function, AI design"
        noindex={true}
      />
      
      {/* Back button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-[#5AC8FA]/30 rounded-lg text-[#7FE7FF] hover:bg-white/20 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>
      
      {/* Info panel */}
      <div className="fixed top-6 right-6 z-50 max-w-xs p-4 bg-[#0D1B4C]/80 backdrop-blur-md border border-[#5AC8FA]/30 rounded-lg">
        <h3 className="text-sm font-bold text-[#7FE7FF] mb-2">
          Quantum Wave Function Visualization
        </h3>
        <p className="text-xs text-[#A6E1FF]/80 mb-3">
          An animated representation of autonomous AI intelligence, featuring orbital electron nodes, 
          pulsing nucleus core, and quantum wave distortions.
        </p>
        <div className="space-y-1 text-xs text-[#A6E1FF]/60">
          <div className="flex justify-between">
            <span>Orbit speeds:</span>
            <span className="text-[#5AC8FA]">20s / 35s / 50s</span>
          </div>
          <div className="flex justify-between">
            <span>Electron nodes:</span>
            <span className="text-[#5AC8FA]">8 autonomous agents</span>
          </div>
          <div className="flex justify-between">
            <span>Particles:</span>
            <span className="text-[#5AC8FA]">40 floating</span>
          </div>
          <div className="flex justify-between">
            <span>Nucleus pulse:</span>
            <span className="text-[#5AC8FA]">2.5s cycle</span>
          </div>
        </div>
      </div>
      
      {/* Main animation */}
      <AtomWaveFunction />
    </div>
  );
}
