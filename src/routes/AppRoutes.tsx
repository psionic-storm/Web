import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from 'Pages/MainPage/MainPage';

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
    </Switch>
  );
}

export default AppRoutes;
