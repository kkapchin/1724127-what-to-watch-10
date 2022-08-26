import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { FilmType } from '../types/film-type';
import { UserDataType } from '../types/user-data-type';

export const changeGenre = createAction<string>('main/changeGenre');

export const setFilms = createAction<FilmType[]>('data/setFilms');

export const setFilm = createAction<FilmType | null>('data/setFilm');

export const setIsDataLoading = createAction<boolean>('data/setIsDataLoading');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const setUserData = createAction<UserDataType>('user/setUserData');

export const redirectToRoute = createAction<AppRoute>('what-to-watch/redirectToRoute');
