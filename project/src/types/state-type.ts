import { AuthorizationStatus, NameSpace } from '../const';
import { FilmType } from './film-type';
import { ReviewType } from './review-type';
import { UserDataType } from './user-data-type';

export type StateType = {
  [NameSpace.Data]: FilmDataType,
  [NameSpace.User]: UserProcessType,
}

export type UserProcessType = {
  authorizationStatus: AuthorizationStatus,
  userData: UserDataType | null,
}

export type FilmDataType = {
  genre: string,
  films: FilmType[],
  favoriteFilms: FilmType[],
  film: FilmType | null,
  reviews: ReviewType[],
  promo: FilmType | null,
  similarFilms: FilmType[],
  isDataLoading: boolean,
  errorStatus: number | null,
  genresList: string[],
}
