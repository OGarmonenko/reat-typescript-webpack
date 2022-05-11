import constants from '@constants';
import axios from 'axios';

const apiService = axios.create({
  baseURL: constants.API.BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default apiService;
