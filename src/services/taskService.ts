import { Task, TaskStatus } from '../types/task';
import { apiClient } from './api';

// Storage key
const STORAGE_KEY = 'innovation1_tasks';

// Mock task data (for fallback/offline mode)
const initialMockTasks: Task[] = [
  {
    id: 'task-1',
    title: 'Design new landing page',
    description: 'Create mockups for the Innovation1 homepage redesign',
    status: 'in-progress',
    priority: 'high',
    projectId: 'proj-1',
    projectName: 'Website Redesign',
    assignee: {
      id: 'user-1',
      name: 'Sarah Chen',
      avatar: undefined,
    },
    dueDate: '2025-11-25',
    order: 0,
    createdAt: '2025-11-15T10:00:00Z',
    updatedAt: '2025-11-19T14:30:00Z',
  },
  {
    id: 'task-2',
    title: 'Implement authentication system',
    description: 'Add JWT-based authentication with refresh tokens',
    status: 'in-progress',
    priority: 'urgent',
    projectId: 'proj-2',
    projectName: 'Backend API',
    assignee: {
      id: 'user-2',
      name: 'Alex Rodriguez',
      avatar: undefined,
    },
    dueDate: '2025-11-22',
    order: 1,
    createdAt: '2025-11-16T09:00:00Z',
    updatedAt: '2025-11-19T16:00:00Z',
  },
  {
    id: 'task-3',
    title: 'Write API documentation',
    description: 'Document all REST endpoints with OpenAPI/Swagger',
    status: 'backlog',
    priority: 'medium',
    projectId: 'proj-2',
    projectName: 'Backend API',
    assignee: {
      id: 'user-3',
      name: 'Jordan Lee',
      avatar: undefined,
    },
    dueDate: '2025-11-28',
    order: 0,
    createdAt: '2025-11-17T11:00:00Z',
    updatedAt: '2025-11-17T11:00:00Z',
  },
  {
    id: 'task-4',
    title: 'Set up CI/CD pipeline',
    description: 'Configure GitHub Actions for automated testing and deployment',
    status: 'backlog',
    priority: 'high',
    projectId: 'proj-3',
    projectName: 'DevOps',
    assignee: {
      id: 'user-1',
      name: 'Sarah Chen',
      avatar: undefined,
    },
    dueDate: '2025-11-30',
    order: 1,
    createdAt: '2025-11-18T08:00:00Z',
    updatedAt: '2025-11-18T08:00:00Z',
  },
  {
    id: 'task-5',
    title: 'Review pull request #234',
    description: 'Code review for the new analytics dashboard feature',
    status: 'review',
    priority: 'high',
    projectId: 'proj-1',
    projectName: 'Website Redesign',
    assignee: {
      id: 'user-2',
      name: 'Alex Rodriguez',
      avatar: undefined,
    },
    dueDate: '2025-11-20',
    order: 0,
    createdAt: '2025-11-19T10:00:00Z',
    updatedAt: '2025-11-19T10:00:00Z',
  },
  {
    id: 'task-6',
    title: 'Fix mobile navigation bug',
    description: 'Menu not closing properly on iOS devices',
    status: 'review',
    priority: 'urgent',
    projectId: 'proj-1',
    projectName: 'Website Redesign',
    assignee: {
      id: 'user-3',
      name: 'Jordan Lee',
      avatar: undefined,
    },
    dueDate: '2025-11-21',
    order: 1,
    createdAt: '2025-11-19T12:00:00Z',
    updatedAt: '2025-11-19T13:00:00Z',
  },
  {
    id: 'task-7',
    title: 'Deploy to production',
    description: 'Release version 2.3.0 with all approved features',
    status: 'done',
    priority: 'medium',
    projectId: 'proj-3',
    projectName: 'DevOps',
    assignee: {
      id: 'user-1',
      name: 'Sarah Chen',
      avatar: undefined,
    },
    dueDate: '2025-11-18',
    order: 0,
    createdAt: '2025-11-15T09:00:00Z',
    updatedAt: '2025-11-18T17:00:00Z',
  },
  {
    id: 'task-8',
    title: 'Update dependencies',
    description: 'Upgrade React and related packages to latest versions',
    status: 'done',
    priority: 'low',
    projectId: 'proj-3',
    projectName: 'DevOps',
    assignee: {
      id: 'user-2',
      name: 'Alex Rodriguez',
      avatar: undefined,
    },
    dueDate: '2025-11-17',
    order: 1,
    createdAt: '2025-11-14T14:00:00Z',
    updatedAt: '2025-11-17T16:00:00Z',
  },
];

