import React from 'react';
import Header from './Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Test Header', () => {
  const props = {
    handleClickAdd: jest.fn(),
  };

  test('test renders custominput', () => {
    render(<Header {...props} />);
    expect(screen.getByPlaceholderText('Enter record...')).toBeInTheDocument();
  });

  test('test renders custombutton ', () => {
    render(<Header {...props} />);
    expect(screen.getByText('Add')).toBeInTheDocument();
  });
});
