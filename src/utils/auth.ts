// Simple authentication utility using localStorage
const AUTH_KEY = 'innovation1_auth';

export interface User {
  email: string;
  name: string;
  role: string;
}

export const auth = {
  login: (email: string, password: string): boolean => {
    // Simple demo authentication
    // In production, this would call an API endpoint
    const validCredentials = [
      { email: 'admin@innovation1.com', password: 'admin123', name: 'Admin User', role: 'Admin' },
      { email: 'demo@innovation1.com', password: 'demo123', name: 'Demo User', role: 'User' },
      { email: 'staff@innovation1.com', password: 'staff123', name: 'Staff Member', role: 'Staff' },
    ];

    const user = validCredentials.find(
      (cred) => cred.email === email && cred.password === password
    );

    if (user) {
      const userData: User = {
        email: user.email,
        name: user.name,
        role: user.role,
      };
      localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
      return true;
    }

    return false;
  },

  logout: (): void => {
    localStorage.removeItem(AUTH_KEY);
  },

  getUser: (): User | null => {
    const userData = localStorage.getItem(AUTH_KEY);
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
    return auth.getUser() !== null;
  },
};
