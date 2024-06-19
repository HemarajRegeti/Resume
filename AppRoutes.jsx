import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login"><i class="fa-solid fa-user"></i>Login</Link>
            </li>
            <li>
              <Link to="/register"><i class="fa-solid fa-right-to-bracket"></i>Register</Link>
            </li>
            <li>
              <Link to="/forgot-password">Forgot Password</Link> {/* Corrected path for ForgotPassword */}
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
