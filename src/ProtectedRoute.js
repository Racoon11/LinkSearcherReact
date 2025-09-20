import React from 'react';
import { Navigate } from 'react-router-dom';
import { validateToken, getToken } from './auth.js';

export function ProtectedRoute({ children }) {
  const token = getToken();
  const validation = validateToken(token);

  if (!token || !validation.isValid) {
    return <Navigate to="/login" replace />;
  }

  if (validation.expired) {
    alert('Ваша сессия истекла. Пожалуйста, войдите снова.');
    window.location.href = '/login'; // принудительный редирект
    return null;
  }

  return children;
}