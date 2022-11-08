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
import UserListComponent from '../components/utils/userList.components';
import SpinnerComponent from '../components/utils/spinner.Component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import SideBarComponent from '../components/SideBar.component';

export const UserManagmentDashBoard = () => {
  const AxiosPrivate = useAxiosPrivate();

  const { setUser } = useContext(AuthContext);
  const [copyUsers, setCopyUsers] = useState([] as UserT[]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, SetTotalPage] = useState(1);
  const navigate = useNavigate();
  const { userList, addUser, deleteUser } = useUserList();
  const [isListOpen, setIsListOpen] = useState();

  // useEffect(() => {
  //   let unmmounted = false;

  //   AxiosPrivate.get('/api/users/me').then(({ data }) => {
  //     const user: UserT = data;
  //     if (!unmmounted) setUser(user);
  //     // SetTotalPage(totalPage);
  //   });

  //   return () => {
  //     unmmounted = true;
  //   };
  // }, []);

  useEffect(() => setPage(0), [query]);
  useEffect(() => {
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
      setTimeout(() => {}, 5000);
      const res = await getUsersService(AxiosPrivate);
      // console.log(res);
      let _page = paginate(res as UserT[], 20, page);
      if (!_page) return;
      setCopyUsers(_page);
      return res as UserT[];
    },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );

  const searchUser = () => {
    if (!users) return [] as UserT[];
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
    if (!array || array === undefined) return;
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
    <>
      <div className='overflow-hidden pt-12 flex flex-col w-full '>
        <div className='m-6 flex justify-between'>
          <input
            className='w-2/5 rounded-full border-none'
            type='text'
            placeholder='Search...'
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className='flex space-x-4'>
            <button className='px-2 py-2 text-white bg-blue-700 rounded-md'>
              <FontAwesomeIcon className='mr-1' icon={faUserPlus} />
              Add User
            </button>
            <button className='px-2 py-2 text-white bg-yellow-500 rounded-md'>
              <FontAwesomeIcon className='mr-1' icon={faUserAlt} />
              Edit User
            </button>
          </div>
        </div>
        <section className='mx-6 mb-6 p-6 rounded-md  flex flex-col justify-between bg-slate-100'>
          <div className='rounded-md w-full h-full flex '>
            <div className='overflow-x-auto rounded-md flex flex-col items-center'>
              {users ? (
                // <SpinnerComponent />
                <>
                  <UserTable
                    userList={userList}
                    addUser={addUser}
                    deleteUser={deleteUser}
                    users={copyUsers}
                  />
                  <div className='py-2 flex space-x-4 items-center align-middle justify-center'>
                    <img
                      className='rotate-0 focus:ring-0  active:bg-blue-800 active:shadow-lg rounded-full transition duration-200 ease-in-out shadow-dark-purple'
                      onClick={() => setPage(page - 1)}
                      src={controlIcon}
                    />
                    <p className='text-md text-dark-purple space-x-1'>{`${
                      page + 1
                    }/${totalPage}`}</p>
                    <img
                      className='rotate-180 focus:ring-0  active:shadow-lg rounded-full transition duration-200 ease-in-out shadow-dark-purple'
                      onClick={() => setPage(page + 1)}
                      src={controlIcon}
                    />
                  </div>
                </>
              ) : (
                <SpinnerComponent />
              )}
            </div>
            <div className='relative'></div>
            <UserListComponent
              deleteUser={deleteUser}
              userList={userList}
              findUserInList={findUserInList}
              users={users}
            />
          </div>
        </section>
      </div>
    </>
  );
};
