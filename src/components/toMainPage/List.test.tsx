import React from 'react';
import List from '@components/toMainPage/List';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom/extend-expect';

const props = {
  title: 'Test',
  records: [
    { id: 1, item: 'test1', date: 1649248316946 },
    { id: 2, item: 'test2', date: 1649918819350 },
  ],
  removeRecord: jest.fn(),
  refreshRoute: jest.fn(),
};

describe('Test List', () => {
  test('test renders title', () => {
    render(<List {...props} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('test renders 2 records', () => {
    render(<List {...props} />);
    expect(screen.getAllByTestId('data-row')).toHaveLength(2);
  });
});
