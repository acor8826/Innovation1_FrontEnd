import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
    ArrowLeft,
    Mail,
    Phone,
    MapPin,
    Send,
    Check,
    Sparkles,
    Brain,
    Zap,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { NeuralGrid } from '../components/innovation1/NeuralGrid';
import { ParticleField } from '../components/innovation1/ParticleField';

export default function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                subject: '',
                message: '',
            });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-[#020817] overflow-x-hidden">
            <SEO
                title="Contact Us | Innovation1 Web Design & Development"
                description="Get in touch with Innovation1 for AI-powered development, agentic automation, and intelligent digital architecture solutions."
                keywords="contact, Innovation1, AI development, automation, consultation"
            />

            {/* Background */}
            <div className="fixed inset-0">
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
            <div className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
                {/* Back Button */}
                <motion.button
                    onClick={() => navigate(-1)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/5 backdrop-blur-sm border border-[#2D9CDB]/30 text-[#A6E1FF] rounded-lg hover:bg-white/10 transition-all"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </motion.button>

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Column - Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Header */}
                            <div className="mb-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-[#2D9CDB]/30 mb-6"
                                >
                                    <Sparkles className="w-4 h-4 text-[#A6E1FF]" />
                                    <span className="text-sm font-medium text-[#A6E1FF]">
                                        Let's Connect
                                    </span>
                                </motion.div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                    <span className="text-[#EEF8FF]">Get in Touch</span>
                                    <br />
                                    <span className="bg-gradient-to-r from-[#2D9CDB] via-[#A6E1FF] to-[#C084F5] bg-clip-text text-transparent">
                                        Start Your Project
                                    </span>
                                </h1>

                                <p className="text-lg text-[#A6E1FF]/80 leading-relaxed max-w-xl">
                                    Ready to build tomorrow's systems today? Reach out to discuss your AI-powered development needs.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-6">
                                {/* Email */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB]/20 to-[#C084F5]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative bg-white/5 backdrop-blur-xl border border-[#2D9CDB]/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] flex items-center justify-center flex-shrink-0">
                                                <Mail className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-[#EEF8FF] mb-1">Email Us</h3>
                                                <a href="mailto:info@innovation1.com" className="text-[#A6E1FF] hover:text-[#EEF8FF] transition-colors">
                                                    info@innovation1.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Phone */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#C084F5]/20 to-[#A6E1FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative bg-white/5 backdrop-blur-xl border border-[#2D9CDB]/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#C084F5] to-[#A6E1FF] flex items-center justify-center flex-shrink-0">
                                                <Phone className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-[#EEF8FF] mb-1">Call Us</h3>
                                                <a href="tel:+1234567890" className="text-[#A6E1FF] hover:text-[#EEF8FF] transition-colors">
                                                    +1 (234) 567-8900
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Location */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#A6E1FF]/20 to-[#2D9CDB]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative bg-white/5 backdrop-blur-xl border border-[#2D9CDB]/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#A6E1FF] to-[#2D9CDB] flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-[#EEF8FF] mb-1">Visit Us</h3>
                                                <p className="text-[#A6E1FF]">
                                                    123 Innovation Street<br />
                                                    Tech City, TC 12345
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Features */}
                            <div className="mt-12 grid grid-cols-3 gap-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#2D9CDB]/20 to-[#A6E1FF]/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <Brain className="w-6 h-6 text-[#A6E1FF]" />
                                    </div>
                                    <div className="text-sm text-[#A6E1FF]/70">AI Powered</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#C084F5]/20 to-[#A6E1FF]/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <Zap className="w-6 h-6 text-[#A6E1FF]" />
                                    </div>
                                    <div className="text-sm text-[#A6E1FF]/70">Fast Response</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#A6E1FF]/20 to-[#2D9CDB]/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <Sparkles className="w-6 h-6 text-[#A6E1FF]" />
                                    </div>
                                    <div className="text-sm text-[#A6E1FF]/70">24/7 Support</div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right Column - Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#2D9CDB]/30 via-[#C084F5]/20 to-[#A6E1FF]/30 rounded-3xl blur-3xl opacity-50" />

                            {/* Form Container */}
                            <div className="relative bg-white/5 backdrop-blur-xl border border-[#2D9CDB]/30 rounded-3xl p-8 sm:p-10">
                                {!submitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-[#EEF8FF] mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-[#2D9CDB]/30 rounded-xl text-[#EEF8FF] placeholder-[#A6E1FF]/50 focus:outline-none focus:border-[#2D9CDB]/70 focus:bg-white/10 transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-[#EEF8FF] mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-[#2D9CDB]/30 rounded-xl text-[#EEF8FF] placeholder-[#A6E1FF]/50 focus:outline-none focus:border-[#2D9CDB]/70 focus:bg-white/10 transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        {/* Company & Phone Row */}
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-[#EEF8FF] mb-2">
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-white/5 border border-[#2D9CDB]/30 rounded-xl text-[#EEF8FF] placeholder-[#A6E1FF]/50 focus:outline-none focus:border-[#2D9CDB]/70 focus:bg-white/10 transition-all"
                                                    placeholder="Your Company"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-[#EEF8FF] mb-2">
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-white/5 border border-[#2D9CDB]/30 rounded-xl text-[#EEF8FF] placeholder-[#A6E1FF]/50 focus:outline-none focus:border-[#2D9CDB]/70 focus:bg-white/10 transition-all"
                                                    placeholder="+1 (234) 567-8900"
                                                />
                                            </div>
                                        </div>

                                        {/* Subject */}
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-[#EEF8FF] mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-[#2D9CDB]/30 rounded-xl text-[#EEF8FF] placeholder-[#A6E1FF]/50 focus:outline-none focus:border-[#2D9CDB]/70 focus:bg-white/10 transition-all"
                                                placeholder="How can we help?"
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-[#EEF8FF] mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={6}
                                                className="w-full px-4 py-3 bg-white/5 border border-[#2D9CDB]/30 rounded-xl text-[#EEF8FF] placeholder-[#A6E1FF]/50 focus:outline-none focus:border-[#2D9CDB]/70 focus:bg-white/10 transition-all resize-none"
                                                placeholder="Tell us about your project..."
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="relative group w-full px-8 py-4 overflow-hidden rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF]" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#A6E1FF] to-[#C084F5] opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span className="relative flex items-center justify-center gap-2 text-white font-semibold">
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-5 h-5" />
                                                        Send Message
                                                    </>
                                                )}
                                            </span>
                                        </button>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Check className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#EEF8FF] mb-2">
                                            Message Sent!
                                        </h3>
                                        <p className="text-[#A6E1FF]/80">
                                            Thank you for reaching out. We'll get back to you soon!
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
