import { MouseEventHandler } from 'react';

interface IOption {
  id: any;
  text: string;
  active: boolean;
  function: (e: any) => void;
}
export const OptionComponent = (props: IOption) => {
  return (
    <button
      id={`${props.id.toString()}`}
      onClick={props.function}
      className={`capitalize px-5 py-2 rounded-full text-slate-600 bg-slate-200 font-semibold text-sm flex align-center w-max cursor-pointer ${
        props.active
          ? 'bg-sky-300'
          : 'hover:bg-slate-300 transition duration-300 ease'
      }  `}
    >
      {props.text}
    </button>
  );
};
