import axios from '../api/CustomAxios';
import { axiosPrivate } from '../api/CustomAxios';
import { config } from '../conf';
import { createSessionInput, createUserInput } from '../models/auth.model';
import { ITokens } from '../interfaces/interfaces';

export const createUserService = async (input: createUserInput) => {
  const response = await axios.post(
    `${config.NEXT_PUBLIC_SERVER_ENDPOINT}/api/users`,
    input
  );
  console.log(response);
  return response;
};
export const createSessionService = async (input: createSessionInput) => {
  // console.log(`${config.NEXT_PUBLIC_SERVER_ENDPOINT}/api/sessions`);
  const response = await axiosPrivate.post(
    `${config.NEXT_PUBLIC_SERVER_ENDPOINT}/api/sessions`,
    input,
    { withCredentials: true }
  );

  return <ITokens>response.data;
};
