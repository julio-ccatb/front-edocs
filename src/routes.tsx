import { Route, Routes } from 'react-router-dom';
import LogInPage from './pages/auth/login';
import HomeDashboardComponent from './pages/homeDashboard.page';
import { UserManagmentDashBoard } from './pages/userManagement.page';

const RouteList = () => {
  return (
    <Routes>
      <Route path='/auth/login' element={<LogInPage />} />
      <Route path='/home' element={<HomeDashboardComponent />} />
      <Route path='/dashboard/users' element={<UserManagmentDashBoard />} />
      {/* <Route path='/auth/register' element={<RegisterPage />} /> */}
      <Route element={<div>NotFound</div>} />
    </Routes>
  );
};

export default RouteList;
