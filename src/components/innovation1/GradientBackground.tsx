interface GradientBackgroundProps {
  variant?: 'hero' | 'light' | 'deep' | 'radial';
  children: React.ReactNode;
  className?: string;
}

export function GradientBackground({ variant = 'hero', children, className = '' }: GradientBackgroundProps) {
  const gradients = {
    hero: 'bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500',
    light: 'bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50',
    deep: 'bg-gradient-to-b from-blue-900 to-blue-950',
    radial: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-800 to-slate-900',
  };

  return (
    <div className={`${gradients[variant]} ${className}`}>
      {children}
    </div>
  );
}
