import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../../hooks/auth.hook';
const RequireAuth = (props: { allawedRoles: number }) => {
  const { user } = useAuth();
  const location = useLocation();

  return user?.id_type <= props.allawedRoles ? (
    <Outlet />
  ) : user ? (
    <Navigate to='unathorized' state={{ from: location }} replace />
  ) : (
    <Navigate to='auth/login' state={{ from: location }} replace />
  );
};

export default RequireAuth;
