import React from 'react';
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainPage from '@pages/main/MainPage';
import { Router } from 'react-router-dom';
import { httpService } from '@api/httpService';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory({ initialEntries: ['/'] });
const mockData = [{ id: 1, item: 'test1', date: 1649248316946 }];
const mockedResponse = {
  data: mockData,
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
};

const getRecords = jest.spyOn(httpService, 'getRecords');
const addRecord = jest.spyOn(httpService, 'addRecord');
const removeRecord = jest.spyOn(httpService, 'removeRecord');

const componentMainPage = (
  <Router location={history.location} navigator={history}>
    <MainPage />
  </Router>
);

describe('Test MainPage with initial state', () => {
  test('should be renders record and not renders "Not records"', async () => {
    getRecords.mockResolvedValue(mockData);
    render(componentMainPage);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    await waitFor(() => expect(getRecords).toHaveBeenCalled());
    const records = await screen.findAllByTestId('data-row');
    expect(records.length).toBe(1);
    expect(screen.queryByTestId('emptyRecords')).not.toBeInTheDocument();
  });

  test('should be renders record "Not records, if not records"', async () => {
    const mockData: any = [];
    getRecords.mockResolvedValue(mockData);
    render(componentMainPage);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    await waitFor(() => expect(getRecords).toHaveBeenCalled());
    expect(screen.queryByTestId('data-list')).not.toBeInTheDocument();
    expect(screen.getByTestId('emptyRecords')).toBeInTheDocument();
  });

  test('refresh route when clicked on row', async () => {
    getRecords.mockResolvedValue(mockData);
    render(componentMainPage);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    await waitFor(() => expect(getRecords).toHaveBeenCalled());
    fireEvent.click(screen.getByTestId('data-row'));
    expect(history.location.pathname).toBe('/card/1');
  });

  test('httpService is called, if click on button "Add"', async () => {
    getRecords.mockResolvedValue(mockData);
    addRecord.mockResolvedValue(mockedResponse.status);
    render(componentMainPage);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    await waitFor(() => expect(getRecords).toHaveBeenCalled());
    const input = screen.getByTestId('customInput');
    fireEvent.change(input, { target: { value: 'test2' } });
    const button = screen.getByText('Add');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() => expect(addRecord).toHaveBeenCalled());
  });

  test('httpService is called, if click on button "Delete"', async () => {
    getRecords.mockResolvedValue(mockData);
    removeRecord.mockResolvedValue(mockedResponse.status);
    render(componentMainPage);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    await waitFor(() => expect(getRecords).toHaveBeenCalled());
    expect(screen.getByText('Delete')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Delete'));
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    await waitFor(() => expect(removeRecord).toHaveBeenCalled());
  });

  test('should be modal window, if got error after get request', async () => {
    getRecords.mockRejectedValue(new Error('error'));
    render(componentMainPage);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    await waitFor(() => expect(getRecords).toHaveBeenCalled());
    expect(screen.queryByTestId('data-modal')).toBeInTheDocument();
    fireEvent.click(screen.getByText('OK'));
    expect(screen.queryByTestId('data-modal')).not.toBeInTheDocument();
  });

  test('should be modal window, if got error after delete request', async () => {
    getRecords.mockResolvedValue(mockData);
    removeRecord.mockRejectedValue(new Error('error'));
    render(componentMainPage);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    await waitFor(() => expect(getRecords).toHaveBeenCalled());
    expect(screen.getByText('Delete')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Delete'));
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    await waitFor(() => expect(removeRecord).toHaveBeenCalled());
    expect(screen.queryByTestId('data-modal')).toBeInTheDocument();
    expect(screen.getByTestId('data-title').textContent).toEqual('Error');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
