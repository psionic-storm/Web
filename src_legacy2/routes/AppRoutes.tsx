import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignInPage from 'Pages/SignInPage/SignInPage';
import SignUpPage from 'Pages/SignUpPage/SignUpPage';

function AppRoutes() {
  return (
    <Switch>
      <Route path="/sign-up" exact>
        <SignUpPage />
      </Route>
      <Route path="/sign-in" exact>
        <SignInPage />
      </Route>
    </Switch>
  );
}

export default AppRoutes;
