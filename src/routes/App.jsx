import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { LoginContainer } from '../containers/Login';
import '../styles/global.css';
import { RecoveryPassword } from '../containers/RecoveryPassword';
import routes from './routes';

const App = () => {
  return (

    <BrowserRouter history={history}>

      <Routes>
        <Route exact path="/" element={<Layout />} >
          {routes}
        </Route>
      </Routes>

    </BrowserRouter>
    // <Layout>
    //   <LoginContainer />
    //   <RecoveryPassword />
    // </Layout>
  );
}

export default App;