import apiService from '@api/apiService';
import { Record_Props } from '@interfaces/interfaceRecordProps';
import constants from '@constants';
import { AxiosResponse } from 'axios';

export const httpService = {
  getRecords: (): Promise<Record_Props[]> => {
    return apiService.get(constants.API.RECORD_URL).then((response: AxiosResponse) => response.data);
  },
  addRecord: (payload: Record_Props): Promise<number> => {
    return apiService.post(constants.API.RECORD_URL, payload).then((response: AxiosResponse) => response.status);
  },
  removeRecord: (payload: number): Promise<number> => {
    return apiService
      .delete(`${constants.API.RECORD_URL}${payload}`)
      .then((response: AxiosResponse) => response.status);
  },
};
