import { TeamMember, TeamRole, TeamStatus } from '../types/team';

// Storage key
const STORAGE_KEY = 'innovation1_team_members';

// Mock team data
const initialMockTeam: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Sarah Chen',
    email: 'sarah.chen@innovation1.com',
    role: 'developer',
    status: 'active',
    avatar: undefined,
    department: 'Engineering',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Full-stack developer specializing in React and Node.js',
    joinDate: '2024-01-15',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2025-11-19T14:30:00Z',
  },
  {
    id: 'team-2',
    name: 'Alex Rodriguez',
    email: 'alex.rodriguez@innovation1.com',
    role: 'designer',
    status: 'active',
    avatar: undefined,
    department: 'Design',
    phone: '+1 (555) 234-5678',
    location: 'New York, NY',
    bio: 'UI/UX designer passionate about creating beautiful user experiences',
    joinDate: '2024-02-20',
    createdAt: '2024-02-20T09:00:00Z',
    updatedAt: '2025-11-19T16:00:00Z',
  },
  {
    id: 'team-3',
    name: 'Jordan Lee',
    email: 'jordan.lee@innovation1.com',
    role: 'manager',
    status: 'active',
    avatar: undefined,
    department: 'Product',
    phone: '+1 (555) 345-6789',
    location: 'Austin, TX',
    bio: 'Product manager with 5+ years of experience in SaaS',
    joinDate: '2023-11-10',
    createdAt: '2023-11-10T11:00:00Z',
    updatedAt: '2025-11-19T11:00:00Z',
  },
  {
    id: 'team-4',
    name: 'Maya Patel',
    email: 'maya.patel@innovation1.com',
    role: 'developer',
    status: 'active',
    avatar: undefined,
    department: 'Engineering',
    phone: '+1 (555) 456-7890',
    location: 'Seattle, WA',
    bio: 'Backend engineer focused on scalable systems',
    joinDate: '2024-03-05',
    createdAt: '2024-03-05T08:00:00Z',
    updatedAt: '2025-11-19T08:00:00Z',
  },
  {
    id: 'team-5',
    name: 'Chris Thompson',
    email: 'chris.thompson@innovation1.com',
    role: 'analyst',
    status: 'away',
    avatar: undefined,
    department: 'Analytics',
    phone: '+1 (555) 567-8901',
    location: 'Boston, MA',
    bio: 'Data analyst specializing in business intelligence',
    joinDate: '2024-04-12',
    createdAt: '2024-04-12T10:00:00Z',
    updatedAt: '2025-11-19T10:00:00Z',
  },
  {
    id: 'team-6',
    name: 'Emily Zhang',
    email: 'emily.zhang@innovation1.com',
    role: 'admin',
    status: 'active',
    avatar: undefined,
    department: 'Operations',
    phone: '+1 (555) 678-9012',
    location: 'San Francisco, CA',
    bio: 'Operations admin ensuring smooth day-to-day activities',
    joinDate: '2023-09-01',
    createdAt: '2023-09-01T14:00:00Z',
    updatedAt: '2025-11-19T14:00:00Z',
  },
];

// Simulated API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class TeamService {
  private members: TeamMember[] = [];

  constructor() {
    // Load from localStorage or use initial data
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        this.members = JSON.parse(stored);
      } else {
        this.members = [...initialMockTeam];
        this.saveToStorage();
      }
    } catch (error) {
      console.error('Failed to load team members from storage:', error);
      this.members = [...initialMockTeam];
    }
  }

  private saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.members));
    } catch (error) {
      console.error('Failed to save team members to storage:', error);
    }
  }

  async getMembers(): Promise<TeamMember[]> {
    await delay(300);
    return [...this.members];
  }

  async getMemberById(id: string): Promise<TeamMember | undefined> {
    await delay(200);
    return this.members.find((m) => m.id === id);
  }

  async createMember(member: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>): Promise<TeamMember> {
    await delay(200);

    const newMember: TeamMember = {
      ...member,
      id: `team-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.members.push(newMember);
    this.saveToStorage();
    return { ...newMember };
  }

  async updateMember(id: string, updates: Partial<TeamMember>): Promise<TeamMember> {
    await delay(200);

    const memberIndex = this.members.findIndex((m) => m.id === id);
    if (memberIndex === -1) {
      throw new Error(`Team member ${id} not found`);
    }

    this.members[memberIndex] = {
      ...this.members[memberIndex],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    this.saveToStorage();
    return { ...this.members[memberIndex] };
  }

  async deleteMember(id: string): Promise<void> {
    await delay(200);

    const memberIndex = this.members.findIndex((m) => m.id === id);
    if (memberIndex === -1) {
      throw new Error(`Team member ${id} not found`);
    }

    this.members.splice(memberIndex, 1);
    this.saveToStorage();
  }

  async searchMembers(query: string): Promise<TeamMember[]> {
    await delay(200);
    const lowerQuery = query.toLowerCase();
    return this.members.filter(
      (m) =>
        m.name.toLowerCase().includes(lowerQuery) ||
        m.email.toLowerCase().includes(lowerQuery) ||
        m.role.toLowerCase().includes(lowerQuery) ||
        m.department?.toLowerCase().includes(lowerQuery)
    );
  }

  async getMembersByRole(role: TeamRole): Promise<TeamMember[]> {
    await delay(200);
    return this.members.filter((m) => m.role === role);
  }

  async getMembersByStatus(status: TeamStatus): Promise<TeamMember[]> {
    await delay(200);
    return this.members.filter((m) => m.status === status);
  }
}

export const teamService = new TeamService();
