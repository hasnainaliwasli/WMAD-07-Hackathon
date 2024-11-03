import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from './../customHooks/useAuth';

function ProtectedRoutes({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return null; 
  }

  return currentUser ? children : <Navigate to='/signin' />;
}

export default ProtectedRoutes;
