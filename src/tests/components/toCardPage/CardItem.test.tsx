import React from 'react';
import RecordItem from '../../../components/toCardPage/recordItem/RecordItem';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const props = {
  selectedRecord: { id: 1, item: 'test1', date: 1649248316946 },
};

describe('Test RecordItem', () => {
  test('test renders card', () => {
    render(<RecordItem {...props} />);
    expect(screen.getByText('test1')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('06/04/2022 - 3:31:56')).toBeInTheDocument();
  });
});
