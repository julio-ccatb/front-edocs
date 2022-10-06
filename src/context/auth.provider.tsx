import { createContext, useReducer, useState } from 'react';
import { IProps, ITokens } from '../interfaces/interfaces';
import { AuthContext } from './auth.context';
import { authReducer } from './auth.reducer';

const INITIAL_STATE: ITokens = { accessToken: '', refreshToken: '' };

export const AuthProvider = ({ children }: IProps) => {
  const [auth, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const setTokens = (tokens: ITokens) => {
    dispatch({ type: 'setTokens', payload: tokens });
  };

  return (
    <AuthContext.Provider value={{ credentials: auth, setTokens }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
