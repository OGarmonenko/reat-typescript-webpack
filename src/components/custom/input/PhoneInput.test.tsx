import React from 'react';
import PhoneInput from '@components/custom/input/PhoneInput';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const mockChangePhone = jest.fn();
const mockPhone = '+375 (12) 342-11-66';
const props = {
  placeholder: '',
  type: 'text',
  value: '+375 (12) 342-11-62',
  onChange: mockChangePhone,
};

describe('Test PhoneInput', () => {
  test('renders ', () => {
    render(<PhoneInput {...props} />);
    const phoneInput = screen.getByDisplayValue(props.value);
    expect(screen.getByTestId('phoneInput')).toBeInTheDocument();
    fireEvent.change(phoneInput, { target: { value: mockPhone } });
    expect(mockChangePhone).toHaveBeenCalled();
    expect(phoneInput).toHaveValue('+375 (12) 342-11-66');
  });
});
