import type { NextPage } from 'next';
import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

export interface User {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const Home: NextPage = () => {
  const { data, error } = useSWR<User>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    fetcher
  );

  if (data) return <>Welcome {data.name}!!</>;

  return <div>Please Log in</div>;
};

export default Home;
