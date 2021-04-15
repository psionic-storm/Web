import { getCurrentUser, signIn, signUp, signOut } from 'Apis/userAPI';
import React, { useEffect, useState } from 'react';

function App() {
  function signInCall() {
    signIn({ email: 'gg11@gmail.com', password: 'asdfasdf' });
  }
  function signUpCall() {
    signUp({ email: 'gg11@gmail.com', password: 'asdfasdf' });
  }
  function signOutCall() {
    signOut();
  }
  function getUserCall() {
    getCurrentUser();
  }

  return (
    <>
      <button onClick={signInCall}>signIn btn</button>
      <button onClick={signUpCall}>signUp btn</button>
      <button onClick={getUserCall}>getUser btn</button>
      <button onClick={signOutCall}>signOut btn</button>
    </>
  );
}

export default App;
