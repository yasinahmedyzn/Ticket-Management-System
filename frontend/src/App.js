import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={<HomePage />} />
        <Route path="/login" component={<LoginPage />} />
        <Route path="/user-dashboard" component={<UserDashboard />} />
        <Route path="/admin-dashboard" component={<AdminDashboard />} />
        <Route component={NotFoundPage} />
      </Routes>
    </Router>
  );
}

export default App;
