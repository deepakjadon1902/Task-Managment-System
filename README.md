# Task Management System

A modern, responsive task management application built with React, TypeScript, and Tailwind CSS. Efficiently manage your tasks with features like priority levels, due dates, and status tracking.

## Features

- ✨ Create and manage tasks with titles and descriptions
- 🎯 Set task priorities (Low, Medium, High)
- 📅 Assign due dates to tasks
- 🔄 Track task status (Todo, In Progress, Completed)
- 🔍 Filter tasks by status
- 📱 Responsive design for all devices
- ⚡ Fast and efficient with Vite
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/deepakjadon1902/Task-Managment-System.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/        # React components
│   ├── TaskCard.tsx  # Individual task display
│   └── TaskForm.tsx  # Task creation form
├── types/            # TypeScript type definitions
│   └── task.ts      # Task-related types
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## Usage

1. **Creating a Task**
   - Fill in the task details in the form
   - Set priority and due date
   - Click "Add Task"

2. **Managing Tasks**
   - View all tasks in the main dashboard
   - Change task status using the dropdown
   - Delete tasks when completed
   - Filter tasks by status

3. **Task Properties**
   - Title
   - Description
   - Priority (Low, Medium, High)
   - Status (Todo, In Progress, Completed)
   - Due Date
   - Creation Date

## Live Demo

Visit the live application at: [https://effortless-axolotl-4eb038.netlify.app](https://effortless-axolotl-4eb038.netlify.app)



## Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev)
- Styling powered by [Tailwind CSS](https://tailwindcss.com)
- Built with [Vite](https://vitejs.dev)
