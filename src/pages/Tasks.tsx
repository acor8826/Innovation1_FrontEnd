import { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Plus, LayoutGrid, List } from 'lucide-react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { SEO } from '../components/SEO';
import { KanbanColumn } from '../components/kanban/KanbanColumn';
import { TaskDetailModal } from '../components/kanban/TaskDetailModal';
import { AddTaskModal } from '../components/kanban/AddTaskModal';
import { Task, KanbanColumn as ColumnType } from '../types/task';
import { useTaskBoard } from '../hooks/useTaskBoard';
import { taskService } from '../services/taskService';
import { toast } from 'sonner@2.0.3';

// Column configuration
const columns: ColumnType[] = [
  { id: 'backlog', title: 'Backlog', color: '#6B7280' },
  { id: 'in-progress', title: 'In Progress', color: '#3B82F6' },
  { id: 'review', title: 'Review', color: '#F59E0B' },
  { id: 'done', title: 'Done', color: '#10B981' },
];

export default function Tasks() {
  const { tasks, loading, getTasksByStatus, moveTask, loadTasks } = useTaskBoard();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'board' | 'list'>('board');
  const [projects, setProjects] = useState<Array<{ id: string; name: string; color: string }>>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Load projects on mount
  useEffect(() => {
    loadProjects();
  }, [tasks]);

  const loadProjects = async () => {
    try {
      const projectList = await taskService.getProjects();
      setProjects(projectList);
    } catch (error) {
      console.error('Failed to load projects:', error);
    }
  };

  // Handle task move
  const handleTaskMove = async (taskId: string, newStatus: any, newOrder: number) => {
    try {
      await moveTask(taskId, newStatus, newOrder);
      
      const columnName = columns.find((c) => c.id === newStatus)?.title;
      if (columnName) {
        toast.success(`Task moved to ${columnName}`);
      }
    } catch (error) {
      console.error('Failed to update task:', error);
      toast.error('Failed to update task');
    }
  };

  // Handle task click
  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  // Handle add task
  const handleAddTask = async (taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      await taskService.createTask(taskData);
      await loadTasks();
      toast.success('Task created successfully');
    } catch (error) {
      console.error('Failed to create task:', error);
      toast.error('Failed to create task');
    }
  };

  // Filter tasks by selected project
  const getFilteredTasks = (status: any) => {
    const statusTasks = getTasksByStatus(status);
    if (!selectedProjectId) {
      return statusTasks;
    }
    return statusTasks.filter(task => task.projectId === selectedProjectId);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <SEO
          title="Tasks | Innovation1 Project Management"
          description="Manage your tasks with a powerful Kanban board interface"
          keywords="task management, kanban board, project tasks"
        />
        <div className="flex items-center justify-center h-96">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-600">Loading tasks...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <SEO
        title="Tasks | Innovation1 Project Management"
        description="Manage your tasks with a powerful Kanban board interface"
        keywords="task management, kanban board, project tasks"
      />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Task Board</h1>
            <p className="text-gray-600 mt-1">
              Manage and track your tasks across different stages
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View Toggle */}
            <div className="inline-flex items-center bg-white rounded-lg border border-gray-200 p-1">
              <button
                onClick={() => setViewMode('board')}
                className={`
                  px-4 py-2 rounded-md text-sm font-medium transition-all
                  ${viewMode === 'board' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'}
                `}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`
                  px-4 py-2 rounded-md text-sm font-medium transition-all
                  ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'}
                `}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Add Task Button */}
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Task</span>
            </button>
          </div>
        </div>

        {/* Board View with Swimlanes */}
        {viewMode === 'board' && (
          <div className="flex gap-6">
            {/* Left Sidebar - Project Swimlanes */}
            <div className="w-64 flex-shrink-0 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                Projects
              </h3>
              <div className="space-y-2">
                {/* All Tasks */}
                <button
                  onClick={() => setSelectedProjectId(null)}
                  className={`
                    w-full text-left px-3 py-2 rounded-lg transition-all text-sm
                    ${selectedProjectId === null
                      ? 'bg-blue-50 text-blue-600 font-medium border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span>All Tasks</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedProjectId === null ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tasks.length}
                    </span>
                  </div>
                </button>

                {/* Project List */}
                {projects.map((project) => {
                  const projectTaskCount = tasks.filter(t => t.projectId === project.id).length;
                  return (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProjectId(project.id)}
                      className={`
                        w-full text-left px-3 py-2 rounded-lg transition-all text-sm
                        ${selectedProjectId === project.id
                          ? 'bg-blue-50 text-blue-600 font-medium border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                        }
                      `}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: project.color }}
                        />
                        <span className="flex-1 truncate">{project.name}</span>
                      </div>
                      <div className="flex items-center justify-between pl-5">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          selectedProjectId === project.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {projectTaskCount} tasks
                        </span>
                      </div>
                    </button>
                  );
                })}

                {projects.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-sm text-gray-400">No projects yet</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Kanban Board */}
            <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <DndProvider backend={HTML5Backend}>
                {/* Kanban Board */}
                <div className="flex gap-6 overflow-x-auto pb-4">
                  {columns.map((column) => (
                    <KanbanColumn
                      key={column.id}
                      column={column}
                      tasks={getFilteredTasks(column.id)}
                      onTaskMove={handleTaskMove}
                      onTaskClick={handleTaskClick}
                    />
                  ))}
                </div>
              </DndProvider>
            </div>
          </div>
        )}

        {/* List View (placeholder) */}
        {viewMode === 'list' && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center shadow-sm">
            <p className="text-gray-500">List view coming soon...</p>
          </div>
        )}
      </div>

      {/* Task Detail Modal */}
      <TaskDetailModal
        task={selectedTask}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTask(null);
        }}
      />

      {/* Add Task Modal */}
      <AddTaskModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddTask}
        projects={projects}
      />
    </DashboardLayout>
  );
}
