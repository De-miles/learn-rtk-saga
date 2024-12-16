import * as React from 'react';
import { Route } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  // Check if user is logged in
  // If yes, show route
  // Otherwise, redirect to login page
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoggedIn) return <Route path="/login" />;

  return children;
}
