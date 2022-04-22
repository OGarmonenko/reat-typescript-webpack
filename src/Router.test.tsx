import React from 'react';
import App from '@app';
import { render, screen } from '@testing-library/react';
//import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
//import Header from "@components/common/header/Header";

test('Validation data', () => {
  render(<App />);
  //    const customInput = screen.getByPlaceholderText('Enter record...');
  //    expect(customInput).toBeInTheDocument();
  screen.debug();
});
