import apiService from '@api/apiService';
import { Record_Props } from '@interfaces/interfaceRecordProps';
import { AxiosResponse } from 'axios';
import constants from '@constants';

export const httpService = {
  getRecords: (payload: AbortSignal): Promise<Record_Props[]> => {
    return apiService
      .get(constants.API.RECORD_URL, { signal: payload })
      .then((response: AxiosResponse) => response.data);
  },
  addRecord: (payload: Record_Props): Promise<number> => {
    return apiService.post(constants.API.RECORD_URL, payload).then((response: AxiosResponse) => response.status);
  },
  removeRecord: (payload: number): Promise<number> => {
    return apiService
      .delete(`${constants.API.RECORD_URL}${payload}`)
      .then((response: AxiosResponse) => response.status);
  },
  updateRecord: (payload: { [key: string]: number | Record_Props }) => {
    return apiService
      .post(`${constants.API.RECORD_URL}${payload.id}`, payload.data)
      .then((response: AxiosResponse) => response.status);
  },
};
