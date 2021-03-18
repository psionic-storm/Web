import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SquarePage from 'Pages/SquarePage/SquarePage';
import SignInPage from 'Pages/SignInPage/SignInPage';
import SignUpPage from 'Pages/SignUpPage/SignUpPage';
import SpacePage from 'Pages/SpacePage/SpacePage';

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact>
        <SquarePage />
      </Route>
      <Route path="/signUp">
        <SignUpPage />
      </Route>
      <Route path="/signIn">
        <SignInPage />
      </Route>
      <Route path="/space">
        <SpacePage />
      </Route>
    </Switch>
  );
}

export default AppRoutes;
