import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('should show login form', () => {
  render(<Button>버튼</Button>);
  const input = screen.getByText('Username');
});