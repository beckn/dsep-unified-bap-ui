import axios, {AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApiMethods} from '@constant/common.constant';
import {BASE_URL, PROFILE_BASE_URL} from './endpoints';
import {KeyValue} from '@interfaces/commonInterfaces';

const apiCallInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
});

const profileApiCallInstance = axios.create({
  baseURL: PROFILE_BASE_URL,
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


export const ProfileCallService = async (
  methodType: ApiMethods,
  endpoint: string,
  body?: KeyValue | KeyValue[],
) => {
  if (methodType === ApiMethods.POST) {
    try {
      const response = await profileApiCallInstance.post(endpoint, body);
      return response;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    try {
      const response = await apiCallInstance.get(endpoint);
      return response;
    } catch (error) {
      console.log('error', error);
    }
  }
};

export const callService = async (
  methodType: ApiMethods,
  endpoint: string,
  body?: KeyValue | KeyValue[],
) => {
  if (methodType === ApiMethods.POST) {
    try {
      const response = await apiCallInstance.post(endpoint, body);
      return response;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    try {
      const response = await apiCallInstance.get(endpoint);
      return response;
    } catch (error) {
      console.log('error', error);
    }
  }
};
