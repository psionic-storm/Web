import React from 'react';
import { AppProps } from 'next/app';

import store from 'Modules';
import { Provider } from 'react-redux';

function PsionicStormApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default PsionicStormApp;
