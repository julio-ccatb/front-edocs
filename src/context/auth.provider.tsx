import { createContext, useReducer, useState } from 'react';
import { IProps, ITokens } from '../interfaces/interfaces';
import { UserT } from '../models/user.model';
import { AuthContext } from './auth.context';
import { authReducer } from './auth.reducer';
import { userReducer } from './user.reducer';

const INITIAL_STATE: ITokens = { accessToken: '', refreshToken: '' };
const INITIAL_USER_STATE: UserT = {
  username: ' ',
  name: ' ',
  lastname: ' ',
  email: ' ',
  password: ' ',
  grade: ' ',
  section: ' ',
  id_type: 99,
  platforms: {
    moodle: false,
    pfsense: false,
    myon: false,
    digibooks: false,
  },
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const AuthProvider = ({ children }: IProps) => {
  const [auth, dispatch] = useReducer(authReducer, INITIAL_STATE);
  const [user, userdispatch] = useReducer(userReducer, INITIAL_USER_STATE);
  const setTokens = (tokens: ITokens) => {
    dispatch({ type: 'setTokens', payload: tokens });
  };
  const setUser = (user: UserT) => {
    userdispatch({ type: 'setUser', payload: user });
  };

  return (
    <AuthContext.Provider
      value={{ credentials: auth, setTokens, setUser, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
