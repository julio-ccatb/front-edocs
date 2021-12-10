import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  name: string({
    required_error: 'Name is required',
  }).nonempty({ message: 'name Required' }),
  password: string({
    required_error: 'Password is required',
  })
    .min(6, 'Password too short - shuld be at least 6 characters ')
    .nonempty({ message: 'password Required' }),
  passwordConfirmation: string({
    required_error: 'Password Confirm is required',
  }).nonempty({ message: 'Password Confirmation Required' }),
  email: string({ required_error: 'Email is required' })
    .email('Not valid email')
    .nonempty({ message: 'email Required' }),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: 'Passwords do not match',
  path: ['passwordConfirmation'],
});

export const createSessionSchema = object({
  email: string().nonempty({ message: 'email is required' }),
  password: string().nonempty({ message: 'password is required' }),
});

export type createUserInput = TypeOf<typeof createUserSchema>;
export type createSessionInput = TypeOf<typeof createSessionSchema>;
