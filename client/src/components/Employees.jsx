import React, { useState } from 'react';
import { employeesData, complaintsData } from '../data/data';

const employeeStatuses = ['Active', 'Inactive'];
const complaintStatuses = ['Resolved', 'Pending', 'In Progress', 'Closed'];

const Employees = () => {
  const [data, setData] = useState(employeesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [complaintStatusFilter, setComplaintStatusFilter] = useState('');

  const [filters, setFilters] = useState({
    search: true,
    employeeStatus: false,
    complaintStatus: false,
  });

  const handleStatusChange = (index, newStatus) => {
    const updatedData = [...data];
    updatedData[index].status = newStatus;
    setData(updatedData);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const filteredData = data
    .filter((employee) => {
      if (filters.search && searchTerm) {
        const lowerSearchTerm = searchTerm.toLowerCase();
        return (
          employee.name.toLowerCase().includes(lowerSearchTerm) ||
          employee.phone_number.includes(searchTerm) ||
          employee.role.toLowerCase().includes(lowerSearchTerm) ||
          employee.id.toLowerCase().includes(lowerSearchTerm) ||
          employee.assignedComplaints.some(complaintId =>
            complaintId.toLowerCase().includes(lowerSearchTerm)
          )
        );
      }
      return true;
    })
    .filter((employee) => {
      if (filters.employeeStatus && selectedStatus) {
        return employee.status === selectedStatus;
      }
      return true;
    })
    .filter((employee) => {
      if (filters.complaintStatus && complaintStatusFilter) {
        return employee.assignedComplaints.some(complaintId => {
          const complaint = complaintsData.find(c => c.complaint_id === complaintId);
          return complaint && complaint.status === complaintStatusFilter;
        });
      }
      return true;
    });

  const getComplaintDetails = (complaintId) => {
    const complaint = complaintsData.find(c => c.complaint_id === complaintId);
    return complaint ? `${complaint.complaint_id}: ${complaint.status}` : 'Unknown';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Employees</h1>
      
      {filters.search && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
      )}

      <div className="mb-4 flex items-center space-x-4">
        <span className="mr-2">Filter By:</span>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={filters.complaintStatus}
            onChange={() => handleFilterChange('complaintStatus', !filters.complaintStatus)}
            className="mr-2"
          />
          <span className="mr-2">Complaint Status</span>
          {filters.complaintStatus && (
            <select
              value={complaintStatusFilter}
              onChange={(e) => setComplaintStatusFilter(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="">All Complaints</option>
              {complaintStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={filters.employeeStatus}
            onChange={() => handleFilterChange('employeeStatus', !filters.employeeStatus)}
            className="mr-2"
          />
          <span className="mr-2">Employee Status</span>
          {filters.employeeStatus && (
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="">All</option>
              {employeeStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            {['id', 'name', 'phone_number', 'role', 'status', 'assignedComplaints'].map((header) => (
              <th key={header} className="p-3 text-left">
                {header.replace('_', ' ').toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((employee, index) => (
            <tr key={employee.id} className="border-b border-gray-200">
              <td className="p-3">{employee.id}</td>
              <td className="p-3">{employee.name}</td>
              <td className="p-3">{employee.phone_number}</td>
              <td className="p-3">{employee.role}</td>
              <td className="p-3">
                <select
                  value={employee.status}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                  className="p-1 border rounded"
                >
                  {employeeStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
              <td className="p-3">
                {employee.assignedComplaints.length > 0
                  ? employee.assignedComplaints.map(complaintId => (
                      <div key={complaintId}>
                        {getComplaintDetails(complaintId)}
                      </div>
                    ))
                  : 'None'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
