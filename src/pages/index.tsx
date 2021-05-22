import Header from 'Components/Header/Header';
import React from 'react';
import GlobalStyle from 'Styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function Index() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <Header />
    </>
  );
}

export default Index;
