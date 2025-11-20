export type TeamRole = 'admin' | 'developer' | 'designer' | 'manager' | 'analyst' | 'other';
export type TeamStatus = 'active' | 'away' | 'inactive';

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: TeamRole;
  status: TeamStatus;
  avatar?: string;
  department?: string;
  phone?: string;
  location?: string;
  bio?: string;
  joinDate: string;
  createdAt: string;
  updatedAt: string;
}
