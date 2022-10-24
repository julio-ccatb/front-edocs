import { useEffect } from 'react';
import { UserT } from '../../models/user.model';
import { UserTableRow } from './userTableRow.component';

export const UserTable = (props: {
  users: UserT[];
  userList: string[];
  addUser: (user_id: string) => void;
  deleteUser: (user_id: string) => void;
}) => {
  const { users, userList, addUser, deleteUser } = props;

  useEffect(() => console.log(userList), [userList]);

  return (
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
        </tr>
      </thead>
      <tbody>
        {users.map((_user) => {
          return (
            <UserTableRow
              user={_user}
              addToList={addUser}
              deleteFromlist={deleteUser}
            />
          );
        })}
      </tbody>
    </table>
  );
};