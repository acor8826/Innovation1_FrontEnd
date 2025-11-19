import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Innovation1Logo } from './Innovation1Logo';

export function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-[#2D9CDB]/20 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(166,225,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(166,225,255,.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#2D9CDB] rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#C084F5] rounded-full blur-[150px] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Innovation1Logo size="md" animated={true} showText={true} />
            </div>
            <p className="text-[#A6E1FF]/70 leading-relaxed">
              Building tomorrow's systems with AI-driven development and agentic automation.
            </p>
            <div className="flex gap-3 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 border border-[#2D9CDB]/30 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#2D9CDB] hover:to-[#A6E1FF] hover:border-transparent transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#2D9CDB]/30"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 border border-[#2D9CDB]/30 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#2D9CDB] hover:to-[#A6E1FF] hover:border-transparent transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#2D9CDB]/30"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 border border-[#2D9CDB]/30 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#2D9CDB] hover:to-[#A6E1FF] hover:border-transparent transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#2D9CDB]/30"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 border border-[#2D9CDB]/30 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#2D9CDB] hover:to-[#A6E1FF] hover:border-transparent transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#2D9CDB]/30"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 text-[#EEF8FF]">Company</h4>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-[#A6E1FF]/70 hover:text-[#A6E1FF] transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] transition-all"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#A6E1FF]/70 hover:text-[#A6E1FF] transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] transition-all"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#careers" className="text-[#A6E1FF]/70 hover:text-[#A6E1FF] transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] transition-all"></span>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-6 text-[#EEF8FF]">Resources</h4>
            <ul className="space-y-4">
              <li>
                <a href="#blog" className="text-[#A6E1FF]/70 hover:text-[#A6E1FF] transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] transition-all"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#docs" className="text-[#A6E1FF]/70 hover:text-[#A6E1FF] transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] transition-all"></span>
                  Documentation
                </a>
              </li>
              <li>
                <a href="#support" className="text-[#A6E1FF]/70 hover:text-[#A6E1FF] transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] transition-all"></span>
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-[#EEF8FF]">Quick Access</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/login" className="text-[#A6E1FF]/70 hover:text-[#A6E1FF] transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] transition-all"></span>
                  Staff Login
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-[#A6E1FF]/70 hover:text-[#A6E1FF] transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] transition-all"></span>
                  Dashboard
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-[#A6E1FF]/70 hover:text-[#A6E1FF] transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] transition-all"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2D9CDB]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#A6E1FF]/60 text-sm">
              © 2025 Innovation1. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-[#A6E1FF]/60 hover:text-[#A6E1FF] transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-[#A6E1FF]/60 hover:text-[#A6E1FF] transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-[#A6E1FF]/60 hover:text-[#A6E1FF] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}