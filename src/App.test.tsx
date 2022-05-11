import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import App from '@app';
import { createMemoryHistory } from 'history';

describe('Test App', () => {
  describe('renders MainPage', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const componentApp = (
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    test('renders MainPage if path = "/"', () => {
      render(componentApp);
      expect(screen.getByTestId('mainPage')).toBeInTheDocument();
    });
    test('do not renders CardPage if path = "/"', () => {
      render(componentApp);
      expect(screen.queryByTestId('cardPage')).not.toBeInTheDocument();
    });
  });

  describe('renders CardPage', () => {
    const history = createMemoryHistory({ initialEntries: ['/card/12'] });
    const componentApp = (
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    test('do not renders MainPage if path = "/card/:id"', () => {
      render(componentApp);
      expect(screen.queryByTestId('mainPage')).not.toBeInTheDocument();
    });
    test('renders CardPage if path = "/card/:id"', () => {
      render(componentApp);
      expect(screen.getByTestId('cardPage')).toBeInTheDocument();
    });
  });
});
