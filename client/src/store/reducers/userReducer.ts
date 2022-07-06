import { UserAction, UserState, UserActionTypes } from '../../types';

const initialState: UserState = {
  isAuth: false,
  user: undefined,
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { isAuth: false, user: undefined, loading: true, error: null };
    case UserActionTypes.FETCH_USER_SUCCESS:
      console.log(action.payload);

      return {
        isAuth: true,
        user: { ...action.payload },
        loading: false,
        error: null,
      };
    case UserActionTypes.FETCH_USER_ERROR:
      return {
        isAuth: false,
        user: undefined,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
