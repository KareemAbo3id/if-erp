/* eslint-disable object-curly-newline */
import React from 'react';
import { Alert, Button, Card, CardContent } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider.context';

export default function Dashboard() {
  const [error, setError] = React.useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <>
      <Card>
        <CardContent>
          <h2>Profile</h2>
          {error && (
            <Alert variant="filled" severity="error">
              {error}
            </Alert>
          )}
          <strong>Email:</strong>
          <p>{currentUser?.email}</p>
          <Link to="/update-profile">Update Profile</Link>
        </CardContent>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="contained" onClick={() => handleLogout()}>
          Log Out
        </Button>
      </div>
    </>
  );
}
