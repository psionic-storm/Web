import React, { useEffect } from 'react';
import GlobalStyle from 'Styles/GlobalStyle';
import AppRoutes from 'Routes/AppRoutes';
import { getAllQuotes, getAllReviews } from 'Apis/squareAPI';
import { getSpace, updateSpace } from 'Apis/spaceAPI';

function App() {
  localStorage.setItem(
    'accessToken',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzUsImxvZ2luSWQiOiJteUlkIiwibmlja25hbWUiOiJteU5pY2tuYW1lIiwiaWF0IjoxNjE1ODY3MjM2fQ.3ldJOQmCB8eQvhmTO-VfRwNRPtz56SBSAGtplWHgJJk',
  );
  const body = {
    loginId: 'asdddaddf',
    password: 'gggg',
  };

  useEffect(() => {
    const a = updateSpace({ spaceId: 3, name: 'updated spaceId' });
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
