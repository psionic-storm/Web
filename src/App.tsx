import React, { useEffect } from 'react';
import GlobalStyle from 'Styles/GlobalStyle';
import AppRoutes from 'Routes/AppRoutes';
import { getAllQuotes, getAllReviews } from 'Apis/squareAPI';
import { addBook, getBook, getSpace, updateSpace } from 'Apis/spaceAPI';
import { useDispatch, useSelector } from 'react-redux';
import { requestSignUp } from 'Modules/user/userActions';
import useUser from 'Hooks/redux/useUser';

function App() {
  const { signIn } = useUser();
  const body = {
    loginId: 'asddddaddf',
    password: 'gggg',
  };

  useEffect(() => {
    signIn(body);
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
