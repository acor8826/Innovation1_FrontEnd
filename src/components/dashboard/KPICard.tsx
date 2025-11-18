import { LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: number;
  trend: string;
  icon: LucideIcon;
}

export function KPICard({ title, value, trend, icon: Icon }: KPICardProps) {
  const isPositive = trend.startsWith('+');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <span className={`px-2 py-1 rounded text-xs ${isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
          {trend} this week
        </span>
      </div>
      <div className="space-y-1">
        <p className="text-gray-600">{title}</p>
        <p className="text-gray-900">{value}</p>
      </div>
    </div>
  );
}
