import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { useState } from 'react';
import { createSessionInput, createSessionSchema } from '../models/auth.model';
import { createSessionService } from '../services/auth.service';

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
    } catch (err: any) {
      setloginError(err.message || 'unexpected problem');
    }
  };

  return (
    <div className='from-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='banner-title'>E-DOCS</h2>

        <div className='form-element'>
          <input
            className={`${errors.email ? 'form-element-error' : ''}`}
            id='email'
            type='email'
            placeholder='Email'
            {...register('email')}
          ></input>
          <p className='form-element-error'>{errors.email?.message}</p>
        </div>

        <div className='form-element'>
          <input
            className={` ${errors.password ? 'form-element-error' : ''}`}
            id='password'
            type='password'
            placeholder='Password'
            {...register('password')}
          ></input>
          <p className='form-element-error'>{errors.password?.message}</p>
        </div>

        <button className='btn-primary' type='submit'>
          log in
        </button>
      </form>
    </div>
  );
};

export default LogInForm;
