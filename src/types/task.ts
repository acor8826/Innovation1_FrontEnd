export type TaskStatus = 'backlog' | 'in-progress' | 'review' | 'done';

export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  projectId?: string;
  projectName?: string;
  assignee?: {
    id: string;
    name: string;
    avatar?: string;
  };
  dueDate?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface KanbanColumn {
  id: TaskStatus;
  title: string;
  color: string;
}
