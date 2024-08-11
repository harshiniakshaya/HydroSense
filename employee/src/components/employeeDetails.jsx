import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const complaintStatuses = ['In Progress', 'Resolved'];

const EmployeeDetails = () => {
  const location = useLocation();
  const employee = location.state?.employee || {};
  const [complaint, setComplaint] = useState(null);
  const [error, setError] = useState('');
  const [newStatus, setNewStatus] = useState('');

  const fetchComplaint = async () => {
    if (employee.assignedComplaint) {
      try {
        const complaintDocRef = doc(db, 'complaints', employee.assignedComplaint);
        const complaintDoc = await getDoc(complaintDocRef);

        if (complaintDoc.exists()) {
          setComplaint(complaintDoc.data());
        } else {
          setError('Assigned complaint not found.');
        }
      } catch (err) {
        console.error('Error fetching complaint:', err);
        setError('Error fetching complaint details.');
      }
    }
  };

  useEffect(() => {
    fetchComplaint();
  }, [employee.assignedComplaint]);

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    setNewStatus(newStatus);

    if (complaint) {
      try {
        const complaintDocRef = doc(db, 'complaints', employee.assignedComplaint);
        await updateDoc(complaintDocRef, { complaintStatus: newStatus });
        setComplaint({ ...complaint, complaintStatus: newStatus });
        setError('');
      } catch (err) {
        console.error('Error updating complaint status:', err);
        setError('Error updating complaint status.');
      }
    }
  };

  const handleRefreshClick = () => {
    fetchComplaint();
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 pt-[100px] bg-gray-100">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Employee Details</h2>
        
        <div className="mb-6 border-b pb-4">
          <div className="mb-2">
            <strong>Name:</strong> {employee.name}
          </div>
          <div className="mb-2">
            <strong>Role:</strong> {employee.role}
          </div>
          <div className="mb-2">
            <strong>Phone Number:</strong> {employee.phone_number}
          </div>
          <div className="mb-2">
            <strong>Status:</strong> {employee.status}
          </div>
          <div className="mb-2">
            <strong>Availability:</strong> {employee.availability ? 'Yes' : 'No'}
          </div>
          <div className="mb-4">
            <strong>Assigned Complaint:</strong> {employee.assignedComplaint || 'None'}
          </div>
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        {complaint && (
          <div className="mt-4 bg-[#004bad] p-5 rounded-2xl text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Complaint Details</h3>
            <div className="mb-2">
              <strong>Name:</strong> {complaint.name}
            </div>
            <div className="mb-2">
              <strong>Phone Number:</strong> {complaint.phone}
            </div>
            <div className="mb-2">
              <strong>Complaint:</strong> {complaint.statement}
            </div>
            <div className="mb-2">
              <strong>Timestamp:</strong>{' '}
              {new Date(complaint.timestamp?.seconds * 1000).toLocaleString()}
            </div>
            <div className="mb-2">
              <strong>Status:</strong>{' '}
              <select
                value={complaint.complaintStatus || newStatus}
                onChange={handleStatusChange}
                className="border p-1 rounded w-full bg-white text-[#004bad] font-semibold"
              >
                <option value="">Select Status</option>
                {complaintStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <button
          onClick={handleRefreshClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default EmployeeDetails;
