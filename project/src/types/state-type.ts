import { FilmType } from './film-type';

export type StateType = {
  genre: string,
  allFilms: FilmType[],
  films: FilmType[],
  promo: FilmType,
  similarFilms: FilmType[],
  isDataLoading: boolean,
  genresList: string[],
}
