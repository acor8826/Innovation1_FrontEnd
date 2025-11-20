import { useDrag } from 'react-dnd';
import { Task } from '../../types/task';
import { Calendar, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface TaskCardProps {
  task: Task;
  onClick: (task: Task) => void;
}

const priorityColors = {
  low: 'bg-blue-50 text-blue-600 border-blue-200',
  medium: 'bg-yellow-50 text-yellow-600 border-yellow-200',
  high: 'bg-orange-50 text-orange-600 border-orange-200',
  urgent: 'bg-red-50 text-red-600 border-red-200',
};

const priorityIcons = {
  low: null,
  medium: null,
  high: <AlertCircle className="w-3 h-3" />,
  urgent: <AlertCircle className="w-3 h-3" />,
};

export function TaskCard({ task, onClick }: TaskCardProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date();

  return (
    <motion.div
      ref={drag}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isDragging ? 0.5 : 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={() => onClick(task)}
      className={`
        group relative bg-white border border-gray-200 rounded-lg p-4 cursor-pointer
        hover:shadow-md hover:border-blue-300 transition-all
        ${isDragging ? 'opacity-50 scale-95' : ''}
      `}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
        {task.title}
      </h3>

      {/* Description */}
      {task.description && (
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
          {task.description}
        </p>
      )}

      {/* Project tag */}
      {task.projectName && (
        <div className="mb-3">
          <span className="inline-block px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded border border-blue-200">
            {task.projectName}
          </span>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between gap-2">
        {/* Left side - Priority and Due Date */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Priority badge */}
          <div
            className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded border ${priorityColors[task.priority]}`}
          >
            {priorityIcons[task.priority]}
            <span className="capitalize">{task.priority}</span>
          </div>

          {/* Due date */}
          {task.dueDate && (
            <div
              className={`flex items-center gap-1 text-xs ${
                isOverdue ? 'text-red-600' : 'text-gray-500'
              }`}
            >
              <Calendar className="w-3 h-3" />
              <span>{new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
          )}
        </div>

        {/* Right side - Assignee */}
        {task.assignee && (
          <div className="flex items-center gap-1.5">
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
          </div>
        )}
      </div>

      {/* Drag indicator */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex flex-col gap-0.5">
          <div className="w-4 h-0.5 bg-gray-400 rounded-full" />
          <div className="w-4 h-0.5 bg-gray-400 rounded-full" />
          <div className="w-4 h-0.5 bg-gray-400 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
}