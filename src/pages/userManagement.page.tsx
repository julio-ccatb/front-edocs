import { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { UserTable } from '../components/utils/userTable.component';
import { AuthContext } from '../context/auth.context';
import { useAxiosPrivate } from '../hooks/useAxiosPrivate.hook';
import { useUserList } from '../hooks/users.hook';
import { UserT } from '../models/user.model';
import { getUsersService } from '../services/users.service';

export const UserManagmentDashBoard = () => {
  const AxiosPrivate = useAxiosPrivate();

  const { user, setUser } = useContext(AuthContext);
  const [query, setQuery] = useState('');
  const [copyUsers, setCopyUsers] = useState([] as UserT[]);
  const { userList, addUser, deleteUser } = useUserList();

  useEffect(() => {
    AxiosPrivate.get('/api/users/me').then(({ data }) => {
      const user: UserT = data;
      setUser(user);
    });
  }, []);

  useEffect(() => {
    searchUser();
  }, [query]);

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery(['users'], async () => {
    const res = await getUsersService(AxiosPrivate);
    // console.log(res);
    setCopyUsers(res as UserT[]);
    return res as UserT[];
  });

  const searchUser = () => {
    const queryResult = users?.filter((user) =>
      `${user.name} ${user.lastname} ${user.email} ${user.username}`
        .toLowerCase()
        .includes(query.toLocaleLowerCase())
    );
    setCopyUsers(queryResult as UserT[]);
  };

  const findUserInList = (user_ids: string[], users: UserT[]) => {
    return user_ids.map((user_id) => {
      return users.find((_user) => _user._id === user_id);
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !users) return <div>No Data...</div>;

  return (
    <div className='overflow-hidden pt-4 flex fex flex-col w-full '>
      <div className='justify-center flex '>
        <input
          className='w-2/5 rounded-full border-none'
          type='text'
          placeholder='Search...'
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <section className='m-6 p-6 rounded-md  flex flex-col justify-between bg-slate-100'>
        <div className='rounded-md w-full h-full flex '>
          <div className='overflow-x-auto rounded-md'>
            <UserTable
              userList={userList}
              addUser={addUser}
              deleteUser={deleteUser}
              users={copyUsers}
            />
          </div>
          <div className='ml-2 p-6 rounded-md  w-1/5 justify-between bg-slate-200'>
            <h2 className='block py-1 font-medium text-lg'>Selected</h2>
            <ul>
              {findUserInList(userList, users).map((user) => {
                return (
                  <li
                    onDoubleClick={() => deleteUser(user?._id!)}
                    className='capitalize py-2 p-1 mb-1 rounded-md text-dark-purple bg-light-white font-medium whitespace-nowrap '
                  >{`${user?.username} - ${user?.name}`}</li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
