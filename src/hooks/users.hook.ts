import { useState } from 'react';

export const useUserList = () => {
  const [userList, setUserList] = useState((<unknown>[]) as string[]);

  const addUser = (user_id: string) => {
    const index = userList.indexOf(user_id);
    if (index === -1) {
      setUserList((current) => [...current, user_id]);
    }
    console.log('Not Added');
  };
  const deleteUser = (user_id: string) => {
    const index = userList.indexOf(user_id);
    console.log(index);
    if (index !== -1) {
      let newUserlist = userList.filter((item) => item !== user_id);
      setUserList(newUserlist);
    }
  };

  return { userList, addUser, deleteUser };
};
