import { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import MenuComponent from '../components/menu.component';
import { HeaderComponent } from '../components/utils/header.component';
import { UserTable } from '../components/utils/userTable.component';
import { UserTableRow } from '../components/utils/userTableRow.component';
import { AuthContext } from '../context/auth.context';
import { useAxiosPrivate } from '../hooks/useAxiosPrivate.hook';
import { UserT } from '../models/user.model';
import { getUsersService } from '../services/users.service';

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

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery(['users'], async () => {
    const res = await getUsersService(AxiosPrivate);
    // console.log(res);
    return res as UserT[];
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !users) return <div>No Data...</div>;

  return (
    <div className='overflow-hidden'>
      <HeaderComponent user={user} />
      <section className='m-6 p-6 rounded-md  flex flex-col justify-between bg-slate-100 sm:grid sm:grid-cols-6 sm:gap-4 '>
        <MenuComponent />
        <div className='rounded-md w-full h-full sm:col-span-5 '>
          <div className='overflow-x-auto rounded-md'>
            <UserTable users={users} />
          </div>
        </div>
      </section>
    </div>
  );
};
