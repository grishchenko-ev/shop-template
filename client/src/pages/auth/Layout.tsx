import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  MAIN_ROUTE,
} from '../../modules/utils/consts';
import * as User from '../../api/userApi';
import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import './styles.scss';
import { UserAction, UserActionTypes } from '../../types';
import { useDispatch } from 'react-redux';

export const Layout = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      let data;
      if (isLogin) {
        data = await User.login(email, password);
      } else {
        data = await User.registration(email, password);
        console.log(data);

        dispatch({
          type: UserActionTypes.FETCH_USER_SUCCESS,
          payload: data,
        });
        navigate(MAIN_ROUTE);
      }

      // user.setUser(user)
      // user.setIsAuth(true)
      // history.push(SHOP_ROUTE)
    } catch (e: AxiosError | any) {
      alert(e.response.data.message);
    }
  };

  return (
    <article className="auth">
      <div className="panel">
        <h3>{isLogin ? 'Авторизация' : 'Регистрация'}</h3>
        <form>
          <input
            type="text"
            className="form__control"
            placeholder="Введите логин"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <input
            type="password"
            className="form__control"
            placeholder="Введите пароль"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <div className="h-align">
            {isLogin ? (
              <>
                Нет аккаунта?{' '}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
              </>
            ) : (
              <>
                Уже зарегистрированны?{' '}
                <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </>
            )}
            <button type="button" onClick={handleAuth}>
              {isLogin ? 'Войти' : 'Регистрация'}
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};
