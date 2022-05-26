import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import '../styles/global.css';
import routes from './routes';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter history={history}>
        <Routes>
          <Route exact path="/" element={<Layout />} >
            {routes}
          </Route>
        </Routes>

      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;