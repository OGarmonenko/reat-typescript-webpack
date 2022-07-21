import React from 'react';
import UserInfoItem from '@components/toCardPage/userInfo/UserInfoItem';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const mockChangeInput = jest.fn();
const props = {
  handleChange: mockChangeInput,
  handleDateChange: jest.fn(),
  userData: 'test',
  type: '',
  item: '',
  edit: false,
};

jest.mock('@components/custom/input/DatePickerInput', () => ({
  DatePickerInput: jest.fn(() => <div data-testid="DatePickerInput" />),
}));

describe('Test UserInfoItem', () => {
  test('should be renders span if !edit', () => {
    render(<UserInfoItem {...props} />);
    const spanElement = screen.getByTestId('spanItem');
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveTextContent(props.userData);
    expect(screen.queryByTestId('inputItem')).not.toBeInTheDocument();
  });

  test('should be renders input if edit ', () => {
    props.edit = true;
    render(<UserInfoItem {...props} />);
    const inputElement = screen.getByTestId('inputItem');
    expect(inputElement).toBeInTheDocument();
    expect(screen.queryByTestId('spanItem')).not.toBeInTheDocument();
    expect(inputElement).toHaveValue(props.userData);
    fireEvent.change(inputElement, { target: { value: 'test2' } });
    expect(mockChangeInput).toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
