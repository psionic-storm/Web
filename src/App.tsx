import React, { useEffect } from 'react';
import GlobalStyle from 'Styles/GlobalStyle';
import AppRoutes from 'Routes/AppRoutes';
import { getAllQuotes, getAllReviews } from 'Apis/squareAPI';
import { addBook, getBook, getSpace, updateSpace } from 'Apis/spaceAPI';
import { useDispatch, useSelector } from 'react-redux';
import { requestSignUp } from 'Modules/user/userActions';

function App() {
  localStorage.setItem(
    'accessToken',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzUsImxvZ2luSWQiOiJteUlkIiwibmlja25hbWUiOiJteU5pY2tuYW1lIiwiaWF0IjoxNjE1ODY3MjM2fQ.3ldJOQmCB8eQvhmTO-VfRwNRPtz56SBSAGtplWHgJJk',
  );
  const dispatch = useDispatch();
  const body = {
    loginId: 'asddddaddf',
    password: 'gggg',
    nickname: 'asdfdsfsd',
  };

  const user = useSelector((state: any) => state.user);
  useEffect(() => {
    dispatch(requestSignUp(body));
    console.log(user);
  });

  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
