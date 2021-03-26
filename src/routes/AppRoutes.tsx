import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SquarePage from 'Pages/SquarePage/SquarePage';
import SignInPage from 'Pages/SignInPage/SignInPage';
import SignUpPage from 'Pages/SignUpPage/SignUpPage';
import SpacePage from 'Pages/SpacePage/SpacePage';
import SalonPage from 'Pages/SalonPage/SalonPage';

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/square" />
      </Route>
      <Route path="/square" exact>
        <SquarePage />
      </Route>
      <Route path="/signUp">
        <SignUpPage />
      </Route>
      <Route path="/signIn">
        <SignInPage />
      </Route>
      <Route path="/space/:spaceId">
        <SpacePage />
      </Route>
      <Route path="/salon">
        <SalonPage />
      </Route>
    </Switch>
  );
}

export default AppRoutes;
