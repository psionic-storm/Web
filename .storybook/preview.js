import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import GlobalStyle from '../src/styles/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: [
        'pages',
        ['Main', 'SignIn'],
        'components',
        ['common', ['Button'], 'icons', ['Heart'], 'AuthForm', 'Header'],
      ],
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <MemoryRouter>
        <GlobalStyle />
        <Story />
      </MemoryRouter>
    </>
  ),
];
