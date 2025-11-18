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

export const projects: Project[] = [
  {
    id: '1',
    name: 'Contract Review System',
    status: 'active',
    owner: 'Sarah Johnson',
    ownerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    lastUpdated: '2 hours ago',
    description: 'Develop an automated contract review system to streamline legal document processing and reduce manual review time.',
    tasks: [
      { id: 't1', title: 'Draft initial requirements', completed: true, dueDate: '2025-11-15' },
      { id: 't2', title: 'Review existing contracts', completed: true, dueDate: '2025-11-17' },
      { id: 't3', title: 'Build contract template', completed: false, dueDate: '2025-11-20' },
      { id: 't4', title: 'Compliance check', completed: false, dueDate: '2025-11-25' },
    ],
    teamMembers: [
      { id: 'tm1', name: 'Sarah Johnson', role: 'Lead Attorney', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
      { id: 'tm2', name: 'Mike Chen', role: 'Legal Analyst', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike' },
      { id: 'tm3', name: 'Emily Davis', role: 'Paralegal', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' },
    ],
    deadline: '2025-11-30',
  },
  {
    id: '2',
    name: 'Client Onboarding Portal',
    status: 'active',
    owner: 'Alex Martinez',
    ownerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    lastUpdated: '5 hours ago',
    description: 'Create a comprehensive digital onboarding portal for new clients to streamline the intake process.',
    tasks: [
      { id: 't5', title: 'Design user interface', completed: true, dueDate: '2025-11-12' },
      { id: 't6', title: 'Develop form system', completed: false, dueDate: '2025-11-19' },
      { id: 't7', title: 'Integration testing', completed: false, dueDate: '2025-11-22' },
    ],
    teamMembers: [
      { id: 'tm4', name: 'Alex Martinez', role: 'Project Manager', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
      { id: 'tm5', name: 'Jessica Lee', role: 'Developer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica' },
    ],
    deadline: '2025-11-28',
  },
  {
    id: '3',
    name: 'Compliance Audit 2025',
    status: 'pending',
    owner: 'David Kim',
    ownerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    lastUpdated: '1 day ago',
    description: 'Annual compliance audit for all legal procedures and documentation standards.',
    tasks: [
      { id: 't8', title: 'Gather documentation', completed: false, dueDate: '2025-11-21' },
      { id: 't9', title: 'Schedule review meetings', completed: false, dueDate: '2025-11-23' },
    ],
    teamMembers: [
      { id: 'tm6', name: 'David Kim', role: 'Compliance Officer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
    ],
    deadline: '2025-12-15',
  },
  {
    id: '4',
    name: 'IP Portfolio Management',
    status: 'blocked',
    owner: 'Lisa Wang',
    ownerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    lastUpdated: '3 days ago',
    description: 'Organize and manage the company intellectual property portfolio including patents and trademarks.',
    tasks: [
      { id: 't10', title: 'Inventory existing IP', completed: true, dueDate: '2025-11-10' },
      { id: 't11', title: 'Review trademark status', completed: false, dueDate: '2025-11-18' },
    ],
    teamMembers: [
      { id: 'tm7', name: 'Lisa Wang', role: 'IP Attorney', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa' },
      { id: 'tm8', name: 'Tom Brown', role: 'Legal Assistant', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom' },
    ],
    deadline: '2025-11-20',
  },
  {
    id: '5',
    name: 'Litigation Case Tracker',
    status: 'active',
    owner: 'Rachel Green',
    ownerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel',
    lastUpdated: '6 hours ago',
    description: 'Implement a tracking system for ongoing litigation cases and court deadlines.',
    tasks: [
      { id: 't12', title: 'Define case categories', completed: true, dueDate: '2025-11-14' },
      { id: 't13', title: 'Build dashboard', completed: false, dueDate: '2025-11-19' },
    ],
    teamMembers: [
      { id: 'tm9', name: 'Rachel Green', role: 'Senior Attorney', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel' },
    ],
    deadline: '2025-11-26',
  },
];

export const activities: Activity[] = [
  {
    id: 'a1',
    user: 'Alex Martinez',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    action: 'created a new project "Client Onboarding Portal"',
    timestamp: '2 hours ago',
  },
  {
    id: 'a2',
    user: 'Sarah Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    action: 'updated task: Draft Contract Review',
    timestamp: '3 hours ago',
  },
  {
    id: 'a3',
    user: 'David Kim',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    action: 'moved deadline for Compliance Audit 2025',
    timestamp: '5 hours ago',
  },
  {
    id: 'a4',
    user: 'Lisa Wang',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    action: 'commented on IP Portfolio Management',
    timestamp: '1 day ago',
  },
  {
    id: 'a5',
    user: 'Rachel Green',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel',
    action: 'completed task: Define case categories',
    timestamp: '1 day ago',
  },
  {
    id: 'a6',
    user: 'Mike Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    action: 'joined team on Contract Review System',
    timestamp: '2 days ago',
  },
];

export const kpiData = {
  activeProjects: { value: 12, trend: '+8%' },
  tasksDueToday: { value: 7, trend: '-2%' },
  overdueTasks: { value: 3, trend: '-15%' },
  teamMembers: { value: 24, trend: '+12%' },
};
