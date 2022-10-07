import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth.context';
import { useAxiosPrivate } from '../hooks/useAxiosPrivate.hook';
import { UserT } from '../models/user.model';
export const Dashboard = () => {
  const AxiosPrivate = useAxiosPrivate();

  const { user, setUser } = useContext(AuthContext);

  const getMe = async () => {};
  useEffect(() => {
    AxiosPrivate.get('/api/users/me').then(({ data }) => {
      const user: UserT = data;
      setUser(user);
    });
  }, []);

  return (
    <div className=''>
      <nav className='flex items-center justify-between bg-slate-100'>
        <h1 className='text-6xl inline-block flex-none   font-mono font-bold'>
          E-DOCS
        </h1>

        <div className='flex space-x-4 p-2'>
          <div className='flex  px-6 py-2 rounded-full bg-slate-200 flex-col text-right hover:text-neutral-600 hover:cursor-pointer'>
            <a className='font-bold text-md'>{user.name}</a>
            <p className='font-bold text-sm'>{user.lastname}</p>
          </div>
          <div className='h-16 w-16 rounded-full bg-red-500 m-auto'></div>
        </div>
      </nav>
      <section className='m-6 rounded-md h-full grid place-items-center items-center justify-between bg-slate-100'>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
        <div>fhs</div>
      </section>
    </div>
  );
};
