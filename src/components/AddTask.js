import React, { useState } from 'react';
import api from '../api';

const AddTask = ({ refreshTasks }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    try {
      await api.post('/tasks', { title });
      setTitle('');
      refreshTasks();  // Reload tasks after adding
    } catch (err) {
      console.error('Error adding task', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;

