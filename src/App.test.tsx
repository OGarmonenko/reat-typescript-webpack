import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '@app';

const componentApp = (
  <Router>
    <App />
  </Router>
);

describe('Test App with start page', () => {
  test('test renders MainPage in App', () => {
    render(componentApp);
    expect(screen.getByTestId('mainPage')).toBeInTheDocument();
  });

  test('test not renders CardPage in App', () => {
    render(componentApp);
    expect(screen.queryByTestId('cardPage')).not.toBeInTheDocument();
  });
});
