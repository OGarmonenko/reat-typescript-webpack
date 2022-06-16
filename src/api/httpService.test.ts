import { httpService } from '@api/httpService';
import apiService from '@api/apiService';
import constants from '@constants';
import { AxiosResponse } from 'axios';

const mockData = [
  { id: 1, item: 'test1', date: 1649248316946 },
  { id: 2, item: 'test2', date: 1649918819350 },
];

const mockedResponse: AxiosResponse = {
  data: mockData,
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
};
describe('Test httpService', () => {
  describe('testing get request', () => {
    test('should be call to constants.API.RECORD_URL', async () => {
      const get = jest.spyOn(apiService, 'get');
      get.mockResolvedValue(mockedResponse);
      await httpService.getRecords();
      expect(get).toHaveBeenCalledWith(constants.API.RECORD_URL);
    });

    test('result will be equals mockData', async () => {
      const get = jest.spyOn(apiService, 'get');
      get.mockResolvedValue(mockedResponse);
      const data = await httpService.getRecords();
      expect(data).toBe(mockedResponse.data);
    });
  });

  describe('testing post request', () => {
    const mockPayload = { id: 3, item: 'test3', date: 1649918819381 };

    test('should be call to constants.API.RECORD_URL and need payload', async () => {
      const post = jest.spyOn(apiService, 'post');
      post.mockResolvedValue(mockedResponse);
      await httpService.addRecord(mockPayload);
      expect(post).toHaveBeenCalledWith(constants.API.RECORD_URL, mockPayload);
    });

    test('result will be equals mockedResponse.status', async () => {
      const post = jest.spyOn(apiService, 'post');
      post.mockResolvedValue(mockedResponse);
      const data = await httpService.addRecord(mockPayload);
      expect(data).toBe(mockedResponse.status);
    });
  });

  describe('testing delete Record request', () => {
    const mockPayload = 1649918819381;

    test('should be call to `${constants.API.RECORD_URL}${mockPayload}`', async () => {
      const deleteReq = jest.spyOn(apiService, 'delete');
      deleteReq.mockResolvedValue(mockedResponse);
      await httpService.removeRecord(mockPayload);
      expect(deleteReq).toHaveBeenCalledWith(`${constants.API.RECORD_URL}${mockPayload}`);
    });

    test('result will be equals mockedResponse.status', async () => {
      const deleteReq = jest.spyOn(apiService, 'delete');
      deleteReq.mockResolvedValue(mockedResponse);
      const data = await httpService.removeRecord(mockPayload);
      expect(data).toBe(mockedResponse.status);
    });

    describe('testing update Record request', () => {
      const mockPayload = {
        id: 1,
        data: {
          id: 1,
          item: 'test1',
          date: 1649248316946,
          userInfo: {
            name: '',
            surname: '',
            lastname: '',
            birthday: '',
            locality: '',
            address: '',
            phone: '',
            email: '',
          },
        },
      };

      test('should be call to `${constants.API.RECORD_URL}${mockPayload}`', async () => {
        const updateReq = jest.spyOn(apiService, 'post');
        updateReq.mockResolvedValue(mockedResponse);
        await httpService.updateRecord(mockPayload);
        expect(updateReq).toHaveBeenCalledWith(
          `${constants.API.RECORD_URL}${mockPayload.id}`,
          JSON.parse(JSON.stringify(mockPayload.data)),
        );
      });

      test('result will be equals mockedResponse.status', async () => {
        const updateReq = jest.spyOn(apiService, 'post');
        updateReq.mockResolvedValue(mockedResponse);
        const data = await httpService.updateRecord(mockPayload);
        expect(data).toBe(mockedResponse.status);
      });
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
