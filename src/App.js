// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Dashboard />} />
          {/* Add more routes for other pages as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
