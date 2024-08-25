import React, { useState } from 'react';
import { createComplaint } from '../api/complaints';

const UserDashboard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createComplaint({ title, description });
      alert('Complaint submitted successfully!');
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error('Error submitting complaint', err);
    }
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Complaint Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Complaint Description"
          required
        ></textarea>
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default UserDashboard;