import { NameSpace } from '../../const';
import { FilmType } from '../../types/film-type';
import { ReviewType } from '../../types/review-type';
import { StateType } from '../../types/state-type';

export const selectFilms = (state: StateType): FilmType[] => state[NameSpace.Data].films;

export const selectFilm = (state: StateType): FilmType | null => state[NameSpace.Data].film;

export const selectGenre = (state: StateType): string => state[NameSpace.Data].genre;

export const selectGenresList = (state: StateType): string[] => state[NameSpace.Data].genresList;

export const selectPromo = (state: StateType): FilmType | null => state[NameSpace.Data].promo;

export const selectSimilarFilms = (state: StateType): FilmType[] => state[NameSpace.Data].similarFilms;

export const selectReviews = (state: StateType): ReviewType[] => state[NameSpace.Data].reviews;

export const selectErrorStatus = (state: StateType): number | null => state[NameSpace.Data].errorStatus;

export const selectDataLoadingStatus = (state: StateType): boolean => state[NameSpace.Data].isDataLoading;

export const selectFavoriteFilms = (state: StateType): FilmType[] => state[NameSpace.Data].favoriteFilms;
