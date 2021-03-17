import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SquarePage from 'Pages/SquarePage/SquarePage';
import SignInPage from 'Pages/SignInPage/SignInPage';

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact>
        <SquarePage />
      </Route>
      <Route path="/signUp"></Route>
      <Route path="/signIn">
        <SignInPage />
      </Route>
    </Switch>
  );
}

export default AppRoutes;
