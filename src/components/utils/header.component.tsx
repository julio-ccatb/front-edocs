import { UserT } from '../../models/user.model';
import { useEffect, useContext } from 'react';
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate.hook';
import AuthContext from '../../context/auth.provider';

export const HeaderComponent = () => {
  const AxiosPrivate = useAxiosPrivate();
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    AxiosPrivate.get('/api/users/me').then(({ data }) => {
      const user: UserT = data;
      setUser(user);
    });
  }, []);

  return (
    <nav className='flex items-center justify-between bg-slate-100'>
      <h1 className='sm:hidden-2xl text-6xl pl-4 inline-block flex-none   font-mono font-bold'>
        E-DOCS
      </h1>

      <span className='mr-4 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max'>
        <span className='flex items-center px-3 py-2'>{user.name}</span>
        <img
          className='rounded-full w-9 h-9 max-w-none'
          alt={`${user.name}`}
          src='https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg'
        />
      </span>
    </nav>
  );
};
