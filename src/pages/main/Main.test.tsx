import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainPage from '@pages/main/MainPage';
import { BrowserRouter as Router } from 'react-router-dom';

const componentMainPage = (
  <Router>
    <MainPage />
  </Router>
);

describe('Test MainPage with initial state', () => {
  test('test renders header', () => {
    render(componentMainPage);
    expect(screen.queryByTestId('data-header')).toBeInTheDocument();
  });

  test('test not renders records content', () => {
    render(componentMainPage);
    expect(screen.queryByTestId('data-content')).toBeNull();
  });

  test('test not renders "Loading..."', () => {
    render(componentMainPage);
    expect(screen.queryByTestId('data-load')).toBeInTheDocument();
  });

  test('test not renders modal window', () => {
    render(componentMainPage);
    expect(screen.queryByTestId('data-modal')).not.toBeInTheDocument();
  });

  /*describe('Test MainPage when records.length = 0', () => {});

  describe('Test MainPage when records.length > 0', () => {});*/
});
