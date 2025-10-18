import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  // In a real application, you would check authentication status
  // For now, we'll use a simple prop
  return isAuthenticated ? children : <Navigate to="/admin" />;
};

export default ProtectedRoute;