import axios from 'axios';

export const getAllRacksService = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/rack`,
    { withCredentials: true }
  );
};
export const getRackService = async (input: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/rack/${input}`,
    { withCredentials: true }
  );
};
