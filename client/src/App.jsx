import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyComponent from './components/SideNav';
import Complaints from './components/Complaints';
import Overview from './components/Overview'; 
import Employees from './components/Employees';




const App = () => {
  return (
    <Router>
      <MyComponent />
      <main className="ml-64 mt-16 p-4 w-full h-full">
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
