import React from 'react';
import { Clock, Flag } from 'lucide-react';
import { Task } from '../types/task';

interface TaskCardProps {
  task: Task;
  onStatusChange: (id: string, status: Task['status']) => void;
  onDelete: (id: string) => void;
}

const priorityColors = {
  low: 'bg-blue-100 text-blue-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

const statusColors = {
  todo: 'bg-gray-100 text-gray-800',
  'in-progress': 'bg-purple-100 text-purple-800',
  completed: 'bg-green-100 text-green-800',
};

export function TaskCard({ task, onStatusChange, onDelete }: TaskCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
        <div className="flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
            {task.priority}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[task.status]}`}>
            {task.status}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{task.description}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <Flag size={16} />
          <span>Created: {new Date(task.createdAt).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value as Task['status'])}
          className="px-3 py-1 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-600 hover:text-red-800 text-sm font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}