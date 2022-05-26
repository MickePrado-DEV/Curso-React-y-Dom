import React from 'react';
import { Route } from "react-router-dom";
import { LoginContainer } from './../containers/Login';
import { RecoveryPassword } from './../containers/RecoveryPassword';
import { HomeContainer } from './../pages/HomeContainer';
import { NotFoundScreen } from './../pages/NotFoundScreen';
import PasswordRecovery from './../pages/PasswordRecovery';
import SendEmail from './../pages/SendEmail';
import NewPassword from './../pages/NewPassword';
import MyAccount from './../pages/MyAccount';
import CreateAccount from './../pages/CreateAccount';
import Checkout from './../pages/Checkout';
import Orders from './../pages/Orders';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: <HomeContainer />,
  },
  {
    path: '/login',
    name: 'Login',
    component: <LoginContainer />,
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