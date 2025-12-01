import { useState } from 'react';
import { ArrowRight, Mail, CheckCircle, Sparkles, Zap, Users } from 'lucide-react';
import { ContactModal } from './ContactModal';

export function MobileHero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section id="hero" className="lg:hidden relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 px-5 bg-gradient-to-b from-sky-50 via-white to-white">

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-0 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

        {/* Main Content Container */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-md mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white border-2 border-sky-200 rounded-full px-5 py-2.5 shadow-sm">
            <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
            <Sparkles className="w-4 h-4 text-sky-500" />
            <span className="text-sky-700 text-sm font-medium">AI-Powered Development Platform</span>
          </div>

          {/* Visual Element - Simplified modern design */}
          <div className="relative w-full max-w-[280px] aspect-square">
            {/* Soft glow behind */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-blue-200 rounded-3xl blur-2xl opacity-50"></div>

            {/* Main visual card */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-sky-200 shadow-xl shadow-sky-200/50 bg-white">
              {/* Icon grid pattern */}
              <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-sky-50 to-white">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-20 h-20 bg-sky-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div className="w-20 h-20 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="w-20 h-20 bg-sky-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="relative space-y-3">
            <h1 className="text-slate-900 leading-tight text-[1.875rem] font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Building Tomorrow's
              <span className="block bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mt-1">
                Systems Today
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-slate-600 leading-relaxed max-w-[280px] text-base">
            AI-powered development, agentic automation, and digital architecture.
          </p>

          {/* CTAs - Vertical Stack */}
          <div className="w-full space-y-3 pt-4">
            {/* Primary CTA */}
            <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-sky-500 text-white rounded-xl hover:bg-sky-600 active:scale-98 transition-all shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 min-h-[56px] font-semibold group">
              <span className="text-base">Start a Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA - Contact Us */}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-sky-500 text-sky-600 rounded-xl hover:bg-sky-50 active:scale-98 transition-all min-h-[56px] font-semibold"
            >
              <Mail className="w-5 h-5" />
              <span className="text-base">Contact Us</span>
            </button>
          </div>

          {/* Metrics Row - 3 Column Mini Grid */}
          <div className="w-full grid grid-cols-3 gap-4 pt-6 border-t border-sky-200">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-1">
                <Sparkles className="w-5 h-5 text-sky-500" />
              </div>
              <div className="text-slate-900 text-xl font-bold">50+</div>
              <div className="text-slate-600 text-xs leading-tight">AI Projects</div>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-1">
                <Zap className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-slate-900 text-xl font-bold">99.9%</div>
              <div className="text-slate-600 text-xs leading-tight">Uptime</div>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-1">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
              </div>
              <div className="text-slate-900 text-xl font-bold">24/7</div>
              <div className="text-slate-600 text-xs leading-tight">Support</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-3 pt-8 animate-bounce">
            <span className="text-slate-500 text-xs tracking-wider uppercase font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-sky-300 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-gradient-to-b from-sky-500 to-blue-500 rounded-full animate-scroll-indicator"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}