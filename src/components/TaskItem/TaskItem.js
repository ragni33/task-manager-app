// src/components/TaskItem/TaskItem.js
import React, { useEffect, useState } from 'react';
import './TaskItem.css';

function TaskItem() {
  const [savedTasks, setSavedTasks] = useState([]);

  useEffect(() => {
    // Retrieve saved tasks from localStorage
    const savedTaskData = JSON.parse(localStorage.getItem('savedTasks'));
    if (savedTaskData) {
      setSavedTasks(savedTaskData);
    }
  }, []);

  return (
    <section className='taskitem'>
      <div className='task-list'>
        <h2 style={{textAlign: 'center', color : 'white'}}>Saved Tasks</h2>
        <br />
        <ul>
          {savedTasks.map((task, index) => (
            <li key={index} className='task-item'>
              <strong>Task Title:</strong> {task.title}<br />
              <strong>Task Description:</strong> {task.description}<br />
              <strong>Due Date:</strong> {task.dueDate}<br />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TaskItem;
