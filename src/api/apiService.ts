import constants from '@constants';
import axios from 'axios';
import { browserHistory } from '@history/history';
import { HttpStatusCode } from '@enums';

const apiService = axios.create({
  baseURL: constants.API.BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

apiService.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
  return config;
});

apiService.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response.status === HttpStatusCode.AUTH_ERROR) {
      browserHistory.push(constants.ROUTES.AUTH_PATH);
      throw new Error(err.response.data.message);
    } else if (err.response.data.message) {
      throw new Error(err.response.data.message);
    }
    return Promise.reject(err);
  },
);
export default apiService;
