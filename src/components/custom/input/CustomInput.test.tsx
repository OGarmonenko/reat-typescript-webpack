import React from 'react';
import CustomInput from '@components/custom/input/CustomInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

interface CustomInput_Props {
  placeholder: string;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  type: any;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const props: CustomInput_Props = {
  placeholder: 'Enter record...',
  type: 'text',
  value: '',
  onChange: jest.fn(),
};

describe('Test CustomInput', () => {
  test('test render input', () => {
    render(<CustomInput {...props} />);
    expect(screen.getByTestId('customInput')).toBeInTheDocument();
  });
});
