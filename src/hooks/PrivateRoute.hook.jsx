/* eslint-disable no-useless-rename */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider.context';

export default function PrivateRoute({ element: element, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        currentUser ? <element {...props} /> : <Navigate to="/login" />;
      }}
    />
  );
}
