import { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { UserTable } from '../components/utils/userTable.component';
import { AuthContext } from '../context/auth.context';
import { useAxiosPrivate } from '../hooks/useAxiosPrivate.hook';
import { UserT } from '../models/user.model';
import { getUsersService } from '../services/users.service';

export const UserManagmentDashBoard = () => {
  const AxiosPrivate = useAxiosPrivate();

  const { user, setUser } = useContext(AuthContext);
  const [query, setQuery] = useState('');

  useEffect(() => {
    AxiosPrivate.get('/api/users/me').then(({ data }) => {
      const user: UserT = data;
      setUser(user);
    });
  }, []);

  useEffect(() => {
    console.log(query);
  }, [query]);

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

  const filters = Object.keys(user);

  const searchUser = () => {
    users?.map((user) => {});
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !users) return <div>No Data...</div>;

  return (
    <div className='overflow-hidden pt-4 flex fex flex-col w-full '>
      <div className='justify-center flex '>
        <input
          className='w-2/5 rounded-full border-none'
          type='text'
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <section className='m-6 p-6 rounded-md  flex flex-col justify-between bg-slate-100'>
        <div className='rounded-md w-full h-full sm:col-span-5 '>
          <div className='overflow-x-auto rounded-md'>
            <UserTable users={users} />
          </div>
        </div>
      </section>
    </div>
  );
};
