import React from 'react';
import Navbar from '@components/common/navbar/Navbar';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const history = createMemoryHistory({ initialEntries: ['/card/12'] });

const componentNavbar = (
  <Router location={history.location} navigator={history}>
    <Navbar />
  </Router>
);

describe('Test Navbar', () => {
  test('renders icon arrowLeft and alt attributes', () => {
    render(componentNavbar);
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('alt', 'main');
  });

  test('renders div - button with name Main', () => {
    render(componentNavbar);
    expect(screen.getByText('Main')).toBeInTheDocument();
  });

  test('should be path = "/" after click on button', () => {
    render(componentNavbar);
    expect(history.location.pathname).toBe('/card/12');
    fireEvent.click(screen.getByRole('button'));
    expect(history.location.pathname).toBe('/');
  });
});
