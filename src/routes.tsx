import { Outlet, Route, Routes } from 'react-router-dom';
import Layout from './components/layout.component';
import SideBarComponent from './components/SideBar.component';
import CreateUserPage from './pages/auth/createUser.page';
import LogInPage from './pages/auth/login';
import HomeDashboardComponent from './pages/homeDashboard.page';
import { UserManagmentDashBoard } from './pages/userManagement.page';

const RouteList = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='auth/login' element={<LogInPage />} />

        {/* Admin pages */}
        <Route
          element={
            <div className='flex '>
              <SideBarComponent />
              <Outlet />
            </div>
          }
        >
          <Route path='home' element={<HomeDashboardComponent />} />
          <Route path='accounts' element={<UserManagmentDashBoard />} />
          <Route path='user/auth/create' element={<CreateUserPage />} />
          <Route path='*' element={<div>NotFound</div>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RouteList;
