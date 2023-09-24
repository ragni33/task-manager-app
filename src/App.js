import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import TaskForm from './components/TaskForm/TaskForm';
import TaskItem from './components/TaskItem/TaskItem';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
       x
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/taskform" element={<TaskForm />} />
          <Route path="/taskitem" element={<TaskItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
