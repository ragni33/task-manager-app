import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
  const getTasksFromStorage = () => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  
  const [tasks, setTasks] = useState(getTasksFromStorage());

  const saveTasksToStorage = (updatedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const [showAddTask, setShowAddTask] = useState(false);

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
  });

  const handleTaskInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  const addTask = () => {
    if (newTask.title.trim() === '') {
      return;
    }

    const newTaskObject = {
      id: tasks.length + 1, // Assign a unique ID
      ...newTask,
      completed: false,
    };

    const updatedTasks = [...tasks, newTaskObject];
    setTasks(updatedTasks);
    setNewTask({ title: '', description: '', dueDate: '' }); 
    setShowAddTask(false); 
  };

  useEffect(() => {
    
    saveTasksToStorage(tasks);
  }, [tasks]);

  return (
  
    <div className="dashboard">
      <h1>Task Dashboard</h1>
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
      {showAddTask ? (
        <div className="task-item">
          <div className="task-input">
            <div className="task-input-col">
              <label>Task:</label>
              <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={newTask.title}
                onChange={handleTaskInputChange}
                style={{ width: '100%', marginBottom: '10px', padding: '5px' }} // Add CSS styles here
              />
            </div>
            <div className="task-input-col">
              <label>Description for Task:</label>
              <input
                type="text"
                name="description"
                placeholder="Description for Task"
                value={newTask.description}
                onChange={handleTaskInputChange}
                style={{ width: '100%', marginBottom: '10px', padding: '5px' }} // Add CSS styles here
              />
            </div>
            <div className="task-input-col">
  <label>Due Date:</label>
  <input
    type="date" // Change the input type to "date"
    name="dueDate"
    value={newTask.dueDate}
    onChange={handleTaskInputChange}
    style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
  />
</div>

          </div>
          <div className="task-buttons">
            <button onClick={addTask}>Add</button>
          </div>
        </div>
      ) : (
        <button onClick={toggleAddTask} className='addtask' style={{marginLeft : "30%"}}>Add Task</button>
      )}
    </div>
  );
}

export default Dashboard;
