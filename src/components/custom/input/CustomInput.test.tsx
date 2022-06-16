import React from 'react';
import CustomInput from '@components/custom/input/CustomInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const props = {
  placeholder: 'Enter record...',
  type: 'text',
  value: '',
  onChange: jest.fn(),
};

describe('Test CustomInput', () => {
  test('renders input', () => {
    render(<CustomInput {...props} />);
    expect(screen.getByTestId('customInput')).toBeInTheDocument();
  });
});
