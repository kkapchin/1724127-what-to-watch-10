import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance as AxiosInstanceType } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const';
import { saveToken } from '../services/token';
import { AppDispatchType } from '../types/app-dispatch-type';
import { AuthDataType } from '../types/auth-data-type';
import { FilmType } from '../types/film-type';
import { StateType } from '../types/state-type';
import { UserDataType } from '../types/user-data-type';
import { setAuthorizationStatus, setFilms, setIsDataLoading } from './action';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setIsDataLoading(true));
    const {data} = await api.get<FilmType[]>(APIRoute.Films);
    dispatch(setFilms(data));
    dispatch(setIsDataLoading(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthDataType, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserDataType>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  },
);
