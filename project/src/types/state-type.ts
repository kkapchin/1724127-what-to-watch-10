import { FilmType } from './film-type';

export type State = {
  genre: string,
  films: FilmType[],
  favoriteFilms: FilmType[],
  promo: FilmType,
  similarFilms: FilmType[],
}
