import React, { useState, useEffect } from 'react';
import { getComplaints, updateComplaint } from '../api/complaints';

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const data = await getComplaints();
      setComplaints(data);
    };

    fetchComplaints();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateComplaint(id, { status });
      setComplaints(complaints.map(complaint => complaint._id === id ? { ...complaint, status } : complaint));
    } catch (err) {
      console.error('Error updating complaint status', err);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {complaints.map(complaint => (
          <li key={complaint._id}>
            <h2>{complaint.title}</h2>
            <p>{complaint.description}</p>
            <select
              value={complaint.status}
              onChange={(e) => handleStatusChange(complaint._id, e.target.value)}
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
