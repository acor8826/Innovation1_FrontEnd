# Frontend Development Guide

**Version**: 1.0.0  
**Date**: November 20, 2025  
**Status**: Active Development  
**Scope**: React Frontend Only

---

## Overview

This guide provides comprehensive information for developing the React-based Project Management Dashboard frontend. This is a **frontend-only project** that consumes backend APIs but does not implement them.

---

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Project Structure](#project-structure)
3. [Development Workflow](#development-workflow)
4. [State Management Strategy](#state-management-strategy)
5. [API Integration](#api-integration)
6. [Component Patterns](#component-patterns)
7. [Styling Approach](#styling-approach)
8. [Testing Strategy](#testing-strategy)
9. [Performance Optimization](#performance-optimization)
10. [Deployment](#deployment)

---

## Technology Stack

### Core Framework
- **React**: 18.3.1 with Hooks and function components
- **TypeScript**: 5.x for type safety
- **Vite**: Fast build tool and dev server

### Routing & Navigation
- **React Router DOM**: 7.x for client-side routing
- Protected routes with authentication checks

### Styling
- **Tailwind CSS**: v4.1.3 for utility-first styling
- **Radix UI**: Accessible component primitives
- Custom CSS variables for theming (see `styles/globals.css`)

### Forms & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation

### Data Fetching
- Currently using **mock data** (`src/data/mockData.ts`)
- Future: React Query or SWR for server state management

### UI Components
- **Radix UI**: Dialog, Dropdown, Select, etc.
- **Lucide React**: Icon library
- **Recharts**: Data visualization
- **Sonner**: Toast notifications

### Development Tools
- **ESLint**: Code linting
- **TypeScript**: Type checking
- **Vite HMR**: Hot module replacement

---

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (buttons, cards, etc.)
│   ├── dashboard/       # Dashboard-specific components
│   ├── projects/        # Project-related components
│   ├── layout/          # Layout components (Header, Sidebar)
│   └── innovation1/     # Landing page components
├── pages/               # Route components
│   ├── Dashboard.tsx
│   ├── Projects.tsx
│   ├── ProjectDetail.tsx
│   └── Innovation1Landing.tsx
├── data/                # Mock data and types
│   └── mockData.ts
├── utils/               # Utility functions
│   └── auth.ts
├── styles/              # Global styles
│   └── globals.css
├── App.tsx             # Main app component with routing
├── main.tsx            # Entry point
└── index.css           # Tailwind imports and base styles
```

---

## Development Workflow

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create `.env` file for configuration:

```env
VITE_API_BASE_URL=https://api.yourapp.com
VITE_APP_NAME=Innovation1
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

---

## State Management Strategy

### Current Approach (MVP)

**Local State** (`useState`):
- Component-specific UI state
- Form inputs
- Toggle states

**Props Drilling**:
- Passing data through component hierarchy
- Suitable for shallow component trees

**Mock Data**:
- Static mock data in `src/data/mockData.ts`
- Simulates API responses during development

### Recommended Future Approach

**React Context API**:
```typescript
// For auth state
export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  
  // Auth methods: login, logout, refresh
  
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
```

**React Query** (for server state):
```typescript
import { useQuery, useMutation } from '@tanstack/react-query';

function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

function useCreateProject() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}
```

**Zustand** (for complex global state, if needed):
```typescript
import { create } from 'zustand';

interface AppState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  theme: 'light',
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setTheme: (theme) => set({ theme }),
}));
```

---

## API Integration

### API Client Setup

Create a centralized API client:

```typescript
// src/utils/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - add auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor - handle token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const { data } = await axios.post('/api/v1/auth/refresh', {
          refresh_token: refreshToken,
        });
        
        localStorage.setItem('accessToken', data.access_token);
        originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
        
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Redirect to login
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
```

### API Service Layer

```typescript
// src/services/projectService.ts
import apiClient from '@/utils/apiClient';
import { Project, CreateProjectDTO } from '@/types';

export const projectService = {
  getAll: async (params?: { status?: string; search?: string }) => {
    const { data } = await apiClient.get<Project[]>('/projects', { params });
    return data;
  },
  
  getById: async (id: string) => {
    const { data } = await apiClient.get<Project>(`/projects/${id}`);
    return data;
  },
  
  create: async (project: CreateProjectDTO) => {
    const { data } = await apiClient.post<Project>('/projects', project);
    return data;
  },
  
  update: async (id: string, updates: Partial<Project>) => {
    const { data } = await apiClient.patch<Project>(`/projects/${id}`, updates);
    return data;
  },
  
  delete: async (id: string) => {
    await apiClient.delete(`/projects/${id}`);
  },
};
```

### Using in Components

```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { projectService } from '@/services/projectService';

function ProjectsList() {
  const queryClient = useQueryClient();
  
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: () => projectService.getAll(),
  });
  
  const deleteMutation = useMutation({
    mutationFn: projectService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Project deleted');
    },
  });
  
  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={() => deleteMutation.mutate(project.id)}
        />
      ))}
    </div>
  );
}
```

---

## Component Patterns

### Composition Pattern

```typescript
// Composable Card component
export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={cn("rounded-lg border bg-card", className)} {...props}>
      {children}
    </div>
  );
}

Card.Header = function CardHeader({ children, className }) {
  return <div className={cn("p-6", className)}>{children}</div>;
};

Card.Title = function CardTitle({ children, className }) {
  return <h3 className={cn("font-semibold", className)}>{children}</h3>;
};

Card.Content = function CardContent({ children, className }) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>;
};

// Usage
<Card>
  <Card.Header>
    <Card.Title>Project Details</Card.Title>
  </Card.Header>
  <Card.Content>
    {/* content */}
  </Card.Content>
</Card>
```

### Custom Hooks

```typescript
// useDebounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debouncedValue;
}

// Usage
function SearchBar() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  
  const { data } = useQuery({
    queryKey: ['projects', debouncedSearch],
    queryFn: () => projectService.getAll({ search: debouncedSearch }),
  });
}
```

### Compound Components

```typescript
interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

export function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}

Tabs.List = function TabsList({ children }) {
  return <div className="flex border-b">{children}</div>;
};

Tabs.Trigger = function TabsTrigger({ value, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext)!;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={activeTab === value ? 'border-b-2' : ''}
    >
      {children}
    </button>
  );
};

Tabs.Content = function TabsContent({ value, children }) {
  const { activeTab } = useContext(TabsContext)!;
  if (activeTab !== value) return null;
  return <div>{children}</div>;
};
```

---

## Styling Approach

### Tailwind CSS Utility Classes

```typescript
// Use cn() helper to merge classes
import { cn } from '@/lib/utils';

<button className={cn(
  "px-4 py-2 rounded-md font-medium",
  variant === "primary" && "bg-blue-500 text-white",
  variant === "secondary" && "bg-gray-200 text-gray-900",
  disabled && "opacity-50 cursor-not-allowed"
)}>
  {children}
</button>
```

### CSS Variables (Design Tokens)

Defined in `styles/globals.css`:

```css
:root {
  --background: 210 100% 6%;
  --foreground: 210 40% 98%;
  --primary: 199 89% 48%;
  --primary-foreground: 210 40% 98%;
  /* ... */
}

/* Usage in Tailwind */
.bg-primary { background-color: hsl(var(--primary)); }
```

### Responsive Design

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
</div>
```

---

## Testing Strategy

### Unit Tests (React Testing Library)

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Integration Tests

Test complete user flows with React Testing Library and Mock Service Worker (MSW).

### E2E Tests (Playwright)

```typescript
import { test, expect } from '@playwright/test';

test('user can create a project', async ({ page }) => {
  await page.goto('/projects');
  await page.click('button:has-text("New Project")');
  await page.fill('input[name="name"]', 'Test Project');
  await page.click('button:has-text("Create")');
  await expect(page.locator('text=Test Project')).toBeVisible();
});
```

---

## Performance Optimization

### Code Splitting

```typescript
// Route-based code splitting
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Projects = lazy(() => import('./pages/Projects'));

<Suspense fallback={<Spinner />}>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
</Suspense>
```

### Memoization

```typescript
// Expensive computation
const expensiveValue = useMemo(() => {
  return projects.reduce((sum, p) => sum + p.tasks.length, 0);
}, [projects]);

// Prevent re-renders
const MemoizedProjectCard = memo(ProjectCard);

// Stable callbacks
const handleDelete = useCallback((id: string) => {
  deleteMutation.mutate(id);
}, [deleteMutation]);
```

### Virtual Scrolling

For large lists:

```typescript
import { useVirtualizer } from '@tanstack/react-virtual';

function ProjectsList({ projects }) {
  const parentRef = useRef<HTMLDivElement>(null);
  
  const virtualizer = useVirtualizer({
    count: projects.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
  });
  
  return (
    <div ref={parentRef} style={{ height: '600px', overflow: 'auto' }}>
      <div style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <div key={virtualRow.index} style={{ height: virtualRow.size }}>
            <ProjectCard project={projects[virtualRow.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Deployment

### Build for Production

```bash
npm run build
# Output: dist/ directory
```

### Deployment Options

**Vercel** (Recommended):
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Custom Server** (Nginx):
```nginx
server {
  listen 80;
  server_name yourapp.com;
  
  root /var/www/dist;
  index index.html;
  
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

### Environment Variables

Set in deployment platform:
- `VITE_API_BASE_URL`
- `VITE_APP_NAME`

---

## Security Best Practices

- **XSS Protection**: React escapes by default, but be careful with `dangerouslySetInnerHTML`
- **Token Storage**: Use httpOnly cookies for refresh tokens, memory for access tokens
- **HTTPS Only**: Always use HTTPS in production
- **Content Security Policy**: Set appropriate CSP headers
- **Input Validation**: Validate on client AND server
- **Dependency Audits**: Run `npm audit` regularly

---

## Next Steps

1. **Set up React Query**: For robust server state management
2. **Implement Auth Context**: Centralized authentication state
3. **Create API Service Layer**: Abstraction over API calls
4. **Add Unit Tests**: For critical components
5. **Implement Error Boundaries**: Graceful error handling
6. **Add Loading States**: Better UX during async operations
7. **Optimize Bundle Size**: Code splitting and tree shaking
8. **Set up CI/CD**: Automated testing and deployment

---

## Document Control

**Owner**: Frontend Agent, Architect Agent  
**Reviewers**: Orchestrator, QA, DevOps  
**Next Review**: After React Query integration

**Change Log**:
- v1.0.0 (2025-11-20): Initial frontend development guide
