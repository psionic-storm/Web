import GlobalStyle from 'Styles/GlobalStyle.tsx'
import { withNextRouter } from 'storybook-addon-next-router';
import { addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { QueryClient, QueryClientProvider } from 'react-query';
import userReducer from 'Slices/userSlice';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const queryClient = new QueryClient();

const mockStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const decorators = [
  (Story) => (
      <QueryClientProvider client={queryClient}>
        <Provider store={mockStore}>
          <GlobalStyle />
          <Story />
        </Provider>
      </QueryClientProvider>
  ),
];

addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {} // defaults to using addon actions integration, can override any method in the router
  })
);