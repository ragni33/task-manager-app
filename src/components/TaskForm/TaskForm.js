// src/components/TaskForm/TaskForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './TaskForm.css';

function TaskForm() {
  const navigate = useNavigate();
  const { taskId } = useParams();

  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    completed: false,
  });

  const [savedTasks, setSavedTasks] = useState([]); // State for saved tasks
  const [showSavedTask, setShowSavedTask] = useState(false); // State to control visibility

  useEffect(() => {
    if (taskId) {
      // Fetch the task data using taskId (you'll need to implement this)
      const fetchedTask = {}; // Replace with your data fetching logic
      setTask(fetchedTask);
    } else {
      // Check localStorage for saved tasks
      const savedTaskData = JSON.parse(localStorage.getItem('savedTasks'));
      if (savedTaskData) {
        setSavedTasks(savedTaskData);
        setShowSavedTask(true);
      }
    }
  }, [taskId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setTask({ ...task, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a copy of the existing saved tasks and add the new task
    const updatedTasks = [...savedTasks, task];

    // Save the updated tasks to localStorage
    localStorage.setItem('savedTasks', JSON.stringify(updatedTasks));

    // Update the state with the new tasks
    setSavedTasks(updatedTasks);

    // Clear the form inputs
    setTask({
      title: '',
      description: '',
      dueDate: '',
      completed: false,
    });

    // Show the saved task
    setShowSavedTask(true);
  };

  const handleDeleteSavedTask = (index) => {
    // Create a copy of the existing saved tasks and remove the task at the specified index
    const updatedTasks = [...savedTasks];
    updatedTasks.splice(index, 1);

    // Save the updated tasks to localStorage
    localStorage.setItem('savedTasks', JSON.stringify(updatedTasks));

    // Update the state with the new tasks
    setSavedTasks(updatedTasks);
  };

  return (
    <section>
      <div className="task-form">
        <h2>{taskId ? 'Edit Task' : 'Add Task'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Task Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={task.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Task Description:</label>
            <textarea
              id="description"
              name="description"
              value={task.description}
              onChange={handleInputChange}
              rows="4"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due Date:</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={task.dueDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="completed"
                checked={task.completed}
                onChange={handleCheckboxChange}
              />
              Completed
            </label>
          </div>
          <div className="form-actions">
            <button type="submit">
              {taskId ? 'Update Task' : 'Save Task'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/home')}
              style={{ marginLeft: "1px" }}
            >
              Cancel
            </button>
           
            <button
              type="button"
              onClick={() => {
                // Clear the form inputs
                setTask({
                  title: '',
                  description: '',
                  dueDate: '',
                  completed: false,
                });
              }}
              style={{ marginLeft: "1px" }}
            >
              Add New Task
            </button>
          </div>
        </form>
      </div>

      {/* Display saved tasks if they exist and showSavedTask is true */}
      <div>
        {showSavedTask && (
          <div className="saved-task">
            <h3>Saved Tasks</h3>
            <ul>
              {savedTasks.map((savedTask, index) => (
                <li key={index}>
                  <strong>Task Title:</strong> {savedTask.title}<br />
                  <strong>Task Description:</strong> {savedTask.description}<br />
                  <strong>Due Date:</strong> {savedTask.dueDate}<br />
                  <button onClick={() => handleDeleteSavedTask(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default TaskForm;
