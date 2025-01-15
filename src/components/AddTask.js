import React, { useState } from 'react';
import api from '../api';

const AddTask = ({ refreshTasks }) => {
  const [title, setTitle] = useState('');

  const addTask = async () => {
    if (!title.trim()) return;
    try {
      await api.post('/tasks', { title });
      setTitle('');
      refreshTasks();
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={addTask}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;

