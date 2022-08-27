import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance as AxiosInstanceType } from 'axios';
import { APIRoute, AppRoute, AuthorizationStatus, BLANK_USER_DATA } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AppDispatchType } from '../types/app-dispatch-type';
import { AuthDataType } from '../types/auth-data-type';
import { FilmType } from '../types/film-type';
import { ReviewType } from '../types/review-type';
import { StateType } from '../types/state-type';
import { UserDataType } from '../types/user-data-type';
import { redirectToRoute, setAuthorizationStatus, setFilm, setFilms, setIsDataLoading, setReviews, setUserData } from './action';

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

export const fetchFilmAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'data/fetchFilmById',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmType>(`${APIRoute.Films}/${id}`);
      dispatch(setFilm(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${id}`);
    dispatch(setReviews(data));
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
      const { data } = await api.get<UserDataType>(APIRoute.Login);
      saveToken(data.token);
      dispatch(setUserData(data));
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
    const { data } = await api.post<UserDataType>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setUserData(data));
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setUserData(BLANK_USER_DATA));
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);
