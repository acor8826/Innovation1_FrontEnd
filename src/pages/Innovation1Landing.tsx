import { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Zap,
  Rocket,
  Pill,
  FlaskConical,
  ShieldCheck,
  ClipboardCheck,
  Database,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ParticleField } from '../components/innovation1/ParticleField';
import { NeuralGrid } from '../components/innovation1/NeuralGrid';
import { GlassCard } from '../components/innovation1/GlassCard';
import { TimelineStep } from '../components/innovation1/TimelineStep';
import { ShowcaseProject } from '../components/innovation1/ShowcaseProject';
import { QuantumAtomLazy } from '../components/innovation1/QuantumAtomLazy';
import { ContactModal } from '../components/innovation1/ContactModal';

function Innovation1Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020817] overflow-x-hidden">
      <SEO
        title="Innovation1 Pharmacy AI | TGA Compliant Automation & Compounding"
        description="Next-gen AI for Australian pharmacy. Automate compliance, compounding, and WebsterCare workflows with intelligent agentic architecture."
        keywords="Pharmacy AI, Compounding Automation, WebsterCare Integration, TGA Compliance, Australian Pharmacy, Agentic AI"
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#0D1B4C]/95 backdrop-blur-xl shadow-lg border-b border-[#2D9CDB]/20'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D9CDB] to-[#C084F5] blur-md opacity-75 rounded-lg" />
                <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#A6E1FF] to-[#EEF8FF] bg-clip-text text-transparent">
                Innovation1
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-[#A6E1FF] hover:text-[#EEF8FF] transition-colors">
                Features
              </a>
              <Link to="/agentic-ai" className="text-sm font-medium text-[#A6E1FF] hover:text-[#EEF8FF] transition-colors">
                Agentic AI
              </Link>
              <a href="#process" className="text-sm font-medium text-[#A6E1FF] hover:text-[#EEF8FF] transition-colors">
                Process
              </a>
              <a href="#showcase" className="text-sm font-medium text-[#A6E1FF] hover:text-[#EEF8FF] transition-colors">
                Showcase
              </a>
              <Link
                to="/login"
                className="relative group px-6 py-2.5 overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] to-[#C084F5] opacity-100 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#A6E1FF] to-[#C084F5] opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <span className="relative text-white font-medium">Staff Login</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-[#A6E1FF]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0D1B4C]/95 backdrop-blur-xl border-t border-[#2D9CDB]/20"
          >
            <div className="px-4 py-6 space-y-4">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-[#A6E1FF] hover:text-[#EEF8FF] transition-colors"
              >
                Features
              </a>
              <Link
                to="/agentic-ai"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-[#A6E1FF] hover:text-[#EEF8FF] transition-colors"
              >
                Agentic AI
              </Link>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-[#A6E1FF] hover:text-[#EEF8FF] transition-colors"
              >
                Process
              </a>
              <a
                href="#showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-[#A6E1FF] hover:text-[#EEF8FF] transition-colors"
              >
                Showcase
              </a>
              <Link
                to="/login"
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#2D9CDB] to-[#C084F5] text-white text-center rounded-lg hover:shadow-lg transition-all"
              >
                Staff Login
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Cinematic 3D Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cosmic Background Layers */}
        <div className="absolute inset-0">
          {/* Deep space gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B4C] via-[#020817] to-[#0D1B4C]" />

          {/* Nebula clouds */}
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#2D9CDB] rounded-full blur-[200px] opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#C084F5] rounded-full blur-[180px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />

          {/* Neural grid overlay */}
          <NeuralGrid />

          {/* Particle field */}
          <ParticleField />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-[#2D9CDB]/30 mb-6"
              >
                <ShieldCheck className="w-4 h-4 text-[#A6E1FF]" />
                <span className="text-sm font-medium text-[#A6E1FF]">
                  TGA & AHPRA Compliant Architecture
                </span>
              </motion.div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#EEF8FF]">Nex-Gen Agentic AI for</span>
                <br />
                <span className="bg-gradient-to-r from-[#2D9CDB] via-[#A6E1FF] to-[#C084F5] bg-clip-text text-transparent">
                  Australian Pharmacy
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-[#A6E1FF]/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Automating compliance, compounding, and WebsterCare workflows with intelligent agentic architecture.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
                <motion.button
                  onClick={() => setContactModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group w-full sm:w-auto px-8 py-4 overflow-hidden rounded-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A6E1FF] to-[#C084F5] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center justify-center gap-2 text-white font-semibold">
                    Start a Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>

                <motion.a
                  href="#showcase"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-[#2D9CDB]/30 text-[#EEF8FF] rounded-xl hover:bg-white/10 transition-all font-semibold"
                >
                  Explore AI Solutions
                </motion.a>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-6 sm:gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] bg-clip-text text-transparent mb-1">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-[#A6E1FF]/70">Compliance</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] bg-clip-text text-transparent mb-1">
                    50%
                  </div>
                  <div className="text-xs sm:text-sm text-[#A6E1FF]/70">Less Admin</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] bg-clip-text text-transparent mb-1">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-[#A6E1FF]/70">Monitoring</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Quantum Wave Function Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
            >
              <QuantumAtomLazy />
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          >
            <span className="text-xs text-[#A6E1FF]/70 uppercase tracking-wider">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5 text-[#2D9CDB]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#0D1B4C] to-[#020817]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#2D9CDB] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#C084F5] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EEF8FF] mb-4">
              Intelligent Solutions
            </h2>
            <p className="text-lg text-[#A6E1FF]/80 max-w-2xl mx-auto">
              Powered by cutting-edge AI and agentic automation technology
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <GlassCard
              icon={<FlaskConical className="w-8 h-8" />}
              title="Automated Compounding"
              description="AI-driven formulation checks, batch tracking, and precise weighing validation."
              index={0}
            />
            <GlassCard
              icon={<Pill className="w-8 h-8" />}
              title="WebsterCare Integration"
              description="Seamless robotic packing integration and medication profile synchronization."
              index={1}
            />
            <GlassCard
              icon={<ShieldCheck className="w-8 h-8" />}
              title="Regulatory Guardrails"
              description="Real-time AHPRA & TGA compliance monitoring for every transaction."
              index={2}
            />
            <GlassCard
              icon={<Database className="w-8 h-8" />}
              title="Smart Inventory"
              description="Predictive stock management for S8/S4 medications and retail products."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section id="process" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] to-[#0D1B4C]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EEF8FF] mb-4">
              Our Process
            </h2>
            <p className="text-lg text-[#A6E1FF]/80 max-w-2xl mx-auto">
              From concept to deployment: a proven methodology for AI excellence
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            <TimelineStep
              title="Audit & Discovery"
              description="Analyzing your pharmacy workflow and regulatory gaps"
              icon={<ClipboardCheck className="w-8 h-8" />}
              index={0}
              number="01"
            />
            <TimelineStep
              title="Compliance Architecture"
              description="Designing secure, compliant AI workflows"
              icon={<ShieldCheck className="w-8 h-8" />}
              index={1}
              number="02"
            />
            <TimelineStep
              title="Integration & Training"
              description="Connecting with Fred/Z and training staff"
              icon={<Zap className="w-8 h-8" />}
              index={2}
              number="03"
            />
            <TimelineStep
              title="Validation & Launch"
              description="Rigorous testing against Australian standards"
              icon={<Rocket className="w-8 h-8" />}
              index={3}
              isLast
              number="04"
            />
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B4C] via-[#020817] to-[#0D1B4C]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 right-40 w-96 h-96 bg-[#C084F5] rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EEF8FF] mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-[#A6E1FF]/80 max-w-2xl mx-auto">
              Real-world AI implementations driving measurable results
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <ShowcaseProject
              title="Compounding Lab Automation"
              description="Reduced batch errors by 100% for a major Sydney compounding pharmacy."
              tags={['Compounding', 'Automation', 'Safety']}
              gradient="from-[#2D9CDB] to-[#1E88E5]"
              index={0}
            />
            <ShowcaseProject
              title="WebsterCare Robot Sync"
              description="Unified patient data across dispensing and packing robots."
              tags={['Robotics', 'Integration', 'WebsterCare']}
              gradient="from-[#C084F5] to-[#9333EA]"
              index={1}
            />
            <ShowcaseProject
              title="Retail Workflow Agent"
              description="Automated S3 recording and customer counseling logs."
              tags={['Retail', 'Compliance', 'S3']}
              gradient="from-[#A6E1FF] to-[#2D9CDB]"
              index={2}
            />
            <ShowcaseProject
              title="Telehealth Integration"
              description="Seamless script-to-dispatch workflow for online pharmacy."
              tags={['Telehealth', 'Scripts', 'Dispatch']}
              gradient="from-[#1E88E5] to-[#2D9CDB]"
              index={3}
            />
            <ShowcaseProject
              title="Audit Defence AI Systems"
              description="Instant report generation for surprise TGA/AHPRA audits."
              tags={['Audit', 'Reporting', 'TGA']}
              gradient="from-[#C084F5] to-[#9333EA]"
              index={1}
            />
            <ShowcaseProject
              title="Multi-Site Orchestration"
              description="Centralized management for pharmacy groups."
              tags={['Enterprise', 'Management', 'Scalability']}
              gradient="from-[#2D9CDB] to-[#A6E1FF]"
              index={5}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#2D9CDB]/20 py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B4C] to-[#020817]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-[#EEF8FF]">Innovation1</span>
              </div>
              <p className="text-sm text-[#A6E1FF]/70">
                Building tomorrow's intelligent pharmacy systems today.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#EEF8FF] mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-[#A6E1FF]/70">
                <li><a href="#features" className="hover:text-[#A6E1FF] transition-colors">Agentic AI</a></li>
                <li><a href="#features" className="hover:text-[#A6E1FF] transition-colors">Automation</a></li>
                <li><a href="#features" className="hover:text-[#A6E1FF] transition-colors">Architecture</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#EEF8FF] mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-[#A6E1FF]/70">
                <li><a href="#process" className="hover:text-[#A6E1FF] transition-colors">Process</a></li>
                <li><a href="#showcase" className="hover:text-[#A6E1FF] transition-colors">Case Studies</a></li>
                <li><Link to="/login" className="hover:text-[#A6E1FF] transition-colors">Staff Portal</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#EEF8FF] mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-[#A6E1FF]/70">
                <li><a href="mailto:info@innovation1.com" className="hover:text-[#A6E1FF] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#A6E1FF] transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#2D9CDB]/20 text-center text-sm text-[#A6E1FF]/60">
            <p>&copy; 2025 Innovation1 Web Design & Development. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
}

export default memo(Innovation1Landing);