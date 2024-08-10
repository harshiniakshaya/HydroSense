import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs, doc, getDoc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';

const employeeStatuses = ['Active', 'Inactive'];
const complaintStatuses = ['In Progress', 'Closed', 'Resolved'];
const roles = ['Water Leak Specialist', 'pH Level Analyst'];

const Employees = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [complaintStatusFilter, setComplaintStatusFilter] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    phone_number: '',
    role: '',
    status: 'Active',
    assignedComplaint: '',
    availability: true,
    complaintStatus: '',
  });

  const employeesCollectionRef = collection(db, 'employees');
  const complaintsCollectionRef = collection(db, 'complaints');

  const fetchEmployeeData = async () => {
    try {
      const employeeData = await getDocs(employeesCollectionRef);
      const employees = employeeData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const complaintsPromises = employees.map(async (employee) => {
        if (employee.assignedComplaint) {
          const complaintDoc = await getDoc(
            doc(complaintsCollectionRef, employee.assignedComplaint)
          );
          if (complaintDoc.exists()) {
            const complaintData = {
              ...complaintDoc.data(),
              id: complaintDoc.id,
            };
            return { ...employee, assignedComplaint: complaintData };
          } else {
            return { ...employee, assignedComplaint: null };
          }
        } else {
          return { ...employee, assignedComplaint: null };
        }
      });

      const combinedData = await Promise.all(complaintsPromises);
      setData(combinedData);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const filteredData = data
    .filter((employee) => {
      if (searchTerm) {
        const lowerSearchTerm = searchTerm.toLowerCase();
        return (
          employee.name.toLowerCase().includes(lowerSearchTerm) ||
          employee.phone_number.toString().includes(searchTerm) ||
          employee.role.toLowerCase().includes(lowerSearchTerm) ||
          employee.id.toLowerCase().includes(lowerSearchTerm) ||
          (employee.assignedComplaint &&
            employee.assignedComplaint.id.toLowerCase().includes(lowerSearchTerm))
        );
      }
      return true;
    })
    .filter((employee) =>
      selectedStatus ? employee.status === selectedStatus : true
    )
    .filter((employee) =>
      complaintStatusFilter
        ? employee.assignedComplaint &&
          employee.assignedComplaint.status === complaintStatusFilter
        : true
    );

  const getComplaintDetails = (complaint) =>
    complaint ? `${complaint.id}` : 'None';

  const handleCreateEmployee = async () => {
    try {
      await addDoc(employeesCollectionRef, newEmployee);
      setNewEmployee({
        name: '',
        phone_number: '',
        role: '',
        status: 'Active',
        assignedComplaint: '',
        availability: true,
      });
      setShowCreateModal(false);
      fetchEmployeeData();
    } catch (err) {
      console.error('Error creating employee:', err);
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await deleteDoc(doc(employeesCollectionRef, id));
      fetchEmployeeData();
    } catch (err) {
      console.error('Error deleting employee:', err);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const employeeDoc = doc(employeesCollectionRef, id);
      await updateDoc(employeeDoc, { status: newStatus });
      fetchEmployeeData();
    } catch (err) {
      console.error('Error updating employee status:', err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Employees</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded"
        />
      </div>

      <div className="mb-4 flex items-center space-x-4">
        <span className="mr-2">Filter By:</span>
        <div className="flex items-center">
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
        </div>

        <div className="flex items-center">
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
        </div>
      </div>

      <div className="mb-4">
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-green-700 text-white p-2 rounded"
        >
          Add Employee
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-[#004AAD] border-b border-gray-200 text-white">
          <tr>
            {[
              'id',
              'name',
              'phone_number',
              'role',
              'status',
              'availability',
              'assignedComplaint',
              'complaint status',
              'actions',
            ].map((header) => (
              <th key={header} className="p-3 text-left">
                {header.replace('_', ' ').toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((employee) => (
            <tr key={employee.id} className="border-b border-gray-200">
              <td className="p-3">{employee.id}</td>
              <td className="p-3">{employee.name}</td>
              <td className="p-3">{employee.phone_number}</td>
              <td className="p-3">{employee.role}</td>
              <td className="p-3">
                <select
                  value={employee.status}
                  onChange={(e) =>
                    handleStatusChange(employee.id, e.target.value)
                  }
                  className={`p-1 border rounded ${
                    employee.status === 'Active'
                      ? 'bg-green-700 text-white'
                      : 'bg-yellow-500 text-black'
                  }`}
                >
                  {employeeStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
              <td className="p-3">{employee.availability ? 'Yes' : 'No'}</td>
              <td className="p-3">
                {getComplaintDetails(employee.assignedComplaint)}
              </td>
              <td className="p-3">
                {employee.complaintStatus === '' ? 'None' : employee.complaintStatus}
              </td>
              <td className="p-3">
                <button
                  onClick={() => handleDeleteEmployee(employee.id)}
                  className="bg-red-700 text-white p-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Create Employee</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                value={newEmployee.name}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, name: e.target.value })
                }
                className="p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                placeholder="Phone Number"
                value={newEmployee.phone_number}
                onChange={(e) =>
                  setNewEmployee({
                    ...newEmployee,
                    phone_number: parseInt(e.target.value, 10),
                  })
                }
                className="p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <select
                value={newEmployee.role}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, role: e.target.value })
                }
                className="p-2 border rounded w-full"
              >
                <option value="">Select Role</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowCreateModal(false)}
                className="bg-gray-500 text-white p-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateEmployee}
                className="bg-green-700 text-white p-2 rounded"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;
