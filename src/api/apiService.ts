/*import axios, {AxiosResponse} from "axios";
import {Record_Props} from "@interfaces/interfaceRecordProps";*/
import constants from '../constants/constants';
import axios from 'axios';

const apiService = axios.create({
    baseURL: constants.API.BASE_URL,
    headers: {
        'Content-type': 'application/json'
    }
});

export default apiService;