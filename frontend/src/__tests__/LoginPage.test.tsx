import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '../pages/LoginPage';

test('renders Login heading', () => {
  render(<LoginPage />);
  const heading = screen.getByText(/Login/i);
  expect(heading).toBeInTheDocument();
});