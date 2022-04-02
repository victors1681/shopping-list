import axios, { AxiosRequestConfig } from 'axios';
export enum NetworkStatus {
  INITIAL = 0,
  LOADING = 1,
  SUCCESS = 2,
  ERROR = 3,
}

const restClient = axios.create({ responseType: 'json' });
export const getExceptions = (config: AxiosRequestConfig, baseURL?: string) => {
  if (baseURL) {
    config.baseURL = baseURL;
  } 
  return config;
}; 

export const configureRestClient = (baseURL?: string): void => {
  restClient.interceptors.request.use((config) => {
    const newConfig = { ...getExceptions(config, baseURL) };
    return newConfig;
  });
};

export default restClient;
