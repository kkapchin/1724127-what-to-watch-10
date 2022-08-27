import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import { getToken } from './token';
import {StatusCodes} from 'http-status-codes';
import {toast} from 'react-toastify';
import { store } from '../store';
import { setErrorStatus } from '../store/action';
import { clearErrorAction } from '../store/api-actions';
import { TIMEOUT_SHOW_ERROR } from '../const';

const BACKEND_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};
const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];
const customId = 'custom-id-yes';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.info(error.response.data.error, {
          toastId: customId,
          position: toast.POSITION.BOTTOM_LEFT,
        });
        store.dispatch(setErrorStatus(error.response.status));
        setTimeout(
          () => store.dispatch(setErrorStatus(null)),
          TIMEOUT_SHOW_ERROR,
        );
      }

      throw error;
    }
  );

  return api;
};
