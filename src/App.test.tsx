import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('render', () => {
    render(<App />);
  });

  it('1+1', () => {
    expect(1 + 1).toEqual(2);
  });
});
