import React, { useState } from 'react';
import { complaintsData } from "../data/data";

const statuses = ['Resolved', 'Pending', 'In Progress', 'Closed'];

const Complaints = () => {
  const [data, setData] = useState(complaintsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusChange = (index, newStatus) => {
    const updatedData = [...data];
    updatedData[index].status = newStatus;
    setData(updatedData);
  };

  const filteredData = data
    .filter((complaint) => {
      const lowerSearchTerm = searchTerm.toLowerCase();
      return (
        complaint.complaint_id.toLowerCase().includes(lowerSearchTerm) ||
        complaint.name.toLowerCase().includes(lowerSearchTerm) ||
        complaint.phone_number.includes(searchTerm) ||
        complaint.sensor_id.toLowerCase().includes(lowerSearchTerm) ||
        complaint.location.toLowerCase().includes(lowerSearchTerm) ||
        complaint.timestamp.includes(searchTerm) ||
        complaint.employee_id.toLowerCase().includes(lowerSearchTerm) ||
        complaint.employee_name.toLowerCase().includes(lowerSearchTerm)
      );
    })
    .filter((complaint) => 
      selectedStatus ? complaint.status === selectedStatus : true
    );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Complaints</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="mr-2">Filter by Status:</label>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            {['complaint_id', 'sno', 'name', 'phone_number', 'sensor_id', 'location', 'timestamp', 'employee_id', 'employee_name', 'status'].map((header) => (
              <th key={header} className="p-3 text-left">
                {header.replace('_', ' ').toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((complaint, index) => (
            <tr key={complaint.complaint_id} className="border-b border-gray-200">
              <td className="p-3">{complaint.complaint_id}</td>
              <td className="p-3">{complaint.sno}</td>
              <td className="p-3">{complaint.name}</td>
              <td className="p-3">{complaint.phone_number}</td>
              <td className="p-3">{complaint.sensor_id}</td>
              <td className="p-3">{complaint.location}</td>
              <td className="p-3">{complaint.timestamp}</td>
              <td className="p-3">{complaint.employee_id}</td>
              <td className="p-3">{complaint.employee_name}</td>
              <td className="p-3">
                <select
                  value={complaint.status}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                  className="p-1 border rounded"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Complaints;
