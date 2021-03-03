import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from './pages/Main';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/signIn" exact>
          <SignIn />
        </Route>
        <Route path="/signUp" exact>
          <SignUp />
        </Route>
      </Switch>
    </>
  );
}

export default App;
