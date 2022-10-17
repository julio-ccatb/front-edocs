import { AxiosInstance } from 'axios';
import { useAxiosPrivate } from '../hooks/useAxiosPrivate.hook';

export const getMeService = async () => {
  const PrivateAPI = useAxiosPrivate();
  const response = await PrivateAPI('');
  return response.data;
};

export const getUsersService = async (privateAxios: AxiosInstance) => {
  try {
    const res = await privateAxios.get('/api/users/all');

    return <unknown>res.data;
  } catch (e) {
    throw new Error(<any>e);
  }
};
