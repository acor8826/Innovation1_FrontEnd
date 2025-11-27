import { TeamMember, TeamRole, TeamStatus } from '../types/team';
import { apiClient } from './api';

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

  private convertApiMemberToTeamMember(apiMember: any): TeamMember {
    return {
      id: apiMember.id,
      name: apiMember.name || apiMember.full_name,
      email: apiMember.email,
      role: (apiMember.role?.toLowerCase() || 'other') as TeamRole,
      status: (apiMember.status?.toLowerCase() || 'active') as TeamStatus,
      avatar: apiMember.avatar,
      department: apiMember.department,
      phone: apiMember.phone,
      location: apiMember.location,
      bio: apiMember.bio,
      joinDate: apiMember.join_date,
      createdAt: apiMember.created_at,
      updatedAt: apiMember.updated_at,
    };
  }

  async getMembers(): Promise<TeamMember[]> {
    try {
      const response = await apiClient.getTeamMembers();
      if (response && Array.isArray(response)) {
        const members = response.map((member) => this.convertApiMemberToTeamMember(member));
        this.members = members;
        return members;
      }
    } catch (error) {
      console.warn('Failed to fetch team members from API, using local cache:', error);
    }
    return [...this.members];
  }

  async getMemberById(id: string): Promise<TeamMember | undefined> {
    // FIX: The API client doesn't support fetching a single member yet.
    // We check the local cache first, then refresh the whole list if needed.

    // 1. Check local cache
    const cachedMember = this.members.find((m) => m.id === id);
    if (cachedMember) return cachedMember;

    // 2. If not found, fetch latest list and check again
    try {
      await this.getMembers();
      return this.members.find((m) => m.id === id);
    } catch (error) {
      console.warn('Failed to fetch team member from API, checking local cache:', error);
    }

    return undefined;
  }

  async createMember(member: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>): Promise<TeamMember> {
    try {
      const createData = {
        name: member.name,
        email: member.email,
        role: member.role.toUpperCase(),
        status: member.status.toUpperCase(),
        avatar: member.avatar,
        department: member.department,
        phone: member.phone,
        location: member.location,
        bio: member.bio,
        join_date: member.joinDate,
      };

      const response = await apiClient.createTeamMember(createData);
      const newMember = this.convertApiMemberToTeamMember(response);
      this.members.push(newMember);
      this.saveToStorage();
      return newMember;
    } catch (error) {
      console.warn('Failed to create team member in API, creating locally:', error);

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
  }

  async updateMember(id: string, updates: Partial<TeamMember>): Promise<TeamMember> {
    try {
      const updateData: any = {
        name: updates.name,
        email: updates.email,
        role: updates.role ? updates.role.toUpperCase() : undefined,
        status: updates.status ? updates.status.toUpperCase() : undefined,
        avatar: updates.avatar,
        department: updates.department,
        phone: updates.phone,
        location: updates.location,
        bio: updates.bio,
        join_date: updates.joinDate,
      };

      Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);

      const response = await apiClient.updateTeamMember(id, updateData);
      const updatedMember = this.convertApiMemberToTeamMember(response);

      const memberIndex = this.members.findIndex((m) => m.id === id);
      if (memberIndex !== -1) {
        this.members[memberIndex] = updatedMember;
        this.saveToStorage();
      }

      return updatedMember;
    } catch (error) {
      console.warn('Failed to update team member in API, updating locally:', error);

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
  }

  async deleteMember(id: string): Promise<void> {
    try {
      await apiClient.deleteTeamMember(id);
    } catch (error) {
      console.warn('Failed to delete team member from API, deleting locally:', error);
    }

    const memberIndex = this.members.findIndex((m) => m.id === id);
    if (memberIndex !== -1) {
      this.members.splice(memberIndex, 1);
      this.saveToStorage();
    }
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