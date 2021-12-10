import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { createUserInput, createUserSchema } from '../../models/auth.model';
import { createUserService } from '../../services/auth.service';
import { useState } from 'react';
import { useRouter } from 'next/router';

const RegisterPage = () => {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{registerError}</p>
        <div className="form-element">
          <input
            id="name"
            type="text"
            placeholder="Jhon Doe"
            {...register('name')}
          ></input>
          <p>{errors.name?.message}</p>
        </div>
        <div className="form-element">
          <input
            id="email"
            type="email"
            placeholder="jhondoe@email.com"
            {...register('email')}
          ></input>
          <p>{errors.email?.message}</p>
        </div>

        <div className="form-element">
          <input
            id="password"
            type="password"
            placeholder="*********"
            {...register('password')}
          ></input>
          <p>{errors.password?.message}</p>
        </div>
        <div className="form-element">
          <input
            id="passwordConfirmation"
            type="password"
            placeholder="*********"
            {...register('passwordConfirmation')}
          ></input>
          <p>{errors.passwordConfirmation?.message}</p>
        </div>

        <button type="submit">sing up</button>
      </form>
    </>
  );
};

export default RegisterPage;
