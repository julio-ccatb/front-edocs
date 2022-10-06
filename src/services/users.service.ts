import { useAxiosPrivate } from '../hooks/useAxiosPrivate.hook';

export const getMeService = async () => {
  const PrivateAPI = useAxiosPrivate();
  const response = await PrivateAPI('');
  return response.data;
};
