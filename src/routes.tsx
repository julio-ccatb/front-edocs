import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LogInPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import { Dashboard } from './pages/home';

const RouteList = () => {
  return (
    <Routes>
      <Route path='/auth/login' element={<LogInPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      {/* <Route path='/auth/register' element={<RegisterPage />} /> */}
      <Route element={<div>NotFound</div>} />
    </Routes>
  );
};

export default RouteList;
