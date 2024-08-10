import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
} from 'recharts';
import { db } from '../config/firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

const Overview = () => {
  const [complaintsData, setComplaintsData] = useState([]);
  const [employeesData, setEmployeesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const complaintsQuery = query(collection(db, 'complaints'), orderBy('timestamp', 'desc'), limit(5));
        const employeesQuery = query(collection(db, 'employees'));

        const [complaintsSnapshot, employeesSnapshot] = await Promise.all([
          getDocs(complaintsQuery),
          getDocs(employeesQuery),
        ]);

        setComplaintsData(
          complaintsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );

        setEmployeesData(
          employeesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getTotalComplaints = complaintsData.length;

  const getComplaintCountsByStatus = complaintsData.reduce(
    (counts, { complaint_status }) => {
      counts[complaint_status] = (counts[complaint_status] || 0) + 1;
      return counts;
    },
    { Pending: 0, 'In Progress': 0, Resolved: 0, Closed: 0 }
  );

  const getEmployeeCounts = employeesData.reduce(
    (counts, { status }) => {
      counts[status] = (counts[status] || 0) + 1;
      return counts;
    },
    { Active: 0, Inactive: 0 }
  );

  const getComplaintsByDay = complaintsData.reduce((counts, { timestamp }) => {
    const date = timestamp.toDate().toLocaleDateString();
    counts[date] = (counts[date] || 0) + 1;
    return counts;
  }, {});

  const complaintCountsByStatus = getComplaintCountsByStatus;
  const employeeCounts = getEmployeeCounts;
  const complaintsByDay = Object.entries(getComplaintsByDay).map(
    ([date, count]) => ({ date, count })
  );

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-full">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">
        Overview
      </h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-700">
              Dashboard Summary
            </h2>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 aspect-w-1 aspect-h-1">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-medium text-gray-700">
                    Total Complaints
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {getTotalComplaints}
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 aspect-w-1 aspect-h-1">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-medium text-gray-700">
                    Total Employees
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {employeesData.length}
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center w-full sm:w-1/2 lg:w-1/3">
                <h3 className="text-lg font-medium text-gray-700">
                  Complaints by Status
                </h3>
                <div className="w-full max-w-xs sm:max-w-md">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={Object.entries(complaintCountsByStatus).map(
                          ([status, count]) => ({
                            name: status,
                            value: count,
                          })
                        )}
                        dataKey="value"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      >
                        {Object.keys(complaintCountsByStatus).map(
                          (status, index) => (
                            <Cell
                              key={status}
                              fill={[
                                '#0088FE',
                                '#00C49F',
                                '#FFBB28',
                                '#FF8042',
                              ][index]}
                            />
                          )
                        )}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center w-full sm:w-1/2 lg:w-1/3">
                <h3 className="text-lg font-medium text-gray-700">
                  Employee Status
                </h3>
                <div className="w-full max-w-xs sm:max-w-md">
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart
                      data={Object.entries(employeeCounts).map(([status, count]) => ({
                        name: status,
                        count,
                      }))}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count">
                        {Object.keys(employeeCounts).map((status, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={status === 'Active' ? '#008000' : '#ffbb28'}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6 lg:max-w-5xl">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-700">
              Recent Complaints
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-100 border-b border-gray-200">
                  <tr>
                    {[
                      'ID',
                      'Name',
                      'Phone Number',
                      'Timestamp',
                      'Status',
                    ].map((header) => (
                      <th
                        key={header}
                        className="p-3 text-left text-gray-700 font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {complaintsData.map((complaint) => (
                    <tr key={complaint.id} className="border-b border-gray-200">
                      <td className="p-3 text-gray-600">{complaint.id}</td>
                      <td className="p-3 text-gray-600">{complaint.name}</td>
                      <td className="p-3 text-gray-600">{complaint.phone}</td>
                      <td className="p-3 text-gray-600">
                        {complaint.timestamp.toDate().toLocaleString()}
                      </td>
                      <td className="p-3 text-gray-600">
                        {complaint.complaint_status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-700">
              Complaint Trend
            </h2>
            <div className="w-full">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={complaintsByDay}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="count" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Overview;
