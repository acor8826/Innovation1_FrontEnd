import { Activity } from '../../data/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-gray-900">Very Recent Activity</h2>
      </div>

      <div className="p-6">
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={activity.avatar} alt={activity.user} />
                <AvatarFallback>{activity.user[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-gray-900">
                  <span className="text-gray-900">{activity.user}</span>{' '}
                  <span className="text-gray-600">{activity.action}</span>
                </p>
                <p className="text-gray-500 mt-1">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
