import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { useState } from 'react';
import { createSessionInput, createSessionSchema } from '../models/auth.model';
import { createSessionService } from '../services/auth.service';
import { config } from '../conf';

const LogInForm = () => {
  const [loginError, setloginError] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<createSessionInput>({
    resolver: zodResolver(createSessionSchema),
  });

  const onSubmit = async (values: createSessionInput) => {
    try {
      await createSessionService(values);
      console.log(`${config.NEXT_PUBLIC_SERVER_ENDPOINT}/api/sessions`);
    } catch (err: any) {
      setloginError(err.message || 'unexpected problem');
      console.log(err);
    }
  };

  return (
    <div className='w-2/5 h-2/5 bg-slate-100 max-w-md flex justify-center  p-9 rounded-xl shadow-lg'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-4xl text-center font-bold font-mono pb-9'>
          E-DOCS
        </h2>

        <div className='pb-3'>
          <input
            className={`${
              errors.email
                ? 'form-element-error'
                : 'text-center text-neutral-600 bg-transparent w-full border-neutral-400 rounded-lg shadow-sm hover:border-cyan-600  focus:outline-none'
            }`}
            id='email'
            type='email'
            placeholder='Email'
            {...register('email')}
          ></input>
          {errors.email?.message ? (
            <p className='font-mono font-normal text-red-500'>{`💥${errors.email?.message}`}</p>
          ) : (
            <></>
          )}
        </div>

        <div className='pb-3'>
          <input
            className={` ${
              errors.password
                ? 'form-element-error'
                : 'text-center text-neutral-600 bg-transparent w-full border-neutral-400 rounded-lg shadow-sm hover:border-cyan-600 focus:outline-none'
            }`}
            id='password'
            type='password'
            placeholder='Password'
            {...register('password')}
          ></input>
          {errors.password?.message ? (
            <p className='font-mono font-normal text-red-500'>{`💥${errors.password?.message}`}</p>
          ) : (
            <></>
          )}
        </div>

        <button
          className='text-center w-full capitalize font-mono text-black font-bold text-xl p-3 rounded-md shadow-xl bg-cyan-400 hover:bg-cyan-300'
          type='submit'
        >
          log in
        </button>
      </form>
    </div>
  );
};

export default LogInForm;
