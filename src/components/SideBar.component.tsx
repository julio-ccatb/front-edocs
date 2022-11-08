import { useState, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { AuthContext } from '../context/auth.context';
import {
  DashboardIcon,
  CalendarIcon,
  ChatIcon,
  FolderIcon,
  ChartIcon,
  SearchIcon,
  SettingIcon,
  UserIcon,
  logoIcon,
  controlIcon,
} from '../hooks/customIcon';
import { IProps } from '../interfaces/interfaces';

interface IOptions {
  id: number;
  active: boolean;
  title: string;
  goto?: string;
  src: string;
  gap: boolean;
}
const SideBarComponent = () => {
  const Menus_Initial = [
    {
      id: 101,
      active: false,
      title: 'Dashboard',
      goto: 'home',
      src: DashboardIcon,
      gap: false,
    },
    { id: 102, active: false, title: 'Inbox', src: ChatIcon, gap: false },
    {
      id: 103,
      active: false,
      title: 'Accounts',
      goto: 'accounts',
      src: UserIcon,
      gap: true,
    },
    {
      id: 104,
      active: false,
      title: 'Schedule ',
      src: CalendarIcon,
      gap: false,
    },
    { id: 105, active: false, title: 'Search', src: SearchIcon, gap: false },
    { id: 106, active: false, title: 'Analytics', src: ChartIcon, gap: false },
    { id: 107, active: false, title: 'Files ', src: FolderIcon, gap: true },
    { id: 108, active: false, title: 'Setting', src: SettingIcon, gap: false },
  ] as IOptions[];
  const [open, setOpen] = useState(true);
  const [menus, setMenus] = useState(Menus_Initial);
  const navigate = useNavigate();

  const { credentials } = useContext(AuthContext);

  // console.log(credentials);
  const setOptionActive = (e: any) => {
    const opt = e.target!.id;

    let menuUpdate = menus.map((option) => {
      if (option.id == opt) {
        navigate(option.goto || '');
        return { ...option, active: true };
      }
      return { ...option, active: false };
    });
    setMenus(menuUpdate);
  };

  return (
    <>
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-dark-purple p-5  pt-8 relative duration-300`}
      >
        <img
          src={controlIcon}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className='flex gap-x-4 items-center'>
          <img
            src={logoIcon}
            className={`cursor-pointer duration-500 ${
              open && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className='pt-6'>
          {menus.map((menu, index) => (
            <li
              id={`${menu.id}`}
              key={index}
              onClick={setOptionActive}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${menu.gap ? 'mt-9' : 'mt-2'} ${
                menu.active ? 'bg-light-white' : ''
              } `}
            >
              <img
                src={menu.src}
                // className={`${menu.active ? 'bg-light-white' : ''}`}
              />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default SideBarComponent;
