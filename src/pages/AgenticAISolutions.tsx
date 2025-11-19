import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Brain,
  Network,
  Zap,
  Eye,
  Layers,
  GitBranch,
  FileText,
  BarChart3,
  Boxes,
  AlertCircle,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { ParticleField } from '../components/innovation1/ParticleField';
import { NeuralGrid } from '../components/innovation1/NeuralGrid';

export default function AgenticAISolutions() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        title="Agentic AI Solutions | Innovation1 - AI Systems That Think & Act"
        description="Build AI systems that think, act, and run your operations autonomously. Agentic AI, orchestration layers, and intelligent automation for modern teams."
        keywords="agentic AI, AI automation, AI agents, autonomous systems, AI orchestration, intelligent automation, operational AI"
      />

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B4C] via-[#020817] to-[#0D1B4C]" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#2D9CDB] rounded-full blur-[200px] opacity-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#C084F5] rounded-full blur-[180px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
        <NeuralGrid />
        <ParticleField />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0D1B4C]/95 backdrop-blur-xl shadow-lg border-b border-[#2D9CDB]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
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

            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium text-[#A6E1FF] hover:text-[#EEF8FF] transition-colors">
                Home
              </Link>
              <a href="#capabilities" className="text-sm font-medium text-[#A6E1FF] hover:text-[#EEF8FF] transition-colors">
                Capabilities
              </a>
              <a href="#process" className="text-sm font-medium text-[#A6E1FF] hover:text-[#EEF8FF] transition-colors">
                Process
              </a>
              <Link
                to="/login"
                className="relative group px-6 py-2.5 overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] to-[#C084F5] opacity-100 group-hover:opacity-90 transition-opacity" />
                <span className="relative text-white font-medium">Staff Login</span>
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-[#A6E1FF]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="lg:hidden bg-[#0D1B4C]/95 backdrop-blur-xl border-t border-[#2D9CDB]/20"
          >
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block py-2 text-base font-medium text-[#A6E1FF]">
                Home
              </Link>
              <a href="#capabilities" className="block py-2 text-base font-medium text-[#A6E1FF]">
                Capabilities
              </a>
              <a href="#process" className="block py-2 text-base font-medium text-[#A6E1FF]">
                Process
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-12">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FBBF24]/10 backdrop-blur-sm rounded-full border border-[#FBBF24]/30 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse" />
            <span className="text-sm font-medium text-[#FBBF24] uppercase tracking-wider">
              Innovation1 // Agentic AI Systems
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-[#EEF8FF]"
          >
            AI systems that think, act, and run your operations{' '}
            <span className="bg-gradient-to-r from-[#2D9CDB] via-[#A6E1FF] to-[#C084F5] bg-clip-text text-transparent">
              autonomously
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#A6E1FF]/80 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            We build agentic AI, orchestration layers, and intelligent automation systems that replace manual workflows and transform your teams from overwhelmed to unstoppable.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-8"
          >
            <motion.a
              href="#capabilities"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group w-full sm:w-auto px-8 py-4 overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF]" />
              <span className="relative flex items-center justify-center gap-2 text-white font-semibold">
                Book an AI Systems Workshop
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="#process"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-[#2D9CDB]/30 text-[#EEF8FF] rounded-xl hover:bg-white/10 transition-all font-semibold"
            >
              Explore Agent Blueprints
            </motion.a>
          </motion.div>

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-[#A6E1FF]/50 italic"
          >
            For teams who want more than automation — they want intelligence.
          </motion.p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EEF8FF] mb-12 text-center"
          >
            You're ready for agentic AI if…
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ToneCard
              icon={<AlertCircle className="w-6 h-6" />}
              title="Your team is drowning in repetitive decisions"
              description="You need AI agents that act on information, not just analyze it."
              tone="warning"
              index={0}
            />
            <ToneCard
              icon={<Zap className="w-6 h-6" />}
              title="Your workflows require speed and precision"
              description="Agentic systems triage, escalate, and resolve tasks faster than any manual process."
              tone="primary"
              index={1}
            />
            <ToneCard
              icon={<Brain className="w-6 h-6" />}
              title="You want an ops layer that can think for itself"
              description="Decision-making, coordination, monitoring — all handled by intelligent agents."
              tone="accent"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EEF8FF] mb-12 text-center"
          >
            What agentic AI unlocks for your organisation
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OutlineCard
              icon={<Clock className="w-6 h-6" />}
              title="A system that works while you sleep"
              description="Agents monitor your operations 24/7, detect anomalies, and take action without waiting for humans."
              index={0}
            />
            <OutlineCard
              icon={<CheckCircle2 className="w-6 h-6" />}
              title="Decisions, not dashboards"
              description="Dashboards tell you what's wrong. Agents fix it — or escalate with context."
              index={1}
            />
            <OutlineCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Your processes become self-optimising"
              description="Agents learn from outcomes and adapt workflows, messages, and actions over time."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EEF8FF] mb-12 text-center"
          >
            What we build with you
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SolidCard
              icon={<Brain className="w-8 h-8" />}
              title="Operational AI Agents"
              description="Agents that manage tasks, detect blockers, handle triage, escalate issues, and coordinate across teams."
              variant="solid"
              index={0}
            />
            <SolidCard
              icon={<Network className="w-8 h-8" />}
              title="Agent Orchestration Layers"
              description="Multi-agent systems that collaborate, negotiate, and delegate responsibilities autonomously."
              variant="solid"
              index={1}
            />
            <SolidCard
              icon={<FileText className="w-8 h-8" />}
              title="Self-Updating Knowledge Systems"
              description="AI that maintains the documentation, SOPs, and project knowledge your team usually forgets to update."
              variant="solid"
              index={2}
            />
            <SolidCard
              icon={<Layers className="w-8 h-8" />}
              title="AI-Driven Project Management"
              description="Your dashboard becomes an active system that predicts slips, assigns owners, drafts updates, and closes loops."
              variant="subtle"
              index={3}
            />
            <SolidCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Automated Reporting & Insights"
              description="Real-time synthesis: weekly updates, risk summaries, forecasts — generated and delivered automatically."
              variant="subtle"
              index={4}
            />
            <SolidCard
              icon={<Boxes className="w-8 h-8" />}
              title="AI-Powered Integrations"
              description="Agents that read/write data across your tools (Slack, Notion, Jira, spreadsheets, CRMs) intelligently."
              variant="subtle"
              index={5}
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EEF8FF] mb-12 text-center"
          >
            How we build agentic AI with you
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TimelineCard
              number="01"
              label="Map the Workflows"
              title="Find where intelligence belongs"
              description="We identify decision points, failure modes, bottlenecks, and automation points across your ops."
              index={0}
            />
            <TimelineCard
              number="02"
              label="Design the Agents"
              title="Define roles, responsibilities & behaviours"
              description="Every agent gets a purpose, rules, permissions, and escalation logic mapped around your real workflows."
              index={1}
            />
            <TimelineCard
              number="03"
              label="Build & Orchestrate"
              title="Ship the agentic layer"
              description="We integrate into your stack and deploy a multi-agent system that collaborates to run your operations."
              index={2}
            />
            <TimelineCard
              number="04"
              label="Monitor & Evolve"
              title="Your agents improve over time"
              description="We tune agent behaviour, add new capabilities, and scale the system as your organisation grows."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Fit Signals */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EEF8FF] mb-12 text-center"
          >
            When agentic AI is the right move
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <BulletPoint text="You're running complex operations where context and coordination matter." />
            <BulletPoint text="You need agents that do real work, not chatbots that answer questions." />
            <BulletPoint text="You want an AI layer that collaborates with your team — not replaces them." />
            <BulletPoint text="You're ready to operationalise intelligence across your entire organisation." />
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12">
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            {/* Accent band background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB]/20 via-[#C084F5]/20 to-[#2D9CDB]/20" />
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-[#2D9CDB]/30" />

            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#EEF8FF] mb-4">
                    Ready to build your agentic future?
                  </h2>
                  <p className="text-base sm:text-lg text-[#A6E1FF]/80">
                    Let's map your operations and design the agents that can manage, automate, and accelerate your business.
                  </p>
                </div>

                <motion.a
                  href="mailto:info@innovation1.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group px-8 py-4 overflow-hidden rounded-xl flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A6E1FF] to-[#C084F5] opacity-0 group-hover:opacity-100 blur transition-opacity" />
                  <span className="relative flex items-center gap-2 text-white font-semibold whitespace-nowrap">
                    Start with an AI Strategy Session
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#2D9CDB]/20 py-12 px-4 sm:px-6 lg:px-12">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-[#EEF8FF]">Innovation1</span>
          </div>
          <p className="text-sm text-[#A6E1FF]/60">
            &copy; 2025 Innovation1 Web Design & Development. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Component: Tone Card (warning, primary, accent)
function ToneCard({
  icon,
  title,
  description,
  tone,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tone: 'warning' | 'primary' | 'accent';
  index: number;
}) {
  const toneColors = {
    warning: 'from-[#FBBF24]/10 to-[#FBBF24]/5 border-[#FBBF24]/30',
    primary: 'from-[#2D9CDB]/10 to-[#2D9CDB]/5 border-[#2D9CDB]/30',
    accent: 'from-[#C084F5]/10 to-[#C084F5]/5 border-[#C084F5]/30',
  };

  const iconColors = {
    warning: 'text-[#FBBF24]',
    primary: 'text-[#2D9CDB]',
    accent: 'text-[#C084F5]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-6 rounded-2xl bg-gradient-to-br ${toneColors[tone]} border backdrop-blur-sm group hover:scale-105 transition-transform`}
    >
      <div className={`mb-4 ${iconColors[tone]}`}>{icon}</div>
      <h3 className="text-lg font-semibold text-[#EEF8FF] mb-2">{title}</h3>
      <p className="text-sm text-[#A6E1FF]/70">{description}</p>
    </motion.div>
  );
}

// Component: Outline Card
function OutlineCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 rounded-2xl bg-white/5 border border-[#2D9CDB]/30 backdrop-blur-sm group hover:bg-white/10 hover:border-[#2D9CDB]/50 transition-all"
    >
      <div className="text-[#2D9CDB] mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-[#EEF8FF] mb-2">{title}</h3>
      <p className="text-sm text-[#A6E1FF]/70">{description}</p>
    </motion.div>
  );
}

// Component: Solid Card (solid vs subtle variants)
function SolidCard({
  icon,
  title,
  description,
  variant,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant: 'solid' | 'subtle';
  index: number;
}) {
  const bgClass =
    variant === 'solid'
      ? 'bg-gradient-to-br from-[#2D9CDB]/20 to-[#C084F5]/20 border-[#2D9CDB]/40'
      : 'bg-white/5 border-white/10';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-6 rounded-2xl ${bgClass} border backdrop-blur-sm group hover:scale-105 transition-transform`}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#EEF8FF] mb-2">{title}</h3>
      <p className="text-sm text-[#A6E1FF]/70">{description}</p>
    </motion.div>
  );
}

// Component: Timeline Card
function TimelineCard({
  number,
  label,
  title,
  description,
  index,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 rounded-2xl bg-white/5 border border-[#2D9CDB]/30 backdrop-blur-sm group hover:bg-white/10 transition-all"
    >
      {/* Number badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2D9CDB]/20 rounded-full mb-4">
        <span className="text-xs font-bold text-[#A6E1FF] uppercase tracking-wider">
          {number} / {label}
        </span>
      </div>

      <h3 className="text-xl font-bold text-[#EEF8FF] mb-2">{title}</h3>
      <p className="text-sm text-[#A6E1FF]/70">{description}</p>

      {/* Connecting line decoration */}
      <div className="absolute -bottom-2 left-6 w-1 h-4 bg-gradient-to-b from-[#2D9CDB] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

// Component: Bullet Point
function BulletPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-[#2D9CDB]/20 backdrop-blur-sm hover:bg-white/10 hover:border-[#2D9CDB]/40 transition-all">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] flex items-center justify-center mt-0.5">
        <CheckCircle2 className="w-4 h-4 text-white" />
      </div>
      <p className="text-base text-[#A6E1FF]/80 leading-relaxed">{text}</p>
    </div>
  );
}
