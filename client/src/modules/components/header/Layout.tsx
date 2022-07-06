import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';
import { MAIN_ROUTE } from '../../utils/consts';
import './styles.scss';

export const Layout = () => {
  return (
    <header>
      <div className="container">
        <NavLink to={MAIN_ROUTE}>Название</NavLink>
        <div className="controls">
          <button>Админ панель</button>
          <button>Войти</button>
          <button>Авторизация</button>
        </div>
        {/* <Navigation /> */}
      </div>
    </header>
  );
};
