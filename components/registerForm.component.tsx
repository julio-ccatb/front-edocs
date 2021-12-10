import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { createUserInput, createUserSchema } from '../models/auth.model';
import { createUserService } from '../services/auth.service';
import { useState } from 'react';
import { useRouter } from 'next/router';

const RegisterForm = () => {
  const [registerError, setregisterError] = useState('');
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<createUserInput>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = async (values: createUserInput) => {
    try {
      const res = await createUserService(values);

      router.push('/');
    } catch (err: any) {
      setregisterError(err.message || 'unexpexted problem');
    }
  };

  return (
    <>
      <div className='from-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className='banner-title'>E-DOCS</h2>
          <p>{registerError}</p>
          <div className='form-element'>
            <input
              className={` ${errors.name ? 'form-element-error' : ''}`}
              id='name'
              type='text'
              placeholder='Jhon Doe'
              {...register('name')}
            ></input>
            <p className='form-element-error'>{errors.name?.message}</p>
          </div>
          <div className='form-element'>
            <input
              className={` ${errors.email ? 'form-element-error' : ''}`}
              id='email'
              type='email'
              placeholder='jhondoe@email.com'
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
          <div className='form-element'>
            <input
              className={` ${
                errors.passwordConfirmation ? 'form-element-error' : ''
              }`}
              id='passwordConfirmation'
              type='password'
              placeholder='Confirm password'
              {...register('passwordConfirmation')}
            ></input>
            <p className='form-element-error'>
              {errors.passwordConfirmation?.message}
            </p>
          </div>

          <button className='btn-primary' type='submit'>
            sing up
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
