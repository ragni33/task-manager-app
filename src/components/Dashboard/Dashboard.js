// src/components/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';


function Dashboard() {
  // Sample task data (you will replace this with actual data)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Task 1',
      description: 'Description for Task 1',
      dueDate: '2023-09-30',
      completed: false,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description for Task 2',
      dueDate: '2023-10-15',
      completed: false,
    },
    // Add more tasks as needed
  ]);

  // Function to toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="dashboard">
      <h2>Task Dashboard</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Due Date: {task.dueDate}</p>
            </div>
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <button>Add Task</button>
    </div>
  );
}

export default Dashboard;
