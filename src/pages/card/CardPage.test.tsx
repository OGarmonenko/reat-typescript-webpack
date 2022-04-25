import React from 'react';
import CardPage from '@pages/card/CardPage';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';

const componentCardPage = (
  <>
    <Router>
      <CardPage />
    </Router>
  </>
);

describe('Test CardPage', () => {
  test('test renders navbar', () => {
    render(componentCardPage);
    expect(screen.getByTestId('data-navbar')).toBeInTheDocument();
  });
  test('test renders cardItem', () => {
    render(componentCardPage);
    expect(screen.getByTestId('data-carditem')).toBeInTheDocument();
  });
});
