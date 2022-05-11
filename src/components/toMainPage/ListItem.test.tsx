import React from 'react';
import ListItem from '@components/toMainPage/ListItem';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const mockOnClickedRow = jest.fn();
const mockOnRemove = jest.fn();
const props = {
  record: { id: 1, item: 'test1', date: 1649248316946 },
  onRemove: mockOnRemove,
  onClickRecord: mockOnClickedRow,
};

describe('Test ListItem', () => {
  describe('testing row', () => {
    test('renders record with props data', () => {
      render(<ListItem {...props} />);
      expect(screen.getByTestId('item')).toContainHTML('test1');
      expect(screen.getByTestId('numbers')).toContainHTML('1');
      expect(screen.getByTestId('date')).toContainHTML('06/04/2022 - 3:31:56');
    });

    test('should be call to onClickRecord after click on row ', () => {
      render(<ListItem {...props} />);
      fireEvent.click(screen.getByTestId('data-row'));
      expect(mockOnClickedRow).toHaveBeenCalled();
    });

    test('should be call to onClickRecord after click on row ', () => {
      render(<ListItem {...props} />);
      fireEvent.click(screen.getByTestId('data-row'));
      expect(mockOnClickedRow).toHaveBeenCalled();
    });

    test('not should be call to onClickRecord if window.getSelection123', () => {
      render(<ListItem {...props} />);
      const selection = jest.spyOn(window, 'getSelection');
      selection.mockReturnValue(null);
      fireEvent.click(screen.getByTestId('data-row'));
      expect(mockOnClickedRow).toHaveBeenCalled();
    });

    describe('testing button12', () => {
      test('renders CustomButton with name Delete', () => {
        render(<ListItem {...props} />);
        expect(screen.getByTestId('buttonElement')).toContainHTML('Delete');
      });

      test('should be call to onRemove after click on button ', () => {
        render(<ListItem {...props} />);
        const buttonElement = screen.getByTestId('buttonElement');
        fireEvent.click(buttonElement);
        expect(mockOnRemove).toHaveBeenCalledWith(props.record.id);
      });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
