import { useEffect } from 'react';
import { getMeService } from '../services/users.service';
import { useAxiosPrivate } from '../hooks/useAxiosPrivate.hook';
export const Dashboard = () => {
  const AxiosPrivate = useAxiosPrivate();
  const getMe = async () => {
    console.log('UseEffect');
    const response = await AxiosPrivate.get('/api/users/me');
    console.log(response);
  };
  useEffect(() => {}, []);

  return (
    <div onClick={getMe} className='h-1/2 w-2/3 bg-slate-100'>
      DASHBOARD
    </div>
  );
};
