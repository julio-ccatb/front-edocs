import { UserT } from '../../models/user.model';

const UserListComponent = (props: {
  userList: string[];
  users: UserT[];
  findUserInList: (user_ids: string[], users: UserT[]) => (UserT | undefined)[];
  deleteUser: (user_id: string) => void;
}) => {
  const { userList, users, findUserInList, deleteUser } = props;

  return (
    <div className='ml-2 p-6 rounded-md  w-3/12 justify-between bg-slate-200'>
      <div className='relative '>
        <span className='px-3 py-1  font-semibold rounded-full text-center absolute top-0 right-0 bg-blue-600 text-white'>
          {userList.length}
        </span>
      </div>
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
  );
};

export default UserListComponent;
