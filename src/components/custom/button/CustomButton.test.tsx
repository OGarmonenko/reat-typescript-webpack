import React from 'react';
import CustomButton from '@components/custom/button/CustomButton';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

interface CustomButton_Props {
  disabled?: boolean;
  children: React.ReactChild;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

describe('Test CustomButton', () => {
  const props: CustomButton_Props = {
    disabled: true,
    children: 'OK',
    onClick: jest.fn(),
  };
  test('render button', () => {
    render(<CustomButton {...props} />);
    expect(screen.getByText('OK')).toBeInTheDocument();
  });

  test('test disabled', () => {
    render(<CustomButton {...props} />);
    expect(screen.getByText('OK')).toBeDisabled();
  });

  test('Test click event ', async () => {
    const clickMock = jest.fn();
    const props: CustomButton_Props = {
      disabled: false,
      children: 'OK',
      onClick: clickMock,
    };
    render(<CustomButton {...props} />);
    await userEvent.click(screen.getByText('OK'));
    expect(clickMock).toBeCalled();
  });

  /*  test('double click', () => {
        const onChange = jest.fn();
        render(<input type="checkbox" onChange={onChange} />);
        const checkbox = screen.getByRole('checkbox');
        userEvent.click(checkbox);
        expect(onChange).toBeCalled();
        expect(checkbox).not.toBeChecked();
    });

    test('click', async () => {
        render(
            <div>
                <label htmlFor="checkbox">Check</label>
                <input id="checkbox" type="checkbox"/>
            </div>,
        );

        await userEvent.click(screen.getByText('Check'));
        expect(screen.getByLabelText('Check')).toBeChecked();
    });*/
});
