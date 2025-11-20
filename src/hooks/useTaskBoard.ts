import { useState, useEffect, useCallback } from 'react';
import { Task, TaskStatus } from '../types/task';
import { taskService } from '../services/taskService';

export function useTaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load tasks
  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await taskService.getTasks();
      setTasks(data);
    } catch (err) {
      console.error('Failed to load tasks:', err);
      setError('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  // Move task to new status/order
  const moveTask = useCallback(
    async (taskId: string, newStatus: TaskStatus, newOrder: number) => {
      const taskToMove = tasks.find((t) => t.id === taskId);
      if (!taskToMove) return;

      const oldStatus = taskToMove.status;
      const oldOrder = taskToMove.order;

      // Optimistic update
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, status: newStatus, order: newOrder };
          }
          // Reorder other tasks in the destination column
          if (task.status === newStatus && task.id !== taskId) {
            if (task.order >= newOrder) {
              return { ...task, order: task.order + 1 };
            }
          }
          return task;
        });

        return updatedTasks;
      });

      // Persist to backend
      try {
        await taskService.updateTaskStatus(taskId, newStatus, newOrder);
      } catch (err) {
        console.error('Failed to update task:', err);

        // Revert on error
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, status: oldStatus, order: oldOrder } : task
          )
        );

        throw err;
      }
    },
    [tasks]
  );

  // Get tasks by status
  const getTasksByStatus = useCallback(
    (status: TaskStatus): Task[] => {
      return tasks
        .filter((task) => task.status === status)
        .sort((a, b) => a.order - b.order);
    },
    [tasks]
  );

  return {
    tasks,
    loading,
    error,
    loadTasks,
    moveTask,
    getTasksByStatus,
  };
}
