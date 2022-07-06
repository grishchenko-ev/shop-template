import { AppDispatch } from '../index';
import { $authHost, $host } from '../../api/index';
import { userSlice } from '../reducers/UserSlice';
import { AxiosError } from 'axios';
import jwt_decode from 'jwt-decode';

export const registration =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.putUser());
      const { data } = await $host.post('api/user/registration', {
        email,
        password,
        role: 'ADMIN',
      });
      dispatch(userSlice.actions.putUserSuccess(data));
      localStorage.setItem('token', data.token);

      return jwt_decode(data.token);
    } catch (error: AxiosError | any) {
      dispatch(userSlice.actions.putUserError(error.message));
    }
  };

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.putUser());
      const { data } = await $host.post('api/user/login', { email, password });
      dispatch(userSlice.actions.putUserSuccess(data));
      localStorage.setItem('token', data.token);

      return jwt_decode(data.token);
    } catch (error: AxiosError | any) {
      dispatch(userSlice.actions.putUserError(error.message));
    }
  };

export const check = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.putUser());
    const { data } = await $authHost.get('api/user/auth');
    dispatch(userSlice.actions.putUserSuccess(data));
    localStorage.setItem('token', data.token);

    return jwt_decode(data.token);
  } catch (error: AxiosError | any) {
    dispatch(userSlice.actions.putUserError(error.message));
  }
};
