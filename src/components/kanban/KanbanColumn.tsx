import { useDrop } from 'react-dnd';
import { Task, TaskStatus, KanbanColumn as ColumnType } from '../../types/task';
import { TaskCard } from './TaskCard';
import { motion } from 'motion/react';

interface KanbanColumnProps {
  column: ColumnType;
  tasks: Task[];
  onTaskMove: (taskId: string, newStatus: TaskStatus, newOrder: number) => void;
  onTaskClick: (task: Task) => void;
}

export function KanbanColumn({ column, tasks, onTaskMove, onTaskClick }: KanbanColumnProps) {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item: { task: Task }, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }

      // Calculate new order (append to end)
      const newOrder = tasks.length;
      onTaskMove(item.task.id, column.id, newOrder);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = isOver && canDrop;

  return (
    <div className="flex-shrink-0 w-full sm:w-80 flex flex-col">
      {/* Column Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: column.color }}
            />
            <h3 className="text-base font-semibold text-gray-900">
              {column.title}
            </h3>
          </div>
          <div className="px-2.5 py-1 bg-gray-100 rounded-full border border-gray-200">
            <span className="text-xs font-medium text-gray-600">
              {tasks.length}
            </span>
          </div>
        </div>
        <div className="mt-2 h-1 rounded-full bg-gray-100">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: tasks.length > 0 ? '100%' : '0%',
              backgroundColor: column.color,
              opacity: 0.6,
            }}
          />
        </div>
      </div>

      {/* Drop Zone */}
      <div
        ref={drop}
        className={`
          flex-1 min-h-[200px] rounded-lg p-3 transition-all
          ${isActive ? 'bg-blue-50 border-2 border-blue-300 border-dashed' : 'bg-gray-50 border-2 border-transparent'}
        `}
      >
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <div className="w-6 h-6 rounded-full border-2 border-dashed border-gray-300" />
              </div>
              <p className="text-sm text-gray-400">
                {isActive ? 'Drop task here' : 'No tasks'}
              </p>
            </motion.div>
          ) : (
            tasks.map((task) => (
              <TaskCard key={task.id} task={task} onClick={onTaskClick} />
            ))
          )}
        </div>

        {/* Drop indicator overlay */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute inset-0 bg-blue-100/20 rounded-lg" />
          </motion.div>
        )}
      </div>
    </div>
  );
}