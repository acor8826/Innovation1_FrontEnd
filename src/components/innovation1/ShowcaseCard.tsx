import { ArrowUpRight } from 'lucide-react';

interface ShowcaseCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  gradient?: 'blue' | 'purple' | 'cyan';
}

export function ShowcaseCard({ 
  title, 
  description, 
  tags, 
  image,
  gradient = 'blue' 
}: ShowcaseCardProps) {
  const gradients = {
    blue: 'from-[#2D9CDB] to-[#0D1B4C]',
    purple: 'from-[#C084F5] to-[#0D1B4C]',
    cyan: 'from-[#A6E1FF] to-[#2D9CDB]',
  };

  return (
    <div className="group cursor-pointer h-full flex flex-col">
      {/* Image container */}
      <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3] border border-[#2D9CDB]/30">
        {/* Image */}
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${gradients[gradient]} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D9CDB]/0 via-[#C084F5]/20 to-[#A6E1FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating indicator */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
          <ArrowUpRight className="w-6 h-6 text-white" />
        </div>

        {/* Tags overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-2">
        <h3 className="text-[#EEF8FF] mb-3 group-hover:text-[#A6E1FF] transition-colors">
          {title}
        </h3>
        <p className="text-[#A6E1FF]/70 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${gradients[gradient]} transition-all duration-500 rounded-full`}></div>
    </div>
  );
}
