import { UserT } from '../../models/user.model';
import MoodleLogo from '../../public/Moodle-logo.svg';
import PfLogo from '../../public/PfSense_logo.svg';

export const UserTableRow = (props: { user: UserT }) => {
  const { user } = props;
  return (
    <tr className='bg-white border-b'>
      <th
        scope='row'
        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '
      >
        {user.username}
      </th>
      <td className='py-3 px-6'>{user.name}</td>
      <td className='py-3 px-6'>{user.lastname}</td>
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
          <input type='checkbox' name='' id='' />
        </div>
      </td>
    </tr>
  );
};
