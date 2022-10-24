import { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { UserTable } from '../components/utils/userTable.component';
import { AuthContext } from '../context/auth.context';
import { useAxiosPrivate } from '../hooks/useAxiosPrivate.hook';
import { useUserList } from '../hooks/users.hook';
import { UserT } from '../models/user.model';
import { getUsersService } from '../services/users.service';
import { controlIcon } from '../hooks/customIcon';

export const UserManagmentDashBoard = () => {
  const AxiosPrivate = useAxiosPrivate();

  const { user, setUser } = useContext(AuthContext);
  const [copyUsers, setCopyUsers] = useState([] as UserT[]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, SetTotalPage] = useState(1);
  const navigate = useNavigate();
  const { userList, addUser, deleteUser } = useUserList();

  console.log(page);
  useEffect(() => {
    AxiosPrivate.get('/api/users/me').then(({ data }) => {
      const user: UserT = data;
      setUser(user);
    });
    SetTotalPage(totalPage);
  }, []);

  useEffect(() => setPage(0), [query]);
  useEffect(() => {
    if (page >= totalPage || page < 0) {
      setPage(totalPage - 1);
      return;
    }
    let _copyuser = searchUser();
    let _page = paginate(_copyuser, 10, page);
    if (!_page) return;
    setCopyUsers(_page);
  }, [query, page]);

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery(
    ['users'],
    async () => {
      const res = await getUsersService(AxiosPrivate);
      // console.log(res);
      let _page = paginate(res as UserT[], 20, page);
      if (!_page) return;
      setCopyUsers(_page);
      return res as UserT[];
    },
    { refetchOnWindowFocus: false }
  );

  const searchUser = () => {
    const queryResult = users?.filter((user) =>
      `${user.name} ${user.lastname} ${user.email} ${user.username}`
        .toLowerCase()
        .includes(query.toLocaleLowerCase())
    );
    return queryResult as UserT[];
  };

  const paginate = (array: UserT[], page_size: number, page_number: number) => {
    const totalPages = Math.ceil(array.length / page_size);
    // console.log(totalPages);
    if (!array) return;
    SetTotalPage(totalPages);
    return array.slice(
      page_number * page_size,
      page_number * page_size + page_size
    );
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
          <div className='overflow-x-auto rounded-md flex flex-col items-center'>
            <UserTable
              userList={userList}
              addUser={addUser}
              deleteUser={deleteUser}
              users={copyUsers}
            />
            <div className='py-2 flex space-x-4 items-center align-middle justify-center'>
              <img
                className='rotate-0 focus:ring-0  active:bg-blue-800 active:shadow-lg rounded-full transition duration-150 ease-in-out shadow-dark-purple'
                onClick={() => setPage(page - 1)}
                src={controlIcon}
              />
              <p className='text-md text-dark-purple space-x-1'>{`${
                page + 1
              }/${totalPage}`}</p>
              <img
                className='rotate-180 focus:ring-0  active:bg-blue-800 active:shadow-lg rounded-full transition duration-150 ease-in-out shadow-dark-purple'
                onClick={() => setPage(page + 1)}
                src={controlIcon}
              />
            </div>
          </div>
          <div className='ml-2 p-6 rounded-md  w-1/5 justify-between bg-slate-200'>
            <h2 className='block py-1 font-medium text-lg'>Selected</h2>
            <ul>
              {findUserInList(userList, users).map((user) => {
                return (
                  <li
                    key={user?._id}
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
