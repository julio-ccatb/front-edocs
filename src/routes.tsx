import { Route, Routes } from 'react-router-dom';
import CreateUserPage from './pages/auth/createUser.page';
import LogInPage from './pages/auth/login';
import HomeDashboardComponent from './pages/homeDashboard.page';
import { UserManagmentDashBoard } from './pages/userManagement.page';

const RouteList = () => {
  return (
    <Routes>
      <Route path='/user/auth/login' element={<LogInPage />} />
      <Route path='/home' element={<HomeDashboardComponent />} />

      {/* Admin pages */}
      <Route path='/accounts' element={<UserManagmentDashBoard />} />
      <Route path='/user/auth/create' element={<CreateUserPage />} />
      <Route element={<div>NotFound</div>} />
    </Routes>
  );
};

export default RouteList;
