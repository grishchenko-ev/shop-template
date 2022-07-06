import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Action } from 'history';
import { UserAction, UserState, UserActionTypes, UserType } from '../../types';

const initialState: UserState = {
  isAuth: false,
  user: undefined,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    putUser(state) {
      state.isLoading = true;
    },
    putUserSuccess(state, action: PayloadAction<UserType>) {
      state.isAuth = true;
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
    putUserError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const userSelector = {
  getUser: (state: any) => state.user,
};

// export const UserSlce = (
//   state = initialState,
//   action: UserAction
// ): UserState => {
//   switch (action.type) {
//     case UserActionTypes.PUT_USER:
//       return { isAuth: false, user: undefined, loading: true, error: null };
//     case UserActionTypes.PUT_USER_SUCCESS:
//       console.log(action.payload);

//       return {
//         isAuth: true,
//         user: { ...action.payload },
//         loading: false,
//         error: null,
//       };
//     case UserActionTypes.PUT_USER_ERROR:
//       return {
//         isAuth: false,
//         user: undefined,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export default userSlice.reducer;
