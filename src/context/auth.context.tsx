import { createContext } from 'react';
import { ITokens } from '../interfaces/interfaces';
import { UserT } from '../models/user.model';

type AuthContextProps = {
  credentials: ITokens;
  setTokens: (tokens: ITokens) => void;
  user: UserT;
  setUser: (user: UserT) => void;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
