import { ArrowRight, Sparkles, Brain, Zap, Shield } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function MobileHero() {
  return (
    <section id="hero" className="lg:hidden relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 px-5">
      {/* Vertical Cosmic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#0D1B4C] to-[#2D9CDB]/30"></div>
      
      {/* Animated Starfield */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Nebula Clouds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#2D9CDB] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-[#A6E1FF] rounded-full blur-[100px] opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-[250px] h-[250px] bg-[#C084F5] rounded-full blur-[90px] opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-md mx-auto">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-xl border border-[#2D9CDB]/30 rounded-full px-5 py-2.5 shadow-lg shadow-[#2D9CDB]/10">
          <div className="w-2 h-2 bg-[#4ADE80] rounded-full animate-pulse"></div>
          <Sparkles className="w-4 h-4 text-[#A6E1FF]" />
          <span className="text-[#A6E1FF] text-sm">AI-Powered Development Platform</span>
        </div>

        {/* Cinematic 3D AI Visual */}
        <div className="relative w-full max-w-[280px] aspect-square">
          {/* Volumetric glow behind */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D9CDB]/60 via-[#C084F5]/70 to-[#A6E1FF]/60 rounded-full blur-[80px] animate-pulse-glow"></div>
          
          {/* Main AI Visual */}
          <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-[#A6E1FF]/40 shadow-2xl shadow-[#2D9CDB]/60 bg-gradient-to-br from-[#020817]/80 to-[#0D1B4C]/80 backdrop-blur-sm">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761005653991-5e5bde985e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG9yYiUyMGdsb3d8ZW58MXx8fHwxNzYzNTI3OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI Neural Orb"
              className="w-full h-full object-cover"
            />
            {/* Glass-like reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60"></div>
            {/* Shimmer animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
            {/* Bottom gradient fade */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#020817] via-[#020817]/50 to-transparent"></div>
          </div>

          {/* Floating accent orbs */}
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] rounded-full flex items-center justify-center shadow-xl shadow-[#2D9CDB]/60 animate-float">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#C084F5] to-[#A6E1FF] rounded-full flex items-center justify-center shadow-xl shadow-[#C084F5]/60 animate-float" style={{ animationDelay: '1s' }}>
            <Zap className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Headline with Glow */}
        <div className="relative space-y-3">
          {/* Text glow for legibility */}
          <div className="absolute -inset-6 bg-gradient-to-b from-[#2D9CDB]/30 via-[#C084F5]/40 to-[#A6E1FF]/30 blur-[50px] animate-pulse-glow"></div>
          
          <h1 className="relative text-white leading-tight text-[1.75rem]" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
            Building Tomorrow's
            <span className="block bg-gradient-to-b from-[#A6E1FF] via-[#C084F5] to-[#2D9CDB] bg-clip-text text-transparent mt-1">
              Systems Today
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-[#A6E1FF] leading-relaxed max-w-[280px]" style={{ fontSize: '1.0625rem' }}>
          AI-powered development, agentic automation, and digital architecture.
        </p>

        {/* CTAs - Vertical Stack */}
        <div className="w-full space-y-3 pt-4">
          {/* Primary CTA */}
          <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#2D9CDB] via-[#A6E1FF] to-[#C084F5] text-white rounded-xl shadow-lg shadow-[#2D9CDB]/40 hover:shadow-xl hover:shadow-[#2D9CDB]/60 transition-all active:scale-98 min-h-[56px] group">
            <span className="text-base">Start a Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-xl border-2 border-[#2D9CDB]/50 text-[#A6E1FF] rounded-xl hover:bg-white/10 hover:border-[#2D9CDB]/70 transition-all active:scale-98 min-h-[56px]">
            <Sparkles className="w-5 h-5" />
            <span className="text-base">Explore AI Solutions</span>
          </button>
        </div>

        {/* Metrics Row - 3 Column Mini Grid */}
        <div className="w-full grid grid-cols-3 gap-4 pt-6 border-t border-[#2D9CDB]/20">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-8 h-8 bg-gradient-to-br from-[#2D9CDB]/20 to-[#A6E1FF]/20 rounded-lg flex items-center justify-center mb-1">
              <Brain className="w-4 h-4 text-[#A6E1FF]" />
            </div>
            <div className="text-white text-xl bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] bg-clip-text text-transparent">50+</div>
            <div className="text-[#A6E1FF]/70 text-xs leading-tight">AI Projects</div>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="w-8 h-8 bg-gradient-to-br from-[#C084F5]/20 to-[#A6E1FF]/20 rounded-lg flex items-center justify-center mb-1">
              <Zap className="w-4 h-4 text-[#A6E1FF]" />
            </div>
            <div className="text-white text-xl bg-gradient-to-r from-[#C084F5] to-[#A6E1FF] bg-clip-text text-transparent">99.9%</div>
            <div className="text-[#A6E1FF]/70 text-xs leading-tight">Uptime</div>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="w-8 h-8 bg-gradient-to-br from-[#2D9CDB]/20 to-[#C084F5]/20 rounded-lg flex items-center justify-center mb-1">
              <Shield className="w-4 h-4 text-[#A6E1FF]" />
            </div>
            <div className="text-white text-xl bg-gradient-to-r from-[#2D9CDB] to-[#C084F5] bg-clip-text text-transparent">24/7</div>
            <div className="text-[#A6E1FF]/70 text-xs leading-tight">Support</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-3 pt-8 animate-bounce">
          <span className="text-[#A6E1FF]/80 text-xs tracking-wider uppercase">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#2D9CDB]/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-[#2D9CDB] to-[#C084F5] rounded-full animate-scroll-indicator"></div>
          </div>
        </div>
      </div>

      {/* Additional decorative particles */}
      <div className="absolute top-1/4 left-8 w-3 h-3 bg-[#2D9CDB] rounded-full blur-sm animate-pulse"></div>
      <div className="absolute top-1/3 right-12 w-2 h-2 bg-[#A6E1FF] rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-16 w-2.5 h-2.5 bg-[#C084F5] rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}