import React, { useEffect } from 'react';
import GlobalStyle from 'Styles/GlobalStyle';
import AppRoutes from 'Routes/AppRoutes';
import { getCurrentUser, signIn } from 'Apis/userAPI';

function App() {
  const body = {
    loginId: 'asdddaddf',
    password: 'gggg',
  };

  useEffect(() => {
    const a = getCurrentUser(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDIsI…DI0fQ.kll4uK8V3T6_VWch6A0yzGap9avoAi2KAkI2w1cRbaw',
    );
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
