import React from 'react';
import { Route } from "react-router-dom";
import { LoginContainer } from './../containers/Login';
import { RecoveryPassword } from './../containers/RecoveryPassword';
import { HomeContainer } from './../pages/HomeContainer';
import { NotFoundScreen } from './../pages/NotFoundScreen';



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
    path: '/recovery-password',
    name: 'NotFound',
    component: <RecoveryPassword />,
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