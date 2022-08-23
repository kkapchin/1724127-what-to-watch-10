import { FilmType } from './film-type';

export type StateType = {
  genre: string,
  films: FilmType[],
  promo: FilmType,
  similarFilms: FilmType[],
  isDataLoading: boolean,
  genresList: string[],
}
