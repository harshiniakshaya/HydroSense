import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyComponent from './components/SideNav';
import Complaints from './components/Complaints';
import Overview from './components/Overview';  // Import other components
import Employees from './components/Employees'; // Import other components





const Pages = () => {
  return (
    <Router>
      <MyComponent />
      <main className="ml-64 mt-16 p-4 w-full h-full">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </main>
    </Router>
  );
}

export default Pages;
