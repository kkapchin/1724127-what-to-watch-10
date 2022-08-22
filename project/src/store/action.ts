import { createAction } from '@reduxjs/toolkit';
import { FilmType } from '../types/film-type';

export const changeGenre = createAction<string>('main/changeGenre');

export const filterFilms = createAction<string>('films/filter');

export const loadFilms = createAction<FilmType[]>('data/loadFilms');

export const setIsDataLoading = createAction<boolean>('data/setIsDataLoading');
