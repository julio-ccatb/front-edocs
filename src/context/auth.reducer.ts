import { ITokens } from '../interfaces/interfaces';
import { createSessionInput } from '../models/auth.model';

type AuthAction =
  | {
      type: 'setTokens';
      payload: ITokens;
    }
  | {
      type: 'refreshToken';
      payload: ITokens;
    };

export const authReducer = (state: ITokens, action: AuthAction): ITokens => {
  switch (action.type) {
    case 'setTokens':
      state = action.payload;

      return state;

    default:
      return state;
  }
};
