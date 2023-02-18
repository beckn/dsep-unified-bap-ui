import axios, {AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApiMethods} from '@constant/common.constant';
import {BASE_URL} from './endpoints';
import {KeyValue} from '@interfaces/commonInterfaces';

const apiCallInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
});

apiCallInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    config.headers['Access-Control-Allow-Origin'] = '*';
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export const callService = async (
  methodType: ApiMethods,
  endpoint: string,
  body?: KeyValue | KeyValue[],
) => {
  if (methodType === ApiMethods.POST) {
    try {
      const response = await apiCallInstance.post(endpoint, body);
      console.log("api repsonse", response);
      return response;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    try {
      const response = await apiCallInstance.get(endpoint);
      console.log("api get repsonse", response);
      return response;
    } catch (error) {
      console.log('error', error);
    }
  }
};
