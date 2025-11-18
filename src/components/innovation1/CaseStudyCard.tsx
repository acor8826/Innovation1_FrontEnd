interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export function CaseStudyCard({ title, category, description, image }: CaseStudyCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3] border border-[#A6E1FF]/30">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B4C] via-[#0D1B4C]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-3 py-1 bg-[#2D9CDB] text-white rounded-full mb-2 text-sm">{category}</span>
          <h3 className="text-white">{title}</h3>
        </div>
      </div>
      <p className="text-gray-600 px-2">{description}</p>
    </div>
  );
}