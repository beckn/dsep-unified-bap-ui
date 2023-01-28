import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ApiMethods} from "@constant/common.constant";
import { BASE_URL } from "./endpoints";


const apiCallInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
});

apiCallInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  error => {
    Promise.reject(error);
  },
);


export const callService = async (methodType, endpoint, body) => {
  if (methodType === ApiMethods.POST) {
    try {
      const response = await apiCallInstance.post(endpoint, body);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  } else {
    try {
      const response = await apiCallInstance.get(endpoint);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  }
};
