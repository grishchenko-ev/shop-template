import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../../utils/consts';

export const Controls = () => {
  const navigate = useNavigate();
  return (
    <div className="controls">
      <button onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</button>
      <button onClick={() => navigate(LOGIN_ROUTE)}>Выйти</button>
      <button>Авторизация</button>
    </div>
  );
};
