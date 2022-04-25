import React from 'react';
import Navbar from '@components/common/navbar/Navbar';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

const componentNavbar = (
  <>
    <Router>
      <Navbar />
    </Router>
  </>
);

describe('Test Navbar', () => {
  test('test renders Navbar component', () => {
    render(componentNavbar);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('test renders icon arrowLeft ', () => {
    render(componentNavbar);
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('alt', 'main');
  });
});
