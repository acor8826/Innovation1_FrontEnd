// API Client Service for Innovation1
// Points to Cloud Run backend

const isProduction = window.location.hostname !== 'localhost';
const BACKEND_BASE_URL = isProduction
  ? 'https://innovation1-api-710611968322.us-central1.run.app/api'
  : 'http://localhost:8001/api';

console.log(`API Client initialized: ${BACKEND_BASE_URL}`);

export const apiClient = {
  baseUrl: BACKEND_BASE_URL,

  async login(email: string, password: string) {
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
  },

  // This is a new private helper method for making authenticated API requests
  async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const token = await this.getToken();

    // Debug log for auth token
    if (endpoint.includes('/dashboard') || endpoint.includes('/projects')) {
      console.log(`[API Debug] Requesting ${endpoint}`);
      console.log(`[API Debug] Token present: ${!!token}`);
      if (token) {
        console.log(`[API Debug] Token prefix: ${token.substring(0, 10)}...`);
      }
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (response.status === 401) {
        console.error(`[API Debug] 401 Unauthorized for ${endpoint}`);
        localStorage.removeItem('innovation1_auth_token');
        localStorage.removeItem('innovation1_user');

        if (!window.location.pathname.includes('/login')) {
          window.location.href = '/login';
        }
        throw new Error('Unauthorized');
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  },

  async getToken() {
    return localStorage.getItem('innovation1_auth_token');
  },

  async getCurrentUser() {
    return this.request<any>('/auth/me');
  },

  async logout() {
    try {
      await this.request('/auth/logout', { method: 'POST' });
    } catch (error) {
      console.warn('Logout API call failed', error);
    }
    localStorage.removeItem('innovation1_auth_token');
    localStorage.removeItem('innovation1_user');
    return { success: true };
  },

  async getDashboardKPIs() {
    return this.request<any>('/dashboard/kpis');
  },

  async getProjects() {
    return this.request<any[]>('/projects/');
  },

  async getProject(projectId: string) {
    return this.request<any>(`/projects/${projectId}`);
  },

  async getTasks() {
    return this.request<any[]>('/tasks');
  },

  async getTeamMembers() {
    return this.request<any[]>('/team');
  },

  async getDashboardActivities() {
    return this.request<any[]>('/dashboard/activities');
  },

  async createProject(project: any) {
    return this.request<any>('/projects/', {
      method: 'POST',
      body: JSON.stringify(project),
    });
  },

  async updateProject(projectId: string, project: any) {
    return this.request<any>(`/projects/${projectId}`, {
      method: 'PUT',
      body: JSON.stringify(project),
    });
  },

  async deleteProject(projectId: string) {
    return this.request<any>(`/projects/${projectId}`, {
      method: 'DELETE',
    });
  },

  async createTask(task: any) {
    return this.request<any>('/tasks/', {
      method: 'POST',
      body: JSON.stringify(task),
    });
  },

  async updateTask(taskId: string, task: any) {
    return this.request<any>(`/tasks/${taskId}`, {
      method: 'PUT',
      body: JSON.stringify(task),
    });
  },

  async deleteTask(taskId: string) {
    return this.request<any>(`/tasks/${taskId}`, {
      method: 'DELETE',
    });
  },

  async createTeamMember(member: any) {
    return this.request<any>('/team/', {
      method: 'POST',
      body: JSON.stringify(member),
    });
  },

  async updateTeamMember(memberId: string, member: any) {
    return this.request<any>(`/team/${memberId}`, {
      method: 'PUT',
      body: JSON.stringify(member),
    });
  },

  async deleteTeamMember(memberId: string) {
    return this.request<any>(`/team/${memberId}`, {
      method: 'DELETE',
    });
  },
};
