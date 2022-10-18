import { UserT } from '../../models/user.model';
import MoodleLogo from '../../public/Moodle-logo.svg';
import PfLogo from '../../public/PfSense_logo.svg';
import { useState, useEffect } from 'react';

export const UserTableRow = (props: {
  user: UserT;
  addToList: (id: string) => void;
  deleteFromlist: (id: string) => void;
}) => {
  const { user, addToList, deleteFromlist } = props;
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    if (!user._id) return;
    if (!selected) return deleteFromlist(user._id);
    return addToList(user._id);
  }, [selected]);

  return (
    <tr className='bg-white border-b' id={user._id}>
      <th
        scope='row'
        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '
      >
        {user.username}
      </th>
      <td className='py-3 px-6 capitalize'>{user.name}</td>
      <td className='py-3 px-6 capitalize'>{user.lastname}</td>
      <td className='py-3 px-6'>{user.email}</td>
      <td className='py-3 px-6'>
        {user.platforms?.moodle ? (
          <button className='p-0.5 m-0.5 '>
            <img src={MoodleLogo} className='h-10 w-10 ' />
          </button>
        ) : (
          <></>
        )}
        {user.platforms?.pfsense ? (
          <button className='p-0.5 m-0.5 '>
            <img src={PfLogo} className='h-8 w-8' />
          </button>
        ) : (
          <></>
        )}
      </td>
      <td className='py-3 px-6'>
        <div className='align-middle justify-center text-center'>
          <input
            type='checkbox'
            name=''
            id=''
            defaultChecked={selected}
            onChange={toggleSelected}
          />
        </div>
      </td>
    </tr>
  );
};
