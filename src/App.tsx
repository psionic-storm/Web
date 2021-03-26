import React, { useEffect } from 'react';
import GlobalStyle from 'Styles/GlobalStyle';
import AppRoutes from 'Routes/AppRoutes';
import { useDispatch } from 'react-redux';
import { requestGetCurrentUser } from 'Modules/user/userActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
