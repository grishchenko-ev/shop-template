import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, routes } from '../../routes';
import { MAIN_ROUTE } from '../utils/consts';

export const Router = () => {
  const isAuth = false;

  return (
    <Routes>
      {isAuth
        ? authRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })
        : routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
