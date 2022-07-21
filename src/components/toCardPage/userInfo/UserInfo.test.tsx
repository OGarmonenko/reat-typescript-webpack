import React from 'react';
import UserInfo from '@components/toCardPage/userInfo/UserInfo';
import { fireEvent, render, screen } from '@testing-library/react';
import 'react-datepicker/dist/react-datepicker.css';
import '@testing-library/jest-dom/extend-expect';

const mockSelectedUserInfo = {
  name: 'testName',
  surname: 'testSurname',
  lastname: 'testLastName',
  birthday: '',
  locality: '',
  address: '',
  phone: '',
  email: '',
};
const mockClickSave = jest.fn();
const mockClickCancel = jest.fn();

const props = {
  selectedUserInfo: mockSelectedUserInfo,
  edit: true,
  clickSave: mockClickSave,
  clickCancel: mockClickCancel,
};

describe('Test UserInfo', () => {
  test('should be renders 8 cardRowUser', () => {
    render(<UserInfo {...props} />);
    expect(screen.getAllByTestId('data-cardRowUser')).toHaveLength(8);
  });
  test('should be call mockClickCancel, if click Cancel', () => {
    render(<UserInfo {...props} />);
    fireEvent.click(screen.getByText('Cancel'));
    expect(mockClickCancel).toHaveBeenCalled();
  });
  test('should be call mockClickSave with user data, if click Save', () => {
    render(<UserInfo {...props} />);
    fireEvent.click(screen.getByText('Save'));
    expect(mockClickSave).toHaveBeenCalledWith(mockSelectedUserInfo);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
