interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

interface VerticalTimelineProps {
  steps: TimelineStep[];
}

export function VerticalTimeline({ steps }: VerticalTimelineProps) {
  return (
    <div className="relative space-y-8">
      {/* Vertical connecting line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2D9CDB] via-[#C084F5] to-[#A6E1FF]"></div>

      {steps.map((step, index) => (
        <div key={index} className="relative flex gap-6">
          {/* Node */}
          <div className="relative z-10 flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#C084F5] flex items-center justify-center shadow-lg shadow-[#2D9CDB]/50">
              <span className="text-white text-lg">{step.number}</span>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-[#2D9CDB] blur-xl opacity-40 animate-pulse"></div>
          </div>

          {/* Content Card */}
          <div className="flex-1 bg-white/5 backdrop-blur-xl border border-[#2D9CDB]/30 rounded-2xl p-6 hover:bg-white/10 hover:border-[#2D9CDB]/50 transition-all">
            <h3 className="text-[#EEF8FF] text-xl mb-2">{step.title}</h3>
            <p className="text-[#A6E1FF]/80 leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
