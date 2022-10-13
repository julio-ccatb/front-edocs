import { UserT } from '../../models/user.model';

export const HeaderComponent = (props: { user: UserT }) => {
  const { user } = props;

  return (
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
  );
};
