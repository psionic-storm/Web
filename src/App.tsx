import React from 'react';
import GlobalStyle from 'Styles/GlobalStyle';
import Header from 'Components/Header/Header';
import AppRoutes from 'Routes/AppRoutes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
