import React from 'react';
import { Head } from 'next/document';
// import Index from 'Pages/index';
import App, { AppProps } from 'next/app';

function PsionicStormApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default PsionicStormApp;
