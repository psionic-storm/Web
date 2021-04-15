import { getCurrentUser, signIn, signUp } from 'Apis/userAPI';
import React, { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    signIn({ email: 'gg@gmail.com', password: 'asdfasdf' });
  }, []);

  const [state, setState] = useState('');
  function signInCall() {
    getCurrentUser();
  }

  return <button onClick={signInCall}>asdfaf</button>;
}

export default App;
