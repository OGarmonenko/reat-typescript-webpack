import React from 'react';
import CardPage from '@pages/card/CardPage';
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { storeService } from '../../store/storeService';
import { httpService } from '../../api/httpService';

const mockSelectedRecord = {
  id: 1881,
  item: '',
  date: 6811686545,
  userInfo: {
    name: 'testName',
    surname: 'testSurname',
    lastname: 'testLastname',
    birthday: '',
    locality: '',
    address: '',
    phone: '',
    email: '',
  },
};

const mockedResponse = {
  data: mockSelectedRecord,
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
};

const findRecord = jest.spyOn(storeService, 'findRecord');
const updateRecord = jest.spyOn(httpService, 'updateRecord');

const componentCardPage = (
  <Router>
    <CardPage />
  </Router>
);

describe('Test CardPage', () => {
  beforeEach(() => {
    findRecord.mockReturnValue(mockSelectedRecord);
  });

  test('should be navbar', () => {
    render(componentCardPage);
    expect(screen.getByTestId('data-navbar')).toBeInTheDocument();
  });

  test('should be renders cardItem', () => {
    render(componentCardPage);
    expect(screen.getByTestId('data-carditem')).toBeInTheDocument();
  });

  test('should be renders modal-window after click on Edit button', () => {
    render(componentCardPage);
    expect(screen.getByTestId('data-userInfo')).toBeInTheDocument();
    const buttonEdit = screen.getByRole('button', { name: 'Edit' });
    expect(buttonEdit).toBeInTheDocument();
    fireEvent.click(buttonEdit);
    expect(screen.getByTestId('data-modal')).toBeInTheDocument();
  });

  test('should be closed modal-window after click on Close button', () => {
    render(componentCardPage);
    const buttonEdit = screen.getByRole('button', { name: 'Edit' });
    expect(buttonEdit).toBeInTheDocument();
    fireEvent.click(buttonEdit);
    expect(screen.getByTestId('data-modal')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('close-button'));
    expect(screen.queryByTestId('data-modal')).not.toBeInTheDocument();
    expect(updateRecord).not.toHaveBeenCalled();
  });

  test('should be closed modal-window after click on Cancel button', () => {
    render(componentCardPage);
    const buttonEdit = screen.getByRole('button', { name: 'Edit' });
    expect(buttonEdit).toBeInTheDocument();
    fireEvent.click(buttonEdit);
    expect(screen.getByTestId('data-modal')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByTestId('data-modal')).not.toBeInTheDocument();
    expect(updateRecord).not.toHaveBeenCalled();
  });

  test('should be closed modal-window after click on Cancel button', () => {
    render(componentCardPage);
    const buttonEdit = screen.getByRole('button', { name: 'Edit' });
    expect(buttonEdit).toBeInTheDocument();
    fireEvent.click(buttonEdit);
    expect(screen.getByTestId('data-modal')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByTestId('data-modal')).not.toBeInTheDocument();
  });

  test('should be closed modal-window after click on Save and called to function updateRecord', async () => {
    updateRecord.mockResolvedValue(mockedResponse.status);
    render(componentCardPage);
    const buttonEdit = screen.getByRole('button', { name: 'Edit' });
    expect(buttonEdit).toBeInTheDocument();
    fireEvent.click(buttonEdit);
    expect(screen.getByTestId('data-modal')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.queryByTestId('data-modal')).not.toBeInTheDocument();
    await waitFor(() => expect(updateRecord).toHaveBeenCalled());
  });

  test('should be closed modal window, if got error after update request', async () => {
    updateRecord.mockRejectedValue(new Error('error'));
    render(componentCardPage);
    const buttonEdit = screen.getByRole('button', { name: 'Edit' });
    expect(buttonEdit).toBeInTheDocument();
    fireEvent.click(buttonEdit);
    expect(screen.getByTestId('data-modal')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.queryByTestId('data-modal')).not.toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId('data-loading'));
    await waitFor(() => expect(updateRecord).toHaveBeenCalled());
    expect(screen.getByTestId('data-modal')).toBeInTheDocument();
    expect(screen.getByTestId('data-title').textContent).toEqual('Error');
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
