import { Search, Bell, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { auth } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const navigate = useNavigate();
  const user = auth.getUser();

  const handleLogout = () => {
    auth.logout();
    navigate('/login', { replace: true });
  };

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      {/* Page Title */}
      <h1 className="text-gray-900">{title}</h1>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Info */}
        {user && (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} alt={user.name} />
              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">{user.name}</span>
              <span className="text-xs text-gray-500">{user.role}</span>
            </div>
          </div>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Logout"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}