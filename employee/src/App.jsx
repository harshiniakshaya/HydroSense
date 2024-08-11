import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

import MyComponent from './components/SideNav';
import EmployeeDetails from './components/employeeDetails';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <MyComponent />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/employee-details" element={<EmployeeDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
