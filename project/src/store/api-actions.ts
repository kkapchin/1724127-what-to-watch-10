import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { AppDispatchType } from '../types/app-dispatch-type';
import { FilmType } from '../types/film-type';
import { StateType } from '../types/state-type';
import { loadFilms, setIsDataLoading } from './action';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType[]>(APIRoute.Films);
    dispatch(setIsDataLoading(true));
    dispatch(loadFilms(data));
    dispatch(setIsDataLoading(false));
  },
);
