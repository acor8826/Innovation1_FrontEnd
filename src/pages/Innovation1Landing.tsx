import { ArrowRight, Bot, Zap, Network, FileText, Workflow, Cpu, Sparkles as SparklesIcon, Brain, Rocket } from 'lucide-react';
import { StickyNav } from '../components/innovation1/StickyNav';
import { Footer } from '../components/innovation1/Footer';
import { GlassmorphCard } from '../components/innovation1/GlassmorphCard';
import { HorizontalTimeline } from '../components/innovation1/HorizontalTimeline';
import { ShowcaseCard } from '../components/innovation1/ShowcaseCard';
import { CosmicButton } from '../components/innovation1/CosmicButton';
import { CosmicBackground } from '../components/innovation1/CosmicBackground';
import { NeuralLattice } from '../components/innovation1/NeuralLattice';
import { AgentCore } from '../components/innovation1/AgentCore';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Innovation1Landing() {
  const timelineSteps = [
    {
      number: 1,
      title: 'Discovery',
      description: 'We dive deep into your business needs, technical requirements, and automation opportunities.',
    },
    {
      number: 2,
      title: 'System Design',
      description: 'Our architects design scalable, maintainable systems with clear integration points.',
    },
    {
      number: 3,
      title: 'Agent Training',
      description: 'We develop and train AI agents on your specific use cases for optimal performance.',
    },
    {
      number: 4,
      title: 'Deployment',
      description: 'Smooth rollout with monitoring, testing, and continuous optimization.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#020817] overflow-x-hidden">
      <StickyNav />

      {/* SECTION 1: CINEMATIC 3D HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cosmic Background */}
        <CosmicBackground />

        {/* Neural Lattice */}
        <NeuralLattice />

        {/* Orbiting Agent Cores */}
        <AgentCore position="top-left" icon="brain" delay={0} />
        <AgentCore position="top-right" icon="cpu" delay={1} />
        <AgentCore position="bottom-left" icon="network" delay={2} />
        <AgentCore position="bottom-right" icon="sparkles" delay={3} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 pt-40 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-[#2D9CDB]/30 rounded-full px-6 py-3 shadow-xl shadow-[#2D9CDB]/10">
                <div className="w-2 h-2 bg-[#4ADE80] rounded-full animate-pulse"></div>
                <span className="text-[#A6E1FF]">AI-Powered Development Platform</span>
              </div>

              {/* Headline with Volumetric Glow */}
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-[#2D9CDB]/30 via-[#C084F5]/40 to-[#A6E1FF]/30 blur-[80px] animate-pulse-glow"></div>
                <h1 className="relative text-white leading-tight text-5xl lg:text-6xl xl:text-7xl">
                  Building Tomorrow's
                  <span className="block bg-gradient-to-r from-[#A6E1FF] via-[#C084F5] to-[#2D9CDB] bg-clip-text text-transparent mt-2">
                    Systems Today
                  </span>
                </h1>
              </div>

              {/* Subheadline */}
              <p className="text-[#A6E1FF] text-xl lg:text-2xl leading-relaxed max-w-xl">
                AI-powered development, agentic automation, and intelligent digital architecture for the next generation of software.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-4 flex-wrap pt-6">
                <CosmicButton variant="primary" icon={ArrowRight} size="lg">
                  Start a Project
                </CosmicButton>
                <CosmicButton variant="secondary" icon={SparklesIcon} size="lg">
                  Explore AI Solutions
                </CosmicButton>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-[#2D9CDB]/20">
                <div className="space-y-2">
                  <div className="text-4xl text-white bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] bg-clip-text text-transparent">50+</div>
                  <div className="text-[#A6E1FF]/70">AI Projects</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl text-white bg-gradient-to-r from-[#C084F5] to-[#A6E1FF] bg-clip-text text-transparent">99.9%</div>
                  <div className="text-[#A6E1FF]/70">Uptime</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl text-white bg-gradient-to-r from-[#2D9CDB] to-[#C084F5] bg-clip-text text-transparent">24/7</div>
                  <div className="text-[#A6E1FF]/70">Support</div>
                </div>
              </div>
            </div>

            {/* Right Column - 3D Central Form */}
            <div className="relative">
              {/* Volumetric light bloom */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D9CDB]/40 via-[#C084F5]/50 to-[#A6E1FF]/40 rounded-full blur-[120px] animate-pulse-glow"></div>
              
              {/* Main 3D Visual */}
              <div className="relative">
                <div className="rounded-[3rem] overflow-hidden border-2 border-[#A6E1FF]/30 shadow-2xl shadow-[#2D9CDB]/50 backdrop-blur-sm bg-white/5">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1658988958556-72342117610f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNEJTIwaG9sb2dyYW18ZW58MXx8fHwxNzYzNDUwMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="3D Neural Lattice Visualization"
                    className="w-full h-auto"
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Floating orbs */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] rounded-full flex items-center justify-center shadow-2xl shadow-[#2D9CDB]/60 animate-float">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-[#C084F5] to-[#A6E1FF] rounded-full flex items-center justify-center shadow-2xl shadow-[#C084F5]/60 animate-float" style={{ animationDelay: '1s' }}>
                  <Rocket className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce z-20">
          <span className="text-[#A6E1FF] text-sm tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#2D9CDB] rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-[#2D9CDB] to-[#C084F5] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES SECTION */}
      <section id="services" className="py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#0D1B4C] to-[#020817]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(45,156,219,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(192,132,245,0.08),transparent_50%)]"></div>

        {/* Floating nodes decoration */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#A6E1FF] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-[#C084F5] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-[#2D9CDB] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2D9CDB] via-[#C084F5] to-[#A6E1FF] text-white rounded-full px-6 py-2 mb-6 shadow-lg shadow-[#2D9CDB]/30">
              <SparklesIcon className="w-4 h-4" />
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-[#EEF8FF] mb-6 text-4xl lg:text-5xl">Agentic AI Systems</h2>
            <p className="text-[#A6E1FF] text-xl max-w-3xl mx-auto leading-relaxed">
              Autonomous systems that think, learn, and execute complex workflows without human intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassmorphCard
              icon={Bot}
              title="Agentic Automations"
              description="Deploy autonomous AI agents that handle complex decision-making, data processing, and workflow orchestration with minimal oversight."
              accentColor="blue"
            />
            <GlassmorphCard
              icon={Network}
              title="AI Workflow Architecture"
              description="Design and implement sophisticated multi-agent systems that collaborate, share knowledge, and optimize across domains."
              accentColor="purple"
            />
            <GlassmorphCard
              icon={FileText}
              title="Intelligent Document Systems"
              description="Advanced document processing with natural language understanding, automatic categorization, and smart data extraction."
              accentColor="cyan"
            />
            <GlassmorphCard
              icon={Workflow}
              title="Autonomous Operations Tools"
              description="Self-managing systems that monitor, adapt, and optimize operations in real-time based on learned patterns."
              accentColor="blue"
            />
            <GlassmorphCard
              icon={Zap}
              title="Real-Time Intelligence"
              description="Lightning-fast AI-powered analytics and decision-making engines that process data streams at scale."
              accentColor="purple"
            />
            <GlassmorphCard
              icon={Cpu}
              title="Adaptive Learning"
              description="Systems that continuously improve through machine learning, user feedback, and operational data analysis."
              accentColor="cyan"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: PROCESS TIMELINE */}
      <section id="process" className="py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#020817]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,225,255,0.05),transparent_70%)]"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2D9CDB] via-[#C084F5] to-[#A6E1FF] text-white rounded-full px-6 py-2 mb-6 shadow-lg shadow-[#2D9CDB]/30">
              <SparklesIcon className="w-4 h-4" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-[#EEF8FF] mb-6 text-4xl lg:text-5xl">Our Process</h2>
            <p className="text-[#A6E1FF] text-xl max-w-3xl mx-auto leading-relaxed">
              A systematic approach to building intelligent systems that deliver measurable results.
            </p>
          </div>

          <HorizontalTimeline steps={timelineSteps} />
        </div>
      </section>

      {/* SECTION 4: SHOWCASE / CASE STUDIES */}
      <section id="showcase" className="py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#0D1B4C] to-[#020817]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(192,132,245,0.08),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2D9CDB] via-[#C084F5] to-[#A6E1FF] text-white rounded-full px-6 py-2 mb-6 shadow-lg shadow-[#2D9CDB]/30">
              <SparklesIcon className="w-4 h-4" />
              <span>Showcase</span>
            </div>
            <h2 className="text-[#EEF8FF] mb-6 text-4xl lg:text-5xl">Case Studies</h2>
            <p className="text-[#A6E1FF] text-xl max-w-3xl mx-auto leading-relaxed">
              Real-world applications of AI and automation transforming businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ShowcaseCard
              title="Enterprise Data Pipeline"
              description="Automated data ingestion system processing 10M+ records daily with intelligent error recovery and real-time analytics."
              tags={['AI', 'Automation', 'Integration']}
              image="https://images.unsplash.com/photo-1617049037028-d4746ed5e6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNDUwMTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              gradient="blue"
            />
            <ShowcaseCard
              title="Neural Assistant Platform"
              description="Intelligent customer service system with natural language understanding, reducing support tickets by 60%."
              tags={['Agents', 'AI', 'NLP']}
              image="https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjM0NTAxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              gradient="purple"
            />
            <ShowcaseCard
              title="Smart Cloud Infrastructure"
              description="Multi-region platform with auto-scaling, disaster recovery, and AI-driven resource optimization."
              tags={['Automation', 'AI', 'Cloud']}
              image="https://images.unsplash.com/photo-1744640326166-433469d102f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNpcmN1aXQlMjBib2FyZHxlbnwxfHx8fDE3NjM0NDg2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              gradient="cyan"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <CosmicBackground />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(192,132,245,0.15),transparent_70%)]"></div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">
          <div className="mb-8">
            <div className="inline-block w-24 h-24 bg-gradient-to-br from-[#2D9CDB] via-[#C084F5] to-[#A6E1FF] rounded-[2rem] flex items-center justify-center shadow-2xl shadow-[#2D9CDB]/50 mb-8 animate-float">
              <SparklesIcon className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-white mb-6 text-4xl lg:text-5xl">Ready to Build the Future?</h2>
          <p className="text-[#A6E1FF] text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how AI-powered systems can transform your business operations and accelerate your growth.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <CosmicButton variant="primary" icon={ArrowRight} size="lg">
              Schedule Consultation
            </CosmicButton>
            <CosmicButton variant="secondary" size="lg">
              View Pricing
            </CosmicButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
