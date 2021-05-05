import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(cleanup);

  it('matches snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('render', () => {
    render(<App />);
  });

  it('umm..', () => {
    // const { getByText } = render(<App />);
    // const asdf = getByText('asdf');
    // expect(asdf).tobeInthe
  });

  it('1+1', () => {
    expect(1 + 1).toEqual(2);
  });
});
