import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardPage from '../pages/DashboardPage';

test('renders Dashboard heading', () => {
  render(<DashboardPage />);
  const heading = screen.getByText(/Dashboard/i);
  expect(heading).toBeInTheDocument();
});