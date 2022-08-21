import { FilmType } from './film-type';

export type StateType = {
  genre: string,
  films: FilmType[],
  favoriteFilms: FilmType[],
  promo: FilmType,
  similarFilms: FilmType[],
}
