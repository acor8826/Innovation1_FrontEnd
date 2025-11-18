import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Sparkles } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-white">Innovation1</span>
          </Link>
          <div className="flex items-center gap-8">
            <a href="#services" className="text-white/90 hover:text-white transition-colors">Services</a>
            <a href="#process" className="text-white/90 hover:text-white transition-colors">Process</a>
            <a href="#showcase" className="text-white/90 hover:text-white transition-colors">Showcase</a>
            <Link to="/dashboard">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 mr-2">
                Dashboard
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Staff Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}