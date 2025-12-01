import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ShowcaseProjectProps {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  index: number;
}

export function ShowcaseProject({ title, description, tags, gradient, index }: ShowcaseProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-full"
    >
      {/* Card */}
      <div className="bg-white border-2 border-sky-200 rounded-2xl overflow-hidden hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-100/50 transition-all duration-300 h-full flex flex-col">
        {/* Gradient Header */}
        <div className={`h-48 bg-gradient-to-br ${gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
          {/* Decorative circles */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>

          {/* Title on gradient */}
          <h3 className="text-2xl font-bold text-white text-center relative z-10">
            {title}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Description */}
          <p className="text-slate-600 leading-relaxed mb-6 flex-1">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-sky-100 text-sky-700 text-sm font-medium rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Learn More Link */}
          <button className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 hover:gap-3 transition-all group-hover:translate-x-1">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
