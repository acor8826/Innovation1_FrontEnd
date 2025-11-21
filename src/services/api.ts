// API Client Service for Innovation1
// Points to Cloud Run backend

const isProduction = window.location.hostname !== 'localhost';
const BACKEND_BASE_URL = isProduction 
  ? 'https://innovation1-api-687835063861.us-central1.run.app/api'
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

  async getToken() {
    return localStorage.getItem('innovation1_auth_token');
  },

  async getCurrentUser() {
    const token = await this.getToken();
    if (!token) throw new Error('No authentication token found');

    const response = await fetch(`${this.baseUrl}/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || 'Failed to fetch current user');
    }

    return response.json();
  },

  async logout() {
    const token = await this.getToken();

    try {
      const response = await fetch(`${this.baseUrl}/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { 'Authorization': `Bearer ${token}` }),
        },
      });

      if (!response.ok) {
        console.warn('Logout API call failed, clearing local session anyway');
      }
    } catch (error) {
      console.warn('Logout error:', error);
    }

    // Always clear local storage
    localStorage.removeItem('innovation1_auth_token');
    localStorage.removeItem('innovation1_user');
    return { success: true };
  },

  async getDashboardKPIs() {
    const token = await this.getToken();
    const response = await fetch(`${this.baseUrl}/dashboard/kpis`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
    });

    if (!response.ok) throw new Error('Failed to fetch KPIs');
    return response.json();
  },

  async getProjects() {
    const token = await this.getToken();
    const response = await fetch(`${this.baseUrl}/projects`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
    });

    if (!response.ok) throw new Error('Failed to fetch projects');
    return response.json();
  },

  async getTasks() {
    const token = await this.getToken();
    const response = await fetch(`${this.baseUrl}/tasks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
    });

    if (!response.ok) throw new Error('Failed to fetch tasks');
    return response.json();
  },

  async getTeamMembers() {
    const token = await this.getToken();
    const response = await fetch(`${this.baseUrl}/team`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
    });

    if (!response.ok) throw new Error('Failed to fetch team members');
    return response.json();
  },

  async getDashboardActivities() {
    const token = await this.getToken();
    const response = await fetch(`${this.baseUrl}/dashboard/activities`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
    });

    if (!response.ok) throw new Error('Failed to fetch activities');
    return response.json();
  },

  async createProject(project: any) {
    const token = await this.getToken();
    const response = await fetch(`${this.baseUrl}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
      body: JSON.stringify(project),
    });

    if (!response.ok) throw new Error('Failed to create project');
    return response.json();
  },

  async updateProject(projectId: string, project: any) {
    const token = await this.getToken();
    const response = await fetch(`${this.baseUrl}/projects/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
      body: JSON.stringify(project),
    });

    if (!response.ok) throw new Error('Failed to update project');
    return response.json();
  },

  async deleteProject(projectId: string) {
    const token = await this.getToken();
    const response = await fetch(`${this.baseUrl}/projects/${projectId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
    });

    if (!response.ok) throw new Error('Failed to delete project');
    return response.json();
  },

  async createTask(task: any) {
    const token = await this.getToken();
    const response = await fetch(`${this.baseUrl}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) throw new Error('Failed to create task');
    return response.json();
  },

  async updateTask(taskId: string, task: any) {
    const token = await this.getToken();
    const response = await fetch(`${this.baseUrl}/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) throw new Error('Failed to update task');
    return response.json();
  },

  async deleteTask(taskId: string) {
    const token = await this.getToken();
    const response = await fetch(`${this.baseUrl}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
    });

    if (!response.ok) throw new Error('Failed to delete task');
    return response.json();
  },

  async createTeamMember(member: any) {
    const token = await this.getToken();
    const response = await fetch(`${this.baseUrl}/team`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
      body: JSON.stringify(member),
    });

    if (!response.ok) throw new Error('Failed to create team member');
    return response.json();
  },

  async updateTeamMember(memberId: string, member: any) {
    const token = await this.getToken();
    const response = await fetch(`${this.baseUrl}/team/${memberId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
      body: JSON.stringify(member),
    });

    if (!response.ok) throw new Error('Failed to update team member');
    return response.json();
  },

  async deleteTeamMember(memberId: string) {
    const token = await this.getToken();
    const response = await fetch(`${this.baseUrl}/team/${memberId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
    });

    if (!response.ok) throw new Error('Failed to delete team member');
    return response.json();
  },
};
