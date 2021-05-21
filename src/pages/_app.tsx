import React from 'react';
import { AppProps } from 'next/app';

function PsionicStormApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default PsionicStormApp;
