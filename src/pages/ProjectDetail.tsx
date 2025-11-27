import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Edit, Plus, Calendar, Users as UsersIcon, CheckSquare } from 'lucide-react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { StatusBadge } from '../components/ui/StatusBadge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Progress } from '../components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { AddTaskModal } from '../components/kanban/AddTaskModal';
import { taskService } from '../services/taskService';
import { apiClient } from '../services/api';
import { Task } from '../types/task';
import { toast } from 'sonner';
import { RnDProjectExpansionView } from '../components/rnd/RnDProjectExpansion';
import { RnDTaskExpansionView } from '../components/rnd/RnDTaskExpansion';

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [selectedStatus, setSelectedStatus] = useState('active');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [projectTasks, setProjectTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [projectLoading, setProjectLoading] = useState(true);

  // Load project details
  useEffect(() => {
    const fetchProject = async () => {
      if (!id) return;
      try {
        setProjectLoading(true);
        console.log(`[API Debug] Fetching Single Project: ${id}`);
        const data = await apiClient.getProject(id);
        setProject(data);
        setSelectedStatus(data.status);
      } catch (error) {
        console.error('Failed to load project:', error);
        toast.error('Failed to load project details');
      } finally {
        setProjectLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  // Load tasks for this project
  useEffect(() => {
    loadProjectTasks();
  }, [id]);

  const loadProjectTasks = async () => {
    try {
      setLoading(true);
      const allTasks = await taskService.getTasks();
      // Filter tasks for this project - match by project ID or legacy tasks
      const filteredTasks = allTasks.filter((task) => task.projectId === id);
      setProjectTasks(filteredTasks);
    } catch (error) {
      console.error('Failed to load project tasks:', error);
      toast.error('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  // Handle add task
  const handleAddTask = async (taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      // Ensure the task is associated with this project
      const taskWithProject = {
        ...taskData,
        projectId: id,
        projectName: project?.name || '',
      };

      await taskService.createTask(taskWithProject);
      await loadProjectTasks();
      toast.success('Task created successfully');
    } catch (error) {
      console.error('Failed to create task:', error);
      toast.error('Failed to create task');
    }
  };

  // Handle task completion toggle
  const handleToggleTask = async (task: Task) => {
    try {
      const newStatus = task.status === 'done' ? 'in-progress' : 'done';
      await taskService.updateTask(task.id, { status: newStatus });
      await loadProjectTasks();
      toast.success('Task updated');
    } catch (error) {
      console.error('Failed to update task:', error);
      toast.error('Failed to update task');
    }
  };

  if (projectLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      </DashboardLayout>
    );
  }

  if (!project) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <p className="text-gray-600">Project not found</p>
          <Link to="/projects">
            <Button className="mt-4">Back to Projects</Button>
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  const completedTasks = projectTasks.filter((t) => t.status === 'done').length;
  const totalTasks = projectTasks.length;
  const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-600">
          <Link to="/projects" className="hover:text-blue-600">
            Projects
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{project.name}</span>
        </div>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-gray-900 mb-2">{project.name}</h1>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <Button variant="outline">
              <Edit className="w-4 h-4 mr-2" />
              Edit Project
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="blocked">Blocked</SelectItem>
              </SelectContent>
            </Select>
            <StatusBadge status={project.status} />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-900">Progress</h3>
                <span className="text-gray-600">
                  {completedTasks} of {totalTasks} tasks completed
                </span>
              </div>
              <Progress value={progressPercentage} className="mt-4" />
            </div>

            {/* Tasks */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-gray-900">Tasks</h3>
                <Button onClick={() => setIsAddModalOpen(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </Button>
              </div>
              <div className="space-y-4">
                {loading ? (
                  <div className="text-center py-8">
                    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Loading tasks...</p>
                  </div>
                ) : projectTasks.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No tasks yet. Click "Add Task" to create one.</p>
                  </div>
                ) : (
                  projectTasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                    >
                      <div className="pt-0.5">
                        <Checkbox
                          checked={task.status === 'done'}
                          onCheckedChange={() => handleToggleTask(task)}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-gray-900 ${task.status === 'done' ? 'line-through text-gray-500' : ''
                            }`}
                        >
                          {task.title}
                        </p>
                        {task.description && (
                          <p className="text-gray-500 text-sm mt-1">{task.description}</p>
                        )}
                        <div className="flex items-center gap-3 mt-2">
                          {task.dueDate && (
                            <p className="text-gray-500 text-xs">
                              Due: {new Date(task.dueDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </p>
                          )}
                          {task.priority && (
                            <span className={`text-xs px-2 py-0.5 rounded-full ${task.priority === 'urgent' ? 'bg-red-50 text-red-600' :
                              task.priority === 'high' ? 'bg-orange-50 text-orange-600' :
                                task.priority === 'medium' ? 'bg-yellow-50 text-yellow-600' :
                                  'bg-blue-50 text-blue-600'
                              }`}>
                              {task.priority}
                            </span>
                          )}
                        </div>
                        {/* R&D Task Expansion */}
                        <RnDTaskExpansionView taskId={task.id} />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Project Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-gray-900 mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>Deadline</span>
                  </div>
                  <p className="text-gray-900">{project.deadline}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <UsersIcon className="w-4 h-4" />
                    <span>Project Owner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={project.ownerAvatar} alt={project.owner} />
                      <AvatarFallback>{project.owner?.[0] || '?'}</AvatarFallback>
                    </Avatar>
                    <span className="text-gray-900">{project.owner}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-gray-900 mb-4">Team Members</h3>
              <div className="space-y-4">
                {project.teamMembers && project.teamMembers.map((member: any) => (
                  <div key={member.id} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900">{member.name}</p>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Plus className="w-4 h-4 mr-2" />
                Add Member
              </Button>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-gray-900 mb-4">Timeline</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                  <div>
                    <p className="text-gray-900">Project created</p>
                    <p className="text-gray-500">
                      {project.createdAt ? new Date(project.createdAt).toLocaleDateString() : 'N/A'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                  <div>
                    <p className="text-gray-900">Requirements completed</p>
                    <p className="text-gray-500">Nov 15, 2025</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-300 mt-2"></div>
                  <div>
                    <p className="text-gray-900">Expected completion</p>
                    <p className="text-gray-500">{project.deadline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* R&D Expansion Section */}
        {id && <RnDProjectExpansionView projectId={id} />}
      </div>
      <AddTaskModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddTask}
        projects={[]} // Empty array since we're pre-populating project
        projectId={id}
        projectName={project.name}
      />
    </DashboardLayout>
  );
}