// --- API CLIENT CORE ---

const isProduction = window.location.hostname !== 'localhost';

// FIXED: Use environment variable or fallback to Australian Backend
const BACKEND_BASE_URL = import.meta.env.VITE_API_URL || (isProduction
  ? 'https://innovation1-backend-710611968322.australia-southeast1.run.app/api'
  : 'http://localhost:8001/api');

console.log(`API Client initialized: ${BACKEND_BASE_URL}`);

const TOKEN_KEY = 'auth_token';

export const apiClient = {
  baseUrl: BACKEND_BASE_URL,

  // Helper to wait for auth setup (now instant with localStorage)
  async ensureAuth() {
    // No-op for localStorage
    return Promise.resolve();
  },

  // Store token in localStorage
  async saveToken(token: string) {
    try {
      localStorage.setItem(TOKEN_KEY, token);
    } catch (e) {
      console.error("Failed to save token to localStorage:", e);
    }
  },

  // Retrieve token from localStorage
  async getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

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

    const data = await response.json();
    // SUCCESS: Save the received access token
    await this.saveToken(data.access_token);
    return data;
  },

  // This is the core authenticated request method
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

    // Implement exponential backoff for fetch
    const MAX_RETRIES = 3;
    for (let i = 0; i < MAX_RETRIES; i++) {
      try {
        const response = await fetch(url, config);

        // Debug Response (Only on final attempt or successful attempt)
        if (i === MAX_RETRIES - 1 || response.ok) {
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
        }

        if (response.status === 401) {
          console.error(`[API Debug] 401 Unauthorized for ${endpoint}. Clearing token.`);
          await this.clearAuthData();

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
        // If the error is network-related and we have retries left
        if (i < MAX_RETRIES - 1 && (error instanceof TypeError || (error as Error).message.includes('Failed to fetch'))) {
          const delay = Math.pow(2, i) * 1000; // Exponential backoff: 1s, 2s, 4s
          console.warn(`Network error for ${url}. Retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        } else {
          console.error('API Request Failed:', { url, error });
          throw error;
        }
      }
    }
    // Should be unreachable if MAX_RETRIES > 0, but included for completeness
    throw new Error("API request failed after all retries.");
  },

  async clearAuthData() {
    try {
      localStorage.removeItem(TOKEN_KEY);
      console.log("Auth token cleared from localStorage.");
    } catch (e) {
      console.warn("Failed to clear token from localStorage:", e);
    }
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

    await this.clearAuthData();
    return { success: true };
  },

  // --- AUTHENTICATED API CALLS (Unchanged endpoints, now using the robust request method) ---

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