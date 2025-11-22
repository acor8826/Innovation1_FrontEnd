// Authentication utility with backend API integration
import { apiClient } from '../services/api';

const AUTH_TOKEN_KEY = 'innovation1_auth_token';
const USER_KEY = 'innovation1_user';

// Clear invalid tokens on startup
try {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (token) {
    // Check if token is likely expired or invalid by looking at its format
    // If it's malformed or seems old, clear it
    const parts = token.split('.');
    if (parts.length !== 3) {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  }
} catch (e) {
  // Ignore errors during startup
}

export interface User {
  id?: string;
  email: string;
  full_name?: string;
  name?: string;
  role?: string;
  avatar_url?: string;
  is_active?: boolean;
}

export const auth = {
  login: async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await apiClient.login(email, password);

      if (response.access_token) {
        // Store token
        localStorage.setItem(AUTH_TOKEN_KEY, response.access_token);

        // Fetch and store user info
        try {
          const userResponse = await apiClient.getCurrentUser();
          const userData: User = {
            id: userResponse.id,
            email: userResponse.email,
            full_name: userResponse.full_name,
            name: userResponse.full_name,
            role: userResponse.role,
            avatar_url: userResponse.avatar_url,
            is_active: userResponse.is_active,
          };
          localStorage.setItem(USER_KEY, JSON.stringify(userData));
        } catch (error) {
          console.error('Failed to fetch user info:', error);
          // Still consider login successful if token was obtained
          // Store minimal user info
          localStorage.setItem(USER_KEY, JSON.stringify({ email }));
        }

        return true;
      }

      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  },

  logout: async (): Promise<void> => {
    try {
      await apiClient.logout();
    } catch (error) {
      console.warn('Logout API call failed:', error);
    } finally {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  },

  getToken: (): string | null => {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  },

  getUser: (): User | null => {
    const userData = localStorage.getItem(USER_KEY);
    if (userData) {
      try {
        return JSON.parse(userData);
      } catch {
        return null;
      }
    }
    return null;
  },

  isAuthenticated: (): boolean => {
    return auth.getToken() !== null && auth.getUser() !== null;
  },

  setToken: (token: string): void => {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  },

  clearAuth: (): void => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
};
