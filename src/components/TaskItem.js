import React from 'react';
import api from '../api';

const TaskItem = ({ task, refreshTasks }) => {
  const toggleTask = async () => {
    try {
      await api.patch(`/tasks/${task._id}/toggle`);
      refreshTasks();
    } catch (err) {
      console.error('Error toggling task', err);
    }
  };

  const deleteTask = async () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${task.title}"?`);
    if (!confirmDelete) return;

    try {
      await api.delete(`/tasks/${task._id}`);
      refreshTasks();
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-2 shadow-sm">
      <p
        onClick={toggleTask}
        className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
      >
        {task.title}
      </p>
      <button
        onClick={deleteTask}
        className="text-red-500 hover:text-red-700 transition"
      >
        ❌
      </button>
    </div>
  );
};

export default TaskItem;

