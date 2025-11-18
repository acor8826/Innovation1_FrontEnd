import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D9CDB]/20 to-[#A6E1FF]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      <div className="relative bg-white backdrop-blur-sm border border-[#A6E1FF]/30 rounded-3xl p-8 hover:border-[#2D9CDB] transition-all duration-300 hover:shadow-2xl hover:shadow-[#2D9CDB]/10 hover:-translate-y-2">
        <div className="w-16 h-16 bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#2D9CDB]/25">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-[#0D1B4C] mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}