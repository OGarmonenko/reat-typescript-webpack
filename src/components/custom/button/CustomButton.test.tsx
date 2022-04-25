import React from 'react';
import CustomButton from '@components/custom/button/CustomButton';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

interface CustomButton_Props {
  disabled?: boolean;
  children: React.ReactChild;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const clicked = jest.fn();
const props: CustomButton_Props = {
  disabled: false,
  children: 'OK',
  onClick: clicked,
};

describe('Test CustomButton', () => {
  test('test render button', () => {
    render(<CustomButton {...props} />);
    expect(screen.getByText('OK')).toBeInTheDocument();
  });

  test('test not disabled', () => {
    render(<CustomButton {...props} />);
    expect(screen.getByText('OK')).not.toBeDisabled();
  });

  test('test click event ', () => {
    render(<CustomButton {...props} />);
    fireEvent.click(screen.getByText('OK'));
    expect(clicked).toHaveBeenCalled();
  });

  test('test disabled', () => {
    props.disabled = true;
    render(<CustomButton {...props} />);
    expect(screen.getByText('OK')).toBeDisabled();
  });

  test('test not click event', () => {
    props.disabled = true;
    render(<CustomButton {...props} />);
    fireEvent.click(screen.getByText('OK'));
    expect(clicked).not.toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
