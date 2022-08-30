import apiService from '@api/apiService';
import { AxiosResponse } from 'axios';
import constants from '@constants';
import { IUser_Auth } from '@interfaces/IUser_Auth';
import { IUser_Reg } from '@interfaces/IUser_Reg';

export const authService = {
  login: (payload: IUser_Auth): Promise<AxiosResponse> => {
    return apiService.post(constants.API.AUTH_URL, payload).then((response: AxiosResponse) => response);
  },
  registration: (payload: IUser_Reg): Promise<AxiosResponse> => {
    return apiService.post(constants.API.REGISTRATION_URL, payload).then((response: AxiosResponse) => response);
  },
};
