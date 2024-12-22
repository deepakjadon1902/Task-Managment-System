import React, { useState } from 'react';
import { CheckCircle, ListTodo } from 'lucide-react';
import { Task } from './types/task';
import { TaskForm } from './components/TaskForm';
import { TaskCard } from './components/TaskCard';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Task['status']>('todo');

  const handleAddTask = (newTask: Omit<Task, 'id' | 'createdAt'>) => {
    const task: Task = {
      ...newTask,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, task]);
  };

  const handleStatusChange = (id: string, status: Task['status']) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status } : task
    ));
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => 
    filter === 'all' ? true : task.status === filter
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ListTodo className="h-8 w-8 text-blue-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Task Management System</h1>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-600">
                {tasks.filter(t => t.status === 'completed').length} of {tasks.length} tasks completed
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Task</h2>
              <TaskForm onSubmit={handleAddTask} />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Tasks</h2>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as Task['status'])}
                className="px-3 py-1 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Tasks</option>
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="grid gap-4">
              {filteredTasks.length === 0 ? (
                <p className="text-center text-gray-500 py-8">No tasks found.</p>
              ) : (
                filteredTasks.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onStatusChange={handleStatusChange}
                    onDelete={handleDeleteTask}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;