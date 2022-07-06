import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import {
  ADMIN_ROUTE,
  CART_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
} from './modules/utils/consts';
import * as Main from './pages/main/Layout';
import * as Product from './pages/product/Layout';
import * as Auth from './pages/auth/Layout';
import * as AdminPanel from './pages/admin-panel/Layout';
import * as Cart from './pages/cart/Layout';

export const routes: Array<RouteObject> = [
  {
    path: MAIN_ROUTE,
    element: <Main.Layout />,
  },
  {
    path: PRODUCT_ROUTE + '/:id',
    element: <Product.Layout />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth.Layout />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth.Layout />,
  },
];

export const authRoutes: Array<RouteObject> = [
  {
    path: ADMIN_ROUTE,
    element: <AdminPanel.Layout />,
  },
  {
    path: CART_ROUTE,
    element: <Cart.Layout />,
  },
];
