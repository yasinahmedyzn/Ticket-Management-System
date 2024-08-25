import axios from 'axios';

const API_URL = 'http://localhost:5000/api/complaints';

export const getComplaints = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

export const createComplaint = async (complaintData) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(API_URL, complaintData, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

export const updateComplaint = async (id, updateData) => {
  const token = localStorage.getItem('token');
  const response = await axios.put(`${API_URL}/${id}`, updateData, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};
