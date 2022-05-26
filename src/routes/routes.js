import React from 'react';
import { Route } from "react-router-dom";

import { NotFoundScreen } from './../pages/NotFoundScreen';
import PasswordRecovery from './../pages/PasswordRecovery';
import SendEmail from './../pages/SendEmail';
import NewPassword from './../pages/NewPassword';
import MyAccount from './../pages/MyAccount';
import CreateAccount from './../pages/CreateAccount';
import Checkout from './../pages/Checkout';
import Orders from './../pages/Orders';
import Home from './../pages/Home';
import Login from '../pages/Login';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: <Home />,
  },
  {
    path: '/login',
    name: 'Login',
    component: <Login />,
  },
  {
    path: '/password-recovery',
    name: 'NotFound',
    component: <PasswordRecovery />,
  },
  {
    path: '/send-email',
    name: 'SendEmail',
    component: <SendEmail />,
  },
  {
    path: '/new-password',
    name: 'NewPassword',
    component: <NewPassword />,
  },
  {
    path: '/account',
    name: 'Acount',
    component: <MyAccount />,
  },
  {
    path: '/sigup',
    name: 'SingUp',
    component: <CreateAccount />,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: <Checkout />,
  },
  {
    path: '/orders',
    name: 'Orders',
    component: <Orders />,
  },
  {
    path: '*',
    name: 'NotFound',
    component: <NotFoundScreen />,
  }
]

export default routes.map((route, index) => {
  return (
    <Route
      key={index}
      path={route.path}
      element={route.component}
    />
  )
})