import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SquarePage from 'Pages/SquarePage/SquarePage';
import SignInPage from 'Pages/SignInPage/SignInPage';
import SignUpPage from 'Pages/SignUpPage/SignUpPage';
import SpacePage from 'Pages/SpacePage/SpacePage';
import SalonPage from 'Pages/SalonPage/SalonPage';
import BookPage from 'Pages/BookPage/BookPage';

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/square" />
      </Route>
      <Route path="/square" exact>
        <SquarePage />
      </Route>
      <Route path="/signUp" exact>
        <SignUpPage />
      </Route>
      <Route path="/signIn" exact>
        <SignInPage />
      </Route>
      <Route path="/space/:spaceId" exact>
        <SpacePage />
      </Route>
      <Route path="/space/:spaceId/book/:bookId" exact>
        <BookPage />
      </Route>
      <Route path="/salon" exact>
        <SalonPage />
      </Route>
    </Switch>
  );
}

export default AppRoutes;
