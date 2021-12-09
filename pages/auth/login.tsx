import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { useState } from 'react';
import {
  createSessionInput,
  createSessionSchema,
} from '../../models/auth.model';
import { createSessionService } from '../../services/auth.service';
import { useRouter } from 'next/router';

const LogInPage = () => {
  const [loginError, setloginError] = useState('');
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<createSessionInput>({
    resolver: zodResolver(createSessionSchema),
  });

  const onSubmit = async (values: createSessionInput) => {
    try {
      const session = await createSessionService(values);
      router.push('/');
    } catch (err: any) {
      setloginError(err.message || 'unexpexted problem');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{loginError}</p>

        <div className="form-element">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="jhondoe@email.com"
            {...register('email')}
          ></input>
          <p>{errors.email?.message}</p>
        </div>

        <div className="form-element">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="*********"
            {...register('password')}
          ></input>
          <p>{errors.password?.message}</p>
        </div>

        <button type="submit">log in</button>
      </form>
    </>
  );
};

export default LogInPage;
