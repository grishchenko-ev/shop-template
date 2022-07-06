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

        {/* <Navigation /> */}
      </div>
    </header>
  );
};
