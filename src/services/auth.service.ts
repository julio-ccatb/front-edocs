import axios from 'axios';
import { createSessionInput, createUserInput } from '../models/auth.model';

export const createUserService = async (input: createUserInput) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/users`,
    input
  );
  console.log(response);
  return response;
};
export const createSessionService = async (input: createSessionInput) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/sessions`,
    input,
    { withCredentials: true }
  );
  console.log(response);
  return response;
};
