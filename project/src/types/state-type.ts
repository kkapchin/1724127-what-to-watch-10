import { AuthorizationStatus } from '../const';
import { FilmType } from './film-type';
import { ReviewType } from './review-type';
import { UserDataType } from './user-data-type';

export type StateType = {
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
}
