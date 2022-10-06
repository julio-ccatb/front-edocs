import { createContext } from 'react';
import { ITokens } from '../interfaces/interfaces';

type AuthContextProps = {
  credentials: ITokens;
  setTokens: (tokens: ITokens) => void;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
