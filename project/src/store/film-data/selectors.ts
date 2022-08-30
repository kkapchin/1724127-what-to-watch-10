import { NameSpace } from '../../const';
import { FilmType } from '../../types/film-type';
import { ReviewType } from '../../types/review-type';
import { StateType } from '../../types/state-type';

export const getFilms = (state: StateType): FilmType[] => state[NameSpace.Data].films;

export const getFilm = (state: StateType): FilmType | null => state[NameSpace.Data].film;

export const getGenre = (state: StateType): string => state[NameSpace.Data].genre;

export const getGenresList = (state: StateType): string[] => state[NameSpace.Data].genresList;

export const getPromo = (state: StateType): FilmType | null => state[NameSpace.Data].promo;

export const getSimilarFilms = (state: StateType): FilmType[] => state[NameSpace.Data].similarFilms;

export const getReviews = (state: StateType): ReviewType[] => state[NameSpace.Data].reviews;

export const getErrorStatus = (state: StateType): number | null => state[NameSpace.Data].errorStatus;

export const getDataLoadingStatus = (state: StateType): boolean => state[NameSpace.Data].isDataLoading;
