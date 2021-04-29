import React, { useEffect, useState } from 'react';

import { psionicStorm } from 'Apis/base';
import { getCurrentUser, signIn, signUp, signOut } from 'Apis/userAPI';
import Button from 'Elements/Button/Button';
import Header from 'Elements/Header/Header';
import GlobalStyle from 'Styles/GlobalStyle';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [email2, setEmail2] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('default');

  async function signInCall() {
    const data = await signIn({ email: email2, password: password2 });
    console.log(data);
    if (data.error) {
      setMessage(JSON.stringify(data));
      return;
    }
    setMessage('logged in');
  }
  async function signUpCall() {
    const data = await signUp({ email, password });
    console.log(data);
    setMessage(JSON.stringify(data));
  }
  function signOutCall() {
    if (psionicStorm.defaults.headers.common['Authorization']) {
      signOut();
      setMessage('log out');
      return;
    }
    setMessage('이미 로그아웃되어 있음');
  }
  async function getUserCall() {
    const data = await getCurrentUser();
    setMessage(JSON.stringify(data));
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Button>버튼</Button>
      <p>sign up</p>
      <input type="text" placeholder="email.." value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="password.." value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signUpCall}>signUp btn</button>
      <p>sign in</p>
      <input type="text" placeholder="email" value={email2} onChange={(e) => setEmail2(e.target.value)} />
      <input type="text" placeholder="password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
      <button onClick={signInCall}>signIn btn</button>
      <br />
      <button onClick={getUserCall}>getUser btn</button>
      <br />
      <button onClick={signOutCall}>signOut btn</button>
      <p>{message}</p>
    </>
  );
}

export default App;
