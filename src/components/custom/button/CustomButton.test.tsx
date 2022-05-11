import React from 'react';
import CustomButton from '@components/custom/button/CustomButton';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const clicked = jest.fn();
const props = {
  disabled: false,
  children: 'OK',
  onClick: clicked,
};

describe('Test CustomButton', () => {
  test('renders button with item of children ', () => {
    render(<CustomButton {...props} />);
    expect(screen.getByText('OK')).toBeInTheDocument();
  });

  test('buttons will be not disabled when disabled = false', () => {
    render(<CustomButton {...props} />);
    expect(screen.getByText('OK')).not.toBeDisabled();
  });

  test('click event called if button is not disabled', () => {
    render(<CustomButton {...props} />);
    fireEvent.click(screen.getByText('OK'));
    expect(clicked).toHaveBeenCalled();
  });

  test('buttons will be disabled when disabled = true', () => {
    props.disabled = true;
    render(<CustomButton {...props} />);
    expect(screen.getByText('OK')).toBeDisabled();
  });

  test('click event did not called if button is disabled', () => {
    props.disabled = true;
    render(<CustomButton {...props} />);
    fireEvent.click(screen.getByText('OK'));
    expect(clicked).not.toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
