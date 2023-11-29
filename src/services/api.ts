import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';
import { BASE_URL, REQUEST_TIMEOUT } from '../const';
import { StatusCodes } from 'http-status-codes';
import { processErrorHandle } from './process-error-handle';
import { offersLoading } from '../store/action';
import { store } from '../store';
import { getToken } from './token';

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    // (config: AxiosRequestConfig) => { // TODO
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );


  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);
        store.dispatch(offersLoading(false));
        processErrorHandle(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