// Simulated API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class TaskService {
  private tasks: Task[] = [];

  constructor() {
    // Load from localStorage or use initial data
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        this.tasks = JSON.parse(stored);
      } else {
        this.tasks = [...initialMockTasks];
        this.saveToStorage();
      }
    } catch (error) {
      console.error('Failed to load tasks from storage:', error);
      this.tasks = [...initialMockTasks];
    }
  }

  private saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
    } catch (error) {
      console.error('Failed to save tasks to storage:', error);
    }
  }

  async getTasks(): Promise<Task[]> {
    try {
      // Direct call to API
      const response = await apiClient.getTasks();
      return response.map(this.convertApiTaskToTask);
    } catch (error) {
      console.warn('Failed to fetch tasks from API, using local cache:', error);
      return [...this.tasks];
    }
  }

  async getTasksByStatus(status: TaskStatus): Promise<Task[]> {
    try {
      // FIX 1: Fetch all tasks and filter client-side 
      // (because apiClient.getTasks() doesn't accept arguments yet)
      const response = await apiClient.getTasks();
      const allTasks = response.map(this.convertApiTaskToTask);
      return allTasks.filter(t => t.status === status).sort((a, b) => a.order - b.order);
    } catch (error) {
      console.warn('Failed to fetch tasks by status from API, using local cache:', error);
      return this.tasks.filter((task) => task.status === status).sort((a, b) => a.order - b.order);
    }
  }

  private convertApiTaskToTask(apiTask: any): Task {
    return {
      id: apiTask.id,
      title: apiTask.title,
      description: apiTask.description,
      status: apiTask.status.toLowerCase().replace('_', '-') as TaskStatus,
      priority: apiTask.priority.toLowerCase() as any,
      projectId: apiTask.project_id,
      projectName: apiTask.project?.name || 'Unknown Project',
      assignee: apiTask.assignee_id ? {
        id: apiTask.assignee_id,
        name: apiTask.assignee?.name || 'Unassigned',
        avatar: apiTask.assignee?.avatar,
      } : { id: 'unassigned', name: 'Unassigned', avatar: undefined },
      dueDate: apiTask.due_date,
      order: apiTask.order || 0,
      createdAt: apiTask.created_at,
      updatedAt: apiTask.updated_at,
    };
  }

  async updateTaskStatus(
    taskId: string,
    newStatus: TaskStatus,
    newOrder: number
  ): Promise<Task> {
    try {
      const statusMap: Record<TaskStatus, string> = {
        'backlog': 'BACKLOG',
        'in-progress': 'IN_PROGRESS',
        'review': 'REVIEW',
        'done': 'DONE',
      };

      // FIX 2: Use apiClient.updateTask instead of non-existent updateTaskStatus
      const response = await apiClient.updateTask(taskId, {
        status: statusMap[newStatus],
        order: newOrder
      });

      return this.convertApiTaskToTask(response);
    } catch (error) {
      console.warn('Failed to update task status in API, updating locally:', error);

      const taskIndex = this.tasks.findIndex((t) => t.id === taskId);
      if (taskIndex === -1) {
        throw new Error(`Task ${taskId} not found`);
      }

      const oldStatus = this.tasks[taskIndex].status;
      this.tasks[taskIndex] = {
        ...this.tasks[taskIndex],
        status: newStatus,
        order: newOrder,
        updatedAt: new Date().toISOString(),
      };

      if (oldStatus !== newStatus) {
        this.tasks
          .filter((t) => t.status === oldStatus && t.id !== taskId)
          .forEach((t, index) => {
            t.order = index;
          });
      }

      this.tasks
        .filter((t) => t.status === newStatus && t.id !== taskId)
        .forEach((t) => {
          if (t.order >= newOrder) {
            t.order += 1;
          }
        });

      this.saveToStorage();
      return { ...this.tasks[taskIndex] };
    }
  }

  async updateTask(taskId: string, updates: Partial<Task>): Promise<Task> {
    try {
      const updateData: any = {
        title: updates.title,
        description: updates.description,
        status: updates.status ? updates.status.toUpperCase().replace('-', '_') : undefined,
        priority: updates.priority ? updates.priority.toUpperCase() : undefined,
        due_date: updates.dueDate,
        order: updates.order,
      };

      // Remove undefined keys
      Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);

      const response = await apiClient.updateTask(taskId, updateData);
      return this.convertApiTaskToTask(response);
    } catch (error) {
      console.warn('Failed to update task in API, updating locally:', error);

      const taskIndex = this.tasks.findIndex((t) => t.id === taskId);
      if (taskIndex === -1) {
        throw new Error(`Task ${taskId} not found`);
      }

      this.tasks[taskIndex] = {
        ...this.tasks[taskIndex],
        ...updates,
        updatedAt: new Date().toISOString(),
      };

      this.saveToStorage();
      return { ...this.tasks[taskIndex] };
    }
  }

  async createTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task> {
    try {
      const createData = {
        title: task.title,
        description: task.description,
        status: task.status.toUpperCase().replace('-', '_'),
        priority: task.priority.toUpperCase(),
        project_id: task.projectId,
        assignee_id: task.assignee?.id && task.assignee.id !== 'unassigned' ? task.assignee.id : null,
        due_date: task.dueDate,
        order: task.order || 0,
      };

      const response = await apiClient.createTask(createData);
      return this.convertApiTaskToTask(response);
    } catch (error) {
      console.warn('Failed to create task in API, creating locally:', error);

      const newTask: Task = {
        ...task,
        id: `task-${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      this.tasks.push(newTask);
      this.saveToStorage();
      return { ...newTask };
    }
  }

  async deleteTask(taskId: string): Promise<void> {
    try {
      await apiClient.deleteTask(taskId);
    } catch (error) {
      console.warn('Failed to delete task from API, deleting locally:', error);
    }

    const taskIndex = this.tasks.findIndex((t) => t.id === taskId);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.saveToStorage();
    }
  }

  async getProjects(): Promise<Array<{ id: string; name: string; color: string }>> {
    await delay(100);

    // Extract unique projects from tasks
    const projectMap = new Map<string, { id: string; name: string; color: string }>();

    this.tasks.forEach(task => {
      if (task.projectId && task.projectName && !projectMap.has(task.projectId)) {
        projectMap.set(task.projectId, {
          id: task.projectId,
          name: task.projectName,
          color: this.getProjectColor(task.projectId),
        });
      }
    });

    return Array.from(projectMap.values());
  }

  private getProjectColor(projectId: string): string {
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];
    const index = projectId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  }
}

export const taskService = new TaskService();