import axios from 'axios';

export const fetcher = (url: string) =>
  axios.get(url, { withCredentials: true }).then((res) => res.data);
