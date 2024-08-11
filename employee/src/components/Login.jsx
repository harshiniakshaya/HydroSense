import React, { useState } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const employeesCollectionRef = collection(db, 'employees');
      const q = query(employeesCollectionRef, where('name', '==', name));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const employee = querySnapshot.docs[0].data();
        if (employee.name === password) {
          navigate('/employee-details', { state: { employee } });
          setError('');
        } else {
          setError('Invalid name or password');
        }
      } else {
        setError('Invalid name or password');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('An error occurred during login');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white p-2 rounded w-full"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
