// API Client Service for Innovation1
// Points to Cloud Run backend (Australia)

const isProduction = window.location.hostname !== 'localhost';

// FIXED: Use environment variable or fallback to Australian Backend
const BACKEND_BASE_URL = import.meta.env.VITE_API_URL || (isProduction
  ? 'https://innovation1-backend-710611968322.australia-southeast1.run.app/'
  : 'http://localhost:8001');

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

    const config = {
      ...options,
      headers,
    };

    // Debug Logging
    console.groupCollapsed(`API Request: ${options.method || 'GET'} ${endpoint}`);
    console.log('URL:', url);
    console.log('Headers:', headers);
    if (options.body) {
      try {
        console.log('Body:', JSON.parse(options.body.toString()));
      } catch {
        console.log('Body:', options.body);
      }
    }
    console.groupEnd();

    try {
      const response = await fetch(url, config);

      // Debug Response
      console.groupCollapsed(`API Response: ${response.status} ${endpoint}`);
      console.log('Status:', response.status);
      console.log('Headers:', Object.fromEntries(response.headers.entries()));
      if (response.status !== 204) { // Don't try to parse body for 204
        const responseClone = response.clone();
        try {
          const jsonResponse = await responseClone.json();
          console.log('Body:', jsonResponse);
        } catch (e) {
          const textResponse = await responseClone.text();
          console.log('Body (text):', textResponse);
        }
      }
      console.groupEnd();

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

      // Handle 204 No Content
      if (response.status === 204) {
        return {} as T;
      }

      return response.json();
    } catch (error) {
      console.error('API Request Failed:', { url, error });
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

  async generateRnDPlan(projectId: string, concept: string) {
    return this.request<any>('/ai/generate-plan', {
      method: 'POST',
      body: JSON.stringify({
        project_id: projectId,
        concept: concept,
      }),
    });
  },
};