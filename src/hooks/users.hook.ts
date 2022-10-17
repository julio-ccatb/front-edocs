import { remove } from 'lodash';
import { useState } from 'react';

export const useUserList = () => {
  const [userList, setUserList] = useState((<unknown>[]) as string[]);

  const addUser = (user_id: string) => {
    let _userlist = userList;
    userList.push(user_id);
    setUserList(_userlist);
    console.log(userList);
  };
  const deleteUser = (user_id: string) => {
    let _userlist = remove(userList, (item) => item === user_id);
    setUserList(_userlist);
  };

  return { userList, addUser, deleteUser };
};
