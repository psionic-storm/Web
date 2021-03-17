import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from 'Pages/SquarePage/SquarePage';

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/signUp"></Route>
      <Route path="/signIn"></Route>
    </Switch>
  );
}

export default AppRoutes;
