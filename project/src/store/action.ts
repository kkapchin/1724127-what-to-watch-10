import { createAction } from '@reduxjs/toolkit';
import { FilmType } from '../types/film-type';

export const changeGenre = createAction<string>('main/changeGenre');

export const setFilms = createAction<FilmType[]>('data/setFilms');

export const setIsDataLoading = createAction<boolean>('data/setIsDataLoading');
