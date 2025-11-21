// API Client for Innovation1 Backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

interface RequestOptions extends RequestInit {
  body?: any;
}

class APIClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private getToken(): string | null {
    try {
      const authData = localStorage.getItem('innovation1_auth_token');
      return authData ? authData : null;
    } catch {
      return null;
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const token = this.getToken();

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.detail ||
          `HTTP ${response.status}: ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error(`API Error [${endpoint}]:`, error);
      throw error;
    }
  }

  // Authentication
  async login(email: string, password: string): Promise<{ access_token: string; token_type: string; user: any }> {
    const response = await fetch(`${this.baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || 'Login failed');
    }

    return response.json();
  }

  async getCurrentUser(): Promise<any> {
    return this.request('/auth/me');
  }

  async logout(): Promise<void> {
    try {
      await this.request('/auth/logout', { method: 'POST' });
    } catch (error) {
      console.warn('Logout request failed, clearing local auth anyway:', error);
    }
    localStorage.removeItem('innovation1_auth_token');
  }

  // Projects
  async getProjects(filters?: { status?: string; search?: string }): Promise<any[]> {
    const params = new URLSearchParams();
    if (filters?.status) params.append('status', filters.status);
    if (filters?.search) params.append('search', filters.search);

    const query = params.toString();
    return this.request(`/projects${query ? `?${query}` : ''}`);
  }

  async getProject(id: string): Promise<any> {
    return this.request(`/projects/${id}`);
  }

  async createProject(data: any): Promise<any> {
    return this.request('/projects', {
      method: 'POST',
      body: data,
    });
  }

  async updateProject(id: string, data: any): Promise<any> {
    return this.request(`/projects/${id}`, {
      method: 'PUT',
      body: data,
    });
  }

  async deleteProject(id: string): Promise<void> {
    return this.request(`/projects/${id}`, {
      method: 'DELETE',
    });
  }

  async addProjectMember(projectId: string, memberId: string): Promise<any> {
    return this.request(`/projects/${projectId}/members`, {
      method: 'POST',
      body: { team_member_id: memberId },
    });
  }

  async removeProjectMember(projectId: string, memberId: string): Promise<void> {
    return this.request(`/projects/${projectId}/members/${memberId}`, {
      method: 'DELETE',
    });
  }

  // Tasks
  async getTasks(filters?: {
    status?: string;
    priority?: string;
    projectId?: string;
    assigneeId?: string;
  }): Promise<any[]> {
    const params = new URLSearchParams();
    if (filters?.status) params.append('status', filters.status);
    if (filters?.priority) params.append('priority', filters.priority);
    if (filters?.projectId) params.append('project_id', filters.projectId);
    if (filters?.assigneeId) params.append('assignee_id', filters.assigneeId);

    const query = params.toString();
    return this.request(`/tasks${query ? `?${query}` : ''}`);
  }

  async getTask(id: string): Promise<any> {
    return this.request(`/tasks/${id}`);
  }

  async createTask(data: any): Promise<any> {
    return this.request('/tasks', {
      method: 'POST',
      body: data,
    });
  }

  async updateTask(id: string, data: any): Promise<any> {
    return this.request(`/tasks/${id}`, {
      method: 'PUT',
      body: data,
    });
  }

  async updateTaskStatus(id: string, status: string, order?: number): Promise<any> {
    return this.request(`/tasks/${id}/status`, {
      method: 'PATCH',
      body: { status, order: order ?? 0 },
    });
  }

  async deleteTask(id: string): Promise<void> {
    return this.request(`/tasks/${id}`, {
      method: 'DELETE',
    });
  }

  // Team Members
  async getTeamMembers(): Promise<any[]> {
    return this.request('/team');
  }

  async getTeamMember(id: string): Promise<any> {
    return this.request(`/team/${id}`);
  }

  async createTeamMember(data: any): Promise<any> {
    return this.request('/team', {
      method: 'POST',
      body: data,
    });
  }

  async updateTeamMember(id: string, data: any): Promise<any> {
    return this.request(`/team/${id}`, {
      method: 'PUT',
      body: data,
    });
  }

  async deleteTeamMember(id: string): Promise<void> {
    return this.request(`/team/${id}`, {
      method: 'DELETE',
    });
  }

  // Dashboard
  async getDashboardKPIs(): Promise<any> {
    return this.request('/dashboard/kpis');
  }

  async getDashboardActivities(skip?: number, limit?: number): Promise<any[]> {
    const params = new URLSearchParams();
    if (skip) params.append('skip', skip.toString());
    if (limit) params.append('limit', limit.toString());

    const query = params.toString();
    return this.request(`/dashboard/activities${query ? `?${query}` : ''}`);
  }

  async getDashboardStatistics(): Promise<any> {
    return this.request('/dashboard/statistics');
  }

  // Users
  async createUser(data: any): Promise<any> {
    return this.request('/users', {
      method: 'POST',
      body: data,
    });
  }

  async getUsers(): Promise<any[]> {
    return this.request('/users');
  }

  async getUser(id: string): Promise<any> {
    return this.request(`/users/${id}`);
  }

  async updateUser(id: string, data: any): Promise<any> {
    return this.request(`/users/${id}`, {
      method: 'PUT',
      body: data,
    });
  }

  async deleteUser(id: string): Promise<void> {
    return this.request(`/users/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiClient = new APIClient();
