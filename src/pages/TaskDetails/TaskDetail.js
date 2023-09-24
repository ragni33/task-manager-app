
import React from 'react';

function TaskDetail({ task, onDelete }) {
  return (
    <div className="task-detail">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskDetail;
