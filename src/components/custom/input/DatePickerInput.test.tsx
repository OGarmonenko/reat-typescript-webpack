import React from 'react';
import DatePickerInput from '@components/custom/input/DatePickerInput';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const mockChangeDate = jest.fn();
const mockDate = '18/05/2022';
const props = {
  handleDateChange: mockChangeDate,
  value: '17/05/2022',
};

describe('Test DatePickerInput', () => {
  test('renders ', () => {
    render(<DatePickerInput {...props} />);
    const datePicker = screen.getByDisplayValue(props.value);
    expect(datePicker).toBeInTheDocument();
    fireEvent.change(datePicker, { target: { value: mockDate } });
    expect(mockChangeDate).toHaveBeenCalled();
    expect(datePicker).toHaveValue('18/05/2022');
  });
});
