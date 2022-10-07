import { useContext, useEffect } from 'react';
import MenuComponent from '../components/menu.component';
import { OptionComponent } from '../components/utils/options.components';
import { AuthContext } from '../context/auth.context';
import { useAxiosPrivate } from '../hooks/useAxiosPrivate.hook';
import { UserT } from '../models/user.model';
import MoodleLogo from '../public/Moodle-logo.svg';
import PfLogo from '../public/PfSense_logo.svg';
export const Dashboard = () => {
  const AxiosPrivate = useAxiosPrivate();

  const { user, setUser } = useContext(AuthContext);

  const getMe = async () => {};
  useEffect(() => {
    AxiosPrivate.get('/api/users/me').then(({ data }) => {
      const user: UserT = data;
      setUser(user);
    });
  }, []);

  return (
    <div className='overflow-hidden'>
      <nav className='flex items-center justify-between bg-slate-100'>
        <h1 className='sm:hidden-2xl text-6xl pl-4 inline-block flex-none   font-mono font-bold'>
          E-DOCS
        </h1>

        <div className='flex space-x-4 p-2'>
          <div className='flex  px-6 py-2 rounded-full bg-slate-200 flex-col text-right hover:text-neutral-600 hover:cursor-pointer'>
            <a className='font-bold text-md'>{user.name}</a>
            <p className='font-bold text-sm'>{user.lastname}</p>
          </div>
          <div className='h-16 w-16 rounded-full bg-red-500 m-auto'></div>
        </div>
      </nav>
      <section className='m-6 p-6 rounded-md h-full flex justify-between bg-slate-100 xl:flex-col'>
        <MenuComponent />
        <div className='rounded-md h-full grow ml-4 '>
          <div className='overflow-x-auto rounded-md relative'>
            <table className='w-full text-sm text-left text-slate-500 '>
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
                  <th scope='col' className='py-3 px-6'>
                    Selected
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white border-b'>
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '
                  >
                    00-0000
                  </th>
                  <td className='py-4 px-6'>John</td>
                  <td className='py-4 px-6'>Doe</td>
                  <td className='py-4 px-6'>john@doe.com</td>
                  <td className='py-4 px-6'>
                    <button className='p-0.5 m-0.5 '>
                      <img src={MoodleLogo} className='h-10 w-10 ' />
                    </button>
                    <button className='p-0.5 m-0.5 '>
                      <img src={PfLogo} className='h-10 w-10 ' />
                    </button>
                  </td>
                  <td className='py-4 px-6'>
                    <div className='align-middle justify-center text-center'>
                      <input type='checkbox' name='' id='' />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
