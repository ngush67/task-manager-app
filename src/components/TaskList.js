import React, { useEffect, useState } from 'react';
import api from '../api';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // ✅ Fetch tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Your Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} className="mb-2">
            <TaskItem task={task} refreshTasks={fetchTasks} />
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;

