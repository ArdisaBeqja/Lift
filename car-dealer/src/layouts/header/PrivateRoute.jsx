import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const adminUser = JSON.parse(localStorage.getItem('adminUser'));

  if (!adminUser) {
    // Not logged in, redirect to home (or /login if you want)
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
