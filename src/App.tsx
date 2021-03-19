import React, { useEffect } from 'react';
import GlobalStyle from 'Styles/GlobalStyle';
import AppRoutes from 'Routes/AppRoutes';
import { signUp } from 'Apis/userAPI';

function App() {
  const body = {
    loginId: 'asdadf',
    password: 'gggg',
    nickname: 'assss',
  };

  useEffect(() => {
    const a = signUp(body);
    console.log(a);
  });

  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
