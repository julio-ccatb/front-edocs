import { useState } from 'react';
import { OptionComponent } from './utils/options.components';
import MenuIcon from '../public/menu-symbol-of-three-parallel-lines-svgrepo-com.svg';
interface IOptions {
  opt: number;
  name: string;
  active: boolean;
}

const MenuComponent = () => {
  const [options, setoptions] = useState([
    {
      opt: 1,
      name: 'User Management',
      active: false,
    },
    {
      opt: 2,
      name: 'Moodle Center',
      active: false,
    },
    {
      opt: 3,
      name: 'PfSense Center',
      active: false,
    },
    {
      opt: 4,
      name: 'MyOn Center',
      active: false,
    },
  ] as IOptions[]);

  const [isOpen, setIsOpen] = useState(false);

  const toggeMenu = () => {
    setIsOpen(!isOpen);
  };

  const setOptionActive = (e: any) => {
    const opt = e.target!.id;
    var newOptionsState = options.map((option) => {
      if (option.active) {
        return { opt: option.opt, name: option.name, active: false };
      }
      if (option.opt == opt) {
        return { opt, name: option.name, active: true } as IOptions;
      }

      return option;
    });
    console.log(newOptionsState);
    setoptions(newOptionsState);
    setIsOpen(false);
  };

  return (
    <div className='flex max-w-xs flex-col  mb-2 p-2 pl-4 rounded-md bg-slate-200'>
      <img
        onClick={() => toggeMenu()}
        src={MenuIcon}
        className='h-6 w-6 self-end md:hidden'
      />
      <h2 className='hidden text-2xl font-semibold md:block'>Menu</h2>
      <ul
        className={`${isOpen ? '' : 'hidden'} text-md space-y-1.5 p-2 md:block`}
      >
        {options.map((option) => (
          <OptionComponent
            key={option.opt}
            id={option.opt}
            text={option.name}
            active={option.active}
            function={(e) => setOptionActive(e)}
          />
        ))}
      </ul>
    </div>
  );
};

export default MenuComponent;
