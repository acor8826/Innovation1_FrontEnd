import { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Workflow, Grid, LayoutDashboard, LogIn } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Innovation1Logo } from './Innovation1Logo';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { icon: Home, label: 'Home', href: '#hero', isAnchor: true },
    { icon: Briefcase, label: 'Services', href: '#services', isAnchor: true },
    { icon: Workflow, label: 'Process', href: '#process', isAnchor: true },
    { icon: Grid, label: 'Showcase', href: '#showcase', isAnchor: true },
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', isAnchor: false },
    { icon: LogIn, label: 'Staff Login', href: '/login', isAnchor: false },
  ];

  const handleClick = (href: string, isAnchor: boolean) => {
    if (isAnchor) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#020817]/95 backdrop-blur-xl border-b border-[#2D9CDB]/20">
        <div className="flex items-center justify-between px-5 py-4">
          {/* Logo */}
          <Innovation1Logo size="sm" animated={false} showText={true} />

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-11 h-11 flex items-center justify-center bg-white/5 border border-[#2D9CDB]/30 rounded-xl hover:bg-white/10 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#A6E1FF]" />
            ) : (
              <Menu className="w-6 h-6 text-[#A6E1FF]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#020817]/98 backdrop-blur-2xl"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute inset-0 flex flex-col transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Items */}
          <nav className="flex-1 flex flex-col justify-center px-6 space-y-3 mt-20">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(item.href, item.isAnchor)}
                className="group relative flex items-center gap-4 px-6 py-4 min-h-[52px] bg-white/5 border border-[#2D9CDB]/20 rounded-2xl hover:bg-white/10 hover:border-[#2D9CDB]/40 transition-all"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#2D9CDB]/20 to-[#C084F5]/20 rounded-xl group-hover:from-[#2D9CDB]/30 group-hover:to-[#C084F5]/30 transition-all">
                  <item.icon className="w-5 h-5 text-[#A6E1FF]" />
                </div>

                {/* Label */}
                <span className="text-[#EEF8FF] text-lg">{item.label}</span>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB]/0 via-[#2D9CDB]/5 to-[#2D9CDB]/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-6 py-8 border-t border-[#2D9CDB]/20">
            <p className="text-center text-[#A6E1FF]/60 text-sm">
              © 2025 Innovation1. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
