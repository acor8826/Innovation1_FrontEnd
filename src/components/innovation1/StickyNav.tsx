import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CosmicButton } from './CosmicButton';
import { Innovation1Logo } from './Innovation1Logo';

export function StickyNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#020817]/90 backdrop-blur-2xl border-b border-[#2D9CDB]/20 shadow-lg shadow-[#2D9CDB]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <Innovation1Logo size="md" animated={true} showText={true} />
          </Link>

          <div className="flex items-center gap-8">
            <a
              href="#services"
              className={`transition-all hover:scale-105 ${
                isScrolled 
                  ? 'text-[#A6E1FF] hover:text-white' 
                  : 'text-[#A6E1FF]/90 hover:text-white'
              }`}
            >
              Services
            </a>
            <a
              href="#process"
              className={`transition-all hover:scale-105 ${
                isScrolled 
                  ? 'text-[#A6E1FF] hover:text-white' 
                  : 'text-[#A6E1FF]/90 hover:text-white'
              }`}
            >
              Process
            </a>
            <a
              href="#showcase"
              className={`transition-all hover:scale-105 ${
                isScrolled 
                  ? 'text-[#A6E1FF] hover:text-white' 
                  : 'text-[#A6E1FF]/90 hover:text-white'
              }`}
            >
              Showcase
            </a>
            <Link to="/dashboard">
              <CosmicButton variant="ghost" size="sm">
                Dashboard
              </CosmicButton>
            </Link>
            <Link to="/login">
              <CosmicButton variant="primary" size="sm">
                Staff Login
              </CosmicButton>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}