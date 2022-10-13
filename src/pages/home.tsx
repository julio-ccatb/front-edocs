import { useContext, useEffect } from 'react';
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

  return (
    <div className='overflow-hidden'>
      <HeaderComponent user={user} />
      <section className='m-6 p-6 rounded-md   max-w-sm  justify-between bg-slate-100 sm:flex-row'>
        <MenuComponent />
        <div className='rounded-md h-full grow  '>
          <div className='overflow-x-auto rounded-md max-w-sm'>
            <table className='w-full text-sm text-left text-slate-500 '>
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
