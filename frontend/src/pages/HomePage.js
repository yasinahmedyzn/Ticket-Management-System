import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Welcome to the Ticket Management System</h1>
    <Link to="/login">Login</Link>
  </div>
);

export default HomePage;
