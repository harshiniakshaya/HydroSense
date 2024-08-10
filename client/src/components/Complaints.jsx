import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

const statuses = ['Pending', 'In Progress', 'Resolved'];

const Complaints = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [imageToDisplay, setImageToDisplay] = useState('');

  const complaintsCollectionRef = collection(db, 'complaints');

  useEffect(() => {
    const getComplaints = async () => {
      try {
        const data = await getDocs(complaintsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(filteredData);
      } catch (err) {
        console.error('Error fetching documents: ', err);
      }
    };

    getComplaints();
  }, []);

  const handleStatusChange = async (index, newStatus) => {
    const updatedData = [...data];
    const complaintId = updatedData[index].id;

    updatedData[index].complaintStatus = newStatus;
    setData(updatedData);

    try {
      const complaintDocRef = doc(db, 'complaints', complaintId);
      await updateDoc(complaintDocRef, { complaintStatus: newStatus });
    } catch (err) {
      console.error('Error updating document: ', err);
    }
  };

  const handleImageClick = (url) => {
    setImageToDisplay(url);
    setDialogOpen(true);
  };

  const formatDate = (timestamp) => {
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(date);
  };

  const filteredData = data.filter((complaint) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      complaint.statement.toLowerCase().includes(lowerSearchTerm) ||
      complaint.name.toLowerCase().includes(lowerSearchTerm) ||
      complaint.phno.includes(searchTerm) ||
      formatDate(complaint.timestamp).toLowerCase().includes(lowerSearchTerm)
    );
  }).filter((complaint) =>
    selectedStatus ? complaint.complaintStatus === selectedStatus : true
  );

  const getStatusBackgroundColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-red-700';
      case 'In Progress':
        return 'bg-yellow-500';
      case 'Resolved':
        return 'bg-green-700';
      default:
        return '';
    }
  };

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
        <thead className="bg-[#004AAD] border-b border-gray-200 text-white">
          <tr>
            {['id', 'name', 'phone_number', 'complaint', 'timestamp', 'image', 'complaintStatus'].map((header) => (
              <th key={header} className="p-3 text-left">
                {header.replace('_', ' ').toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((complaint, index) => (
            <tr key={complaint.id} className="border-b border-gray-200">
              <td className="p-3">{complaint.id}</td>
              <td className="p-3">{complaint.name}</td>
              <td className="p-3">{complaint.phno}</td>
              <td className="p-3">{complaint.statement}</td>
              <td className="p-3">{formatDate(complaint.created_at)}</td>
              <td className="p-3">
                <button
                  onClick={() => handleImageClick(complaint.imageUrl)}
                  className="p-2 bg-blue-500 text-white rounded"
                >
                  View Image
                </button>
              </td>
              <td className="p-3">{complaint.statement}</td>
              <td className="p-3">
                <select
                  value={complaint.complaintStatus}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                  className={`p-2 border text-white rounded ${getStatusBackgroundColor(complaint.complaintStatus)}`}
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

      {dialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <img
              src={imageToDisplay}
              alt="Complaint"
              className="w-[500px] h-[500px] object-contain"
            />
            <button
              onClick={() => setDialogOpen(false)}
              className="mt-2 p-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Complaints;
