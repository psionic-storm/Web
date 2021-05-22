import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from 'Styles/GlobalStyle';

function PsionicStormApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default PsionicStormApp;
