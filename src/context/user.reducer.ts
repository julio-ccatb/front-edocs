import { UserT } from '../models/user.model';

type UserAction = {
  type: 'setUser';
  payload: UserT;
};

export const userReducer = (state: UserT, action: UserAction) => {
  switch (action.type) {
    case 'setUser':
      state = action.payload;
      return state;

    default:
      return state;
  }
};
