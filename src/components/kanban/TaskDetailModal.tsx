import { X, Calendar, User, AlertCircle, FolderKanban } from 'lucide-react';
import { Task } from '../../types/task';
import { motion, AnimatePresence } from 'motion/react';

interface TaskDetailModalProps {
  task: Task | null;
  isOpen: boolean;
  onClose: () => void;
}

const priorityColors = {
  low: 'bg-blue-50 text-blue-600 border-blue-200',
  medium: 'bg-yellow-50 text-yellow-600 border-yellow-200',
  high: 'bg-orange-50 text-orange-600 border-orange-200',
  urgent: 'bg-red-50 text-red-600 border-red-200',
};

const statusLabels = {
  backlog: 'Backlog',
  'in-progress': 'In Progress',
  review: 'Review',
  done: 'Done',
};

export function TaskDetailModal({ task, isOpen, onClose }: TaskDetailModalProps) {
  if (!task) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              <div className="bg-white rounded-xl shadow-2xl border border-gray-200">
                {/* Header */}
                <div className="flex items-start justify-between p-6 border-b border-gray-200">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {task.title}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full border ${priorityColors[task.priority]}`}
                      >
                        <AlertCircle className="w-3 h-3" />
                        <span className="capitalize">{task.priority} Priority</span>
                      </span>
                      <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                        {statusLabels[task.status]}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                      Description
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {task.description}
                    </p>
                  </div>

                  {/* Metadata Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Project */}
                    {task.projectName && (
                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <FolderKanban className="w-4 h-4 text-blue-600" />
                          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Project
                          </h4>
                        </div>
                        <p className="text-sm text-gray-900">{task.projectName}</p>
                      </div>
                    )}

                    {/* Assignee */}
                    {task.assignee && (
                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <User className="w-4 h-4 text-blue-600" />
                          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Assignee
                          </h4>
                        </div>
                        <div className="flex items-center gap-2">
                          {task.assignee.avatar ? (
                            <img
                              src={task.assignee.avatar}
                              alt={task.assignee.name}
                              className="w-6 h-6 rounded-full border border-gray-300"
                            />
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-xs text-white font-semibold border border-gray-300">
                              {task.assignee.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')
                                .toUpperCase()}
                            </div>
                          )}
                          <p className="text-sm text-gray-900">{task.assignee.name}</p>
                        </div>
                      </div>
                    )}

                    {/* Due Date */}
                    {task.dueDate && (
                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Due Date
                          </h4>
                        </div>
                        <p className="text-sm text-gray-900">
                          {new Date(task.dueDate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    )}

                    {/* Timestamps */}
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        Timeline
                      </h4>
                      <div className="space-y-1 text-xs text-gray-600">
                        <p>
                          Created: {new Date(task.createdAt).toLocaleDateString()}
                        </p>
                        <p>
                          Updated: {new Date(task.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 rounded-lg transition-all"
                  >
                    Close
                  </button>
                  <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium">
                    Edit Task
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}