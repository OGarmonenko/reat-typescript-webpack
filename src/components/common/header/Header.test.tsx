import React from 'react';
import Header from '@components/common/header/Header';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
describe('Test Header', () => {
  const mockHandleClickAdd = jest.fn();
  const props = {
    handleClickAdd: mockHandleClickAdd,
  };

  test('renders custominput with placeholder "Enter record..." ', () => {
    render(<Header {...props} />);
    expect(screen.getByPlaceholderText('Enter record...')).toBeInTheDocument();
  });

  test('renders button with name "Add"', () => {
    render(<Header {...props} />);
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  test('empty input value after button click', async () => {
    render(<Header {...props} />);
    const input = screen.getByTestId('customInput') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test1' } });
    fireEvent.click(screen.getByTestId('buttonElement'));
    expect(mockHandleClickAdd).toHaveBeenCalled();
    expect(input).toHaveValue('');
  });

  test('validation input, input value do not have russian letters', () => {
    render(<Header {...props} />);
    const input = screen.getByTestId('customInput');
    fireEvent.change(input, { target: { value: '0' } });
    expect(input).toHaveValue('0');
    fireEvent.change(input, { target: { value: 'щ12Щ' } });
    expect(input).toHaveValue('12');
    fireEvent.change(input, { target: { value: 's12' } });
    expect(input).toHaveValue('s12');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
