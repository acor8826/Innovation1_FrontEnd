import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, Mail, User, Sparkles } from 'lucide-react';
import { CosmicBackground } from '../components/innovation1/CosmicBackground';
import { CosmicButton } from '../components/innovation1/CosmicButton';
import { useState } from 'react';

export function Innovation1Login() {
  const [formData, setFormData] = useState({
    staffId: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Mock validation
    if (!formData.staffId || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }
    
    // In a real app, handle authentication here
    console.log('Login attempted with:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cosmic Background */}
      <CosmicBackground />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(166,225,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(166,225,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Nebula accents */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#2D9CDB] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#C084F5] rounded-full blur-[140px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Back to Home Link */}
      <Link 
        to="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-[#A6E1FF] hover:text-white transition-colors z-10 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Home</span>
      </Link>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D9CDB]/20 via-[#C084F5]/20 to-[#A6E1FF]/20 rounded-3xl blur-3xl"></div>

        {/* Card */}
        <div className="relative bg-white/5 backdrop-blur-2xl border border-[#2D9CDB]/30 rounded-3xl p-10 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#2D9CDB] via-[#C084F5] to-[#A6E1FF] rounded-2xl flex items-center justify-center shadow-xl shadow-[#2D9CDB]/50">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[#EEF8FF] mb-2 text-2xl">Staff Login Portal</h1>
            <p className="text-[#A6E1FF]/70">Enter your credentials to access the system</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Staff ID */}
            <div className="space-y-2">
              <label htmlFor="staffId" className="text-[#A6E1FF] text-sm">
                Staff ID
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D9CDB]" />
                <input
                  id="staffId"
                  type="text"
                  value={formData.staffId}
                  onChange={(e) => setFormData({ ...formData, staffId: e.target.value })}
                  className="w-full bg-white/5 border border-[#2D9CDB]/30 rounded-xl pl-12 pr-4 py-3 text-[#EEF8FF] placeholder-[#A6E1FF]/40 focus:outline-none focus:border-[#2D9CDB] focus:ring-2 focus:ring-[#2D9CDB]/20 transition-all"
                  placeholder="Enter your staff ID"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-[#A6E1FF] text-sm">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D9CDB]" />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-[#2D9CDB]/30 rounded-xl pl-12 pr-4 py-3 text-[#EEF8FF] placeholder-[#A6E1FF]/40 focus:outline-none focus:border-[#2D9CDB] focus:ring-2 focus:ring-[#2D9CDB]/20 transition-all"
                  placeholder="staff@innovation1.com"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-[#A6E1FF] text-sm">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D9CDB]" />
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-white/5 border border-[#2D9CDB]/30 rounded-xl pl-12 pr-4 py-3 text-[#EEF8FF] placeholder-[#A6E1FF]/40 focus:outline-none focus:border-[#2D9CDB] focus:ring-2 focus:ring-[#2D9CDB]/20 transition-all"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-xl p-3 text-[#EF4444] text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <CosmicButton 
              variant="primary" 
              className="w-full justify-center"
              onClick={handleSubmit}
            >
              Sign In
            </CosmicButton>

            {/* Forgot Password */}
            <div className="text-center">
              <a href="#" className="text-[#2D9CDB] hover:text-[#A6E1FF] transition-colors text-sm">
                Forgot password?
              </a>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-[#2D9CDB]/20 text-center">
            <p className="text-[#A6E1FF]/60 text-sm">
              Protected by Innovation1 Security
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] rounded-xl blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-[#C084F5] to-[#A6E1FF] rounded-xl blur-xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}
