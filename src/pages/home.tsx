import { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import MenuComponent from '../components/menu.component';
import { HeaderComponent } from '../components/utils/header.component';
import { OptionComponent } from '../components/utils/options.components';
import { UserTableRow } from '../components/utils/userTableRow.component';
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

  const axiosPrivate = useAxiosPrivate();

  const { data } = useQuery(['users'], async () => {
    const res = await axiosPrivate.get('/users');
    console.log(res);
    return res;
  });

  if (data) return <div>Data</div>;
  return (
    <div className='overflow-hidden'>
      <HeaderComponent user={user} />
      <section className='m-6 p-6 rounded-md  flex flex-col justify-between bg-slate-100 sm:grid sm:grid-cols-6 sm:gap-4 '>
        <MenuComponent />
        <div className='rounded-md w-full h-full sm:col-span-5 '>
          <div className='overflow-x-auto rounded-md'>
            <table className='text-sm text-left text-slate-500 w-full'>
              <thead className='text-xs text-gray-700 uppercase bg-slate-200'>
                <tr>
                  <th scope='col' className='py-3 px-6'>
                    ID
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    Name
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    Lastname
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    Email
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    platforms
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    Selected
                  </th>
                </tr>
              </thead>
              <tbody>
                <UserTableRow user={user} />
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
