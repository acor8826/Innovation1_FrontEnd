// Empty mock data - all data should come from the backend API
// These are only used as fallback types and empty arrays

export interface Project {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'blocked';
  owner: string;
  ownerAvatar: string;
  lastUpdated: string;
  description: string;
  tasks: Task[];
  teamMembers: TeamMember[];
  deadline: string;
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Activity {
  id: string;
  user: string;
  avatar: string;
  action: string;
  timestamp: string;
}

// Empty arrays - no demo data
export const projects: Project[] = [];
export const tasks: Task[] = [];
export const teamMembers: TeamMember[] = [];
export const activities: Activity[] = [];

// Empty KPI data
export const kpiData = {
  totalProjects: 0,
  activeProjects: 0,
  completedTasks: 0,
  teamMembers: 0,
  projectMetrics: {
    active: 0,
    pending: 0,
    completed: 0,
  },
};
