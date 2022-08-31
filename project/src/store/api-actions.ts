import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance as AxiosInstanceType } from 'axios';
import { APIRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AppDispatchType } from '../types/app-dispatch-type';
import { AuthDataType } from '../types/auth-data-type';
import { FilmType } from '../types/film-type';
import { NewReviewType } from '../types/new-review-type';
import { ReviewType } from '../types/review-type';
import { StateType } from '../types/state-type';
import { UserDataType } from '../types/user-data-type';
import { redirectToRoute } from './action';

export const fetchFilmsAction = createAsyncThunk<FilmType[], undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'data/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmType[]>(APIRoute.Films);
    return data;
  },
);

export const fetchPromoAction = createAsyncThunk<FilmType, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'data/fetchPromo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmType>(APIRoute.Promo);
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<FilmType[], string | undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'data/fetchSimilarFilms',
  async (id, {extra: api}) => {
    const {data} = await api.get<FilmType[]>(`${APIRoute.Films}/${id}/similar`);
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<FilmType, string | undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'data/fetchFilmById',
  async (id, {extra: api}) => {
    const {data} = await api.get<FilmType>(`${APIRoute.Films}/${id}`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<ReviewType[], string | undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'data/fetchReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserDataType, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<UserDataType>(APIRoute.Login);
    saveToken(data.token);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserDataType, AuthDataType, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const { data } = await api.post<UserDataType>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const postReviewAction = createAsyncThunk<void, NewReviewType, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstanceType
}>(
  'comments/addNewComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post<UserDataType>(`${APIRoute.Comments}/${id}`, {comment, rating});
    dispatch(redirectToRoute(`${APIRoute.Films}/${String(id)}`));
  },
);
