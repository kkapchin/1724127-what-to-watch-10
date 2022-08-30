import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { FilmType } from './film-type';
import { ReviewType } from './review-type';
import { UserDataType } from './user-data-type';

/* export type StateType = {
  genre: string,
  films: FilmType[],
  film: FilmType | null,
  reviews: ReviewType[],
  promo: FilmType | null,
  similarFilms: FilmType[],
  isDataLoading: boolean,
  errorStatus: number | null,
  genresList: string[],
  authorizationStatus: AuthorizationStatus,
  userData: UserDataType | null,
} */

export type StateType = ReturnType<typeof store.getState>;

export type UserProcessType = {
  authorizationStatus: AuthorizationStatus,
  userData: UserDataType | null,
}

export type FilmDataType = {
  genre: string,
  films: FilmType[],
  film: FilmType | null,
  reviews: ReviewType[],
  promo: FilmType | null,
  similarFilms: FilmType[],
  isDataLoading: boolean,
  errorStatus: number | null,
  genresList: string[],
}
