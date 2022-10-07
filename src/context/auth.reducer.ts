import { ITokens } from '../interfaces/interfaces';

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
