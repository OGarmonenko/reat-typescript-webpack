import React from 'react';
import ListItem from '@components/toMainPage/ListItem';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Record_Props } from '@interfaces/interfaceRecordProps';

interface ListItem_Props {
  record: Record_Props;
  onRemove: (recordID: number) => void;
  onClickRecord: (recordID: number) => void;
}

const clickedRow = jest.fn();
const props: ListItem_Props = {
  record: { id: 1, item: 'test1', date: 1649248316946 },
  onRemove: jest.fn(),
  onClickRecord: clickedRow,
};

describe('Test ListItem', () => {
  test('test render input', () => {
    render(<ListItem {...props} />);
    expect(screen.getByTestId('item')).toContainHTML('test1');
    expect(screen.getByTestId('numbers')).toContainHTML('1');
    expect(screen.getByTestId('date')).toContainHTML('06/04/2022 - 3:31:56');
  });

  test('test click event on row ', () => {
    render(<ListItem {...props} />);
    fireEvent.click(screen.getByTestId('data-row'));
    expect(clickedRow).toHaveBeenCalled();
  });

  test('test render CustomButton ', () => {
    render(<ListItem {...props} />);
    const buttonElement = screen.getByTestId('buttonElement');
    expect(buttonElement).toContainHTML('Delete');
  });
});
