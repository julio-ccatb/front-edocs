import { Outlet } from 'react-router';
import { useState, useContext } from 'react';
import AuthContext from '../../context/auth.provider';

const PersistLogin = () => {
  const [isLoading, SetIsLoading] = useState(true);
  const { credentials } = useContext(AuthContext);

  return <></>;
};

export default PersistLogin;
