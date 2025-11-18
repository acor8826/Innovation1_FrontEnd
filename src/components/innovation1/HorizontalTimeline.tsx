import { CheckCircle2, Circle } from 'lucide-react';
import { useState } from 'react';

interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

interface HorizontalTimelineProps {
  steps: TimelineStep[];
}

export function HorizontalTimeline({ steps }: HorizontalTimelineProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="space-y-12">
      {/* Timeline bar */}
      <div className="relative">
        {/* Background line */}
        <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#2D9CDB]/20 via-[#C084F5]/20 to-[#2D9CDB]/20 rounded-full"></div>
        
        {/* Active line */}
        <div 
          className="absolute top-12 left-0 h-1 bg-gradient-to-r from-[#2D9CDB] via-[#C084F5] to-[#A6E1FF] rounded-full transition-all duration-1000 shadow-lg shadow-[#2D9CDB]/50"
          style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
        ></div>

        {/* Steps */}
        <div className="grid grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative cursor-pointer group"
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Step node */}
              <div className="flex flex-col items-center">
                <div className={`relative w-24 h-24 rounded-full transition-all duration-500 ${
                  index <= activeStep
                    ? 'bg-gradient-to-br from-[#2D9CDB] to-[#C084F5] scale-110 shadow-2xl shadow-[#2D9CDB]/50'
                    : 'bg-white/5 border-2 border-[#2D9CDB]/30 scale-100'
                } flex items-center justify-center`}>
                  {/* Pulsing glow */}
                  {index === activeStep && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#C084F5] animate-ping opacity-75"></div>
                  )}
                  
                  {/* Number/Check */}
                  <span className={`relative text-2xl transition-all ${
                    index <= activeStep ? 'text-white' : 'text-[#2D9CDB]/60'
                  }`}>
                    {index < activeStep ? (
                      <CheckCircle2 className="w-12 h-12" />
                    ) : (
                      step.number
                    )}
                  </span>
                </div>

                {/* Connecting glow */}
                {index < steps.length - 1 && index <= activeStep && (
                  <div className="absolute top-12 left-1/2 w-full h-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C084F5] to-transparent blur-sm"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step details */}
      <div className="grid grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            className={`transition-all duration-500 ${
              index === activeStep ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
            }`}
          >
            <div className="text-center space-y-3">
              <h3 className="text-[#EEF8FF]">{step.title}</h3>
              <p className="text-[#A6E1FF]/70 leading-relaxed text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
