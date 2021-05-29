import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import store from 'Modules';
import GlobalStyle from 'Styles/GlobalStyle';
import Header from 'Components/Header/Header';

const queryClient = new QueryClient();

function PsionicStormApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GlobalStyle />
          <ReactQueryDevtools initialIsOpen={false} />
          <Header />
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default PsionicStormApp;
