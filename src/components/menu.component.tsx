import {
  ButtonHTMLAttributes,
  EventHandler,
  MouseEvent,
  MouseEventHandler,
  useState,
} from 'react';
import { OptionComponent } from './utils/options.components';

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
  };

  return (
    <div className='flex flex-col w-max p-2 pl-4 rounded-md bg-slate-200'>
      <h2 className='text-2xl font-semibold'>Menu</h2>
      <ul className='text-md space-y-1.5 p-2'>
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
