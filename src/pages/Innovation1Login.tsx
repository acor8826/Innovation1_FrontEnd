import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Mail, Sparkles, User } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useState, useEffect } from 'react';
import { auth } from '../utils/auth';
import { apiClient } from '../services/api';
import { ParticleField } from '../components/innovation1/ParticleField';
import { NeuralGrid } from '../components/innovation1/NeuralGrid';
import { motion } from 'motion/react';

export default function Innovation1Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    staffId: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (auth.isAuthenticated()) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validation
    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      setIsLoading(false);
      return;
    }

    try {
      // Use the auth utility which handles everything properly
      const success = await auth.login(formData.email, formData.password);

      if (success) {
        // Redirect to dashboard
        navigate('/dashboard', { replace: true });
      } else {
        setError('Invalid credentials. Please try again.');
        setIsLoading(false);
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError('Login failed. Please check your credentials and try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0D1B4C] via-[#020817] to-[#0D1B4C] px-4 sm:px-6 py-8">
      <SEO
        title="Staff Login Portal | Innovation1"
        description="Secure login portal for Innovation1 staff members. Access your dashboard and AI-powered tools."
        keywords="Innovation1 login, staff portal, secure login"
        canonical="https://innovation1.com/login"
      />

      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Nebula clouds */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2D9CDB] rounded-full blur-[150px] opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C084F5] rounded-full blur-[140px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Neural grid */}
        <NeuralGrid />

        {/* Particles */}
        <ParticleField />
      </div>

      {/* Back to Home Link */}
      <Link
        to="/"
        className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-2 text-[#A6E1FF] hover:text-[#EEF8FF] transition-colors z-10 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm sm:text-base">Back to Home</span>
      </Link>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Outer glow */}
        <div className="absolute -inset-1 bg-gradient-to-br from-[#2D9CDB] to-[#C084F5] rounded-3xl blur-xl opacity-50" />

        {/* Card */}
        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D9CDB] to-[#C084F5] blur-lg opacity-75 rounded-2xl" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] flex items-center justify-center shadow-xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#EEF8FF] mb-2">
              Staff Login Portal
            </h1>
            <p className="text-[#A6E1FF]/70">
              Access your Innovation1 dashboard
            </p>
          </div>

          {/* Demo Credentials Info */}
          <div className="mb-6 p-3 bg-[#2D9CDB]/10 border border-[#2D9CDB]/30 rounded-xl">
            <p className="text-[#A6E1FF] text-xs text-center">
              Demo: acor8826@hotmail.com / C0rry2025!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Staff ID */}
            <div className="space-y-2">
              <label htmlFor="staffId" className="text-[#A6E1FF] text-sm font-medium">
                Staff ID (Optional)
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D9CDB]" />
                <input
                  id="staffId"
                  type="text"
                  value={formData.staffId}
                  onChange={(e) => setFormData({ ...formData, staffId: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-[#EEF8FF] placeholder-[#A6E1FF]/40 focus:outline-none focus:border-[#2D9CDB] focus:ring-2 focus:ring-[#2D9CDB]/20 transition-all"
                  placeholder="INV-001"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-[#A6E1FF] text-sm font-medium">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D9CDB]" />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-[#EEF8FF] placeholder-[#A6E1FF]/40 focus:outline-none focus:border-[#2D9CDB] focus:ring-2 focus:ring-[#2D9CDB]/20 transition-all"
                  placeholder="staff@innovation1.com"
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-[#A6E1FF] text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D9CDB]" />
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-[#EEF8FF] placeholder-[#A6E1FF]/40 focus:outline-none focus:border-[#2D9CDB] focus:ring-2 focus:ring-[#2D9CDB]/20 transition-all"
                  placeholder="Enter your password"
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-xl p-3 text-[#EF4444] text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-4 overflow-hidden rounded-xl disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] group-hover:from-[#A6E1FF] group-hover:to-[#C084F5] transition-all" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#A6E1FF] to-[#C084F5] opacity-0 group-hover:opacity-100 blur transition-opacity" />
              <span className="relative text-white font-semibold">
                {isLoading ? 'Signing In...' : 'Sign In'}
              </span>
            </motion.button>

            {/* Forgot Password */}
            <div className="text-center">
              <a href="#" className="text-[#2D9CDB] hover:text-[#A6E1FF] transition-colors text-sm">
                Forgot password?
              </a>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-[#A6E1FF]/60 text-xs flex items-center justify-center gap-2">
              <Lock className="w-3 h-3" />
              Protected by Innovation1 Security
            </p>
          </div>
        </div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] rounded-xl blur-xl opacity-60"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-[#C084F5] to-[#A6E1FF] rounded-xl blur-xl opacity-60"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 3,
            delay: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  );
}
