interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2D9CDB] to-[#A6E1FF] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#2D9CDB]/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <span className="text-2xl">{number}</span>
        </div>
        {!isLast && (
          <div className="w-1 h-32 bg-gradient-to-b from-[#2D9CDB] via-[#A6E1FF]/50 to-transparent mt-4"></div>
        )}
      </div>
      <div className="pt-4 flex-1 group-hover:translate-x-2 transition-transform duration-300">
        <h3 className="text-[#0D1B4C] mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}