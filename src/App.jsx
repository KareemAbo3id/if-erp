import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login.auth';
import AuthProvider, { useAuth } from './contexts/AuthProvider.context';
import Dashboard from './pages/Dashboard.page';
// import PrivateRoute from './hooks/PrivateRoute.hook';

function App() {
  const currentUser = useAuth();

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path={currentUser ? '/' : '/login'}
            element={currentUser ? <Dashboard /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
