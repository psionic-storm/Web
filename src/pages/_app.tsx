import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import store from 'src/slices';
import GlobalStyle from 'Styles/GlobalStyle';

const queryClient = new QueryClient();

function PsionicStormApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GlobalStyle />
          <ReactQueryDevtools initialIsOpen={false} />
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default PsionicStormApp;
