import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { complaintsData, employeesData } from '../data/data';

const complaintStatuses = ['Resolved', 'Pending', 'In Progress', 'Closed'];
const employeeStatuses = ['Active', 'Inactive'];


const getTotalComplaints = () => complaintsData.length;

const getComplaintCountsByStatus = () => {
  const counts = { Pending: 0, 'In Progress': 0, Resolved: 0, Closed: 0 };
  complaintsData.forEach(complaint => {
    counts[complaint.status]++;
  });
  return counts;
};

const getEmployeeCounts = () => {
  const counts = { Active: 0, Inactive: 0 };
  employeesData.forEach(employee => {
    counts[employee.status]++;
  });
  return counts;
};

const getRecentComplaints = () => complaintsData.slice(-5);

const getComplaintsByDay = () => {
  const counts = {};
  complaintsData.forEach(complaint => {
    const date = complaint.timestamp.split(' ')[0];
    counts[date] = (counts[date] || 0) + 1;
  });
  return Object.entries(counts).map(([date, count]) => ({ date, count }));
};

const Overview = () => {
  const totalComplaints = getTotalComplaints();
  const complaintCountsByStatus = getComplaintCountsByStatus();
  const employeeCounts = getEmployeeCounts();
  const recentComplaints = getRecentComplaints();
  const complaintsByDay = getComplaintsByDay();

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-full">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">Overview</h1>
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-700">Dashboard Summary</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 aspect-w-1 aspect-h-1">
            <div className="flex flex-col items-center justify-center h-full">
              <h3 className="text-lg font-medium text-gray-700">Total Complaints</h3>
              <p className="text-2xl font-semibold text-gray-900">{totalComplaints}</p>
            </div>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 aspect-w-1 aspect-h-1">
            <div className="flex flex-col items-center justify-center h-full">
              <h3 className="text-lg font-medium text-gray-700">Total Employees</h3>
              <p className="text-2xl font-semibold text-gray-900">{employeesData.length}</p>
            </div>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-lg font-medium text-gray-700">Complaints by Status</h3>
            <div className="w-full max-w-xs sm:max-w-md">
              <PieChart width={250} height={200}>
                <Pie
                  data={Object.entries(complaintCountsByStatus).map(([status, count]) => ({ name: status, value: count }))}
                  dataKey="value"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {Object.keys(complaintCountsByStatus).map((status, index) => (
                    <Cell key={status} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-lg font-medium text-gray-700">Employee Status</h3>
            <div className="w-full max-w-xs sm:max-w-md">
              <BarChart width={250} height={200} data={Object.entries(employeeCounts).map(([status, count]) => ({ name: status, count }))}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 lg:max-w-5xl">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-700">Recent Complaints</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                {['ID', 'Name', 'Location', 'Timestamp', 'Status'].map((header) => (
                  <th key={header} className="p-3 text-left text-gray-700 font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentComplaints.map((complaint) => (
                <tr key={complaint.complaint_id} className="border-b border-gray-200">
                  <td className="p-3 text-gray-600">{complaint.complaint_id}</td>
                  <td className="p-3 text-gray-600">{complaint.name}</td>
                  <td className="p-3 text-gray-600">{complaint.location}</td>
                  <td className="p-3 text-gray-600">{complaint.timestamp}</td>
                  <td className="p-3 text-gray-600">{complaint.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-700">Complaints Trend</h2>
        <div className="w-full max-w-4xl mx-auto">
          <LineChart width={600} height={300} data={complaintsByDay}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#8884d8" dot={{ stroke: '#8884d8', strokeWidth: 2 }} />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Overview;
