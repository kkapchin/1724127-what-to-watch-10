import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_GENRE } from '../const';
import { StateType } from '../types/state-type';
import { changeGenre, setAuthorizationStatus, setErrorStatus, setFilm, setFilms, setIsDataLoading, setPromo, setReviews, setSimilarFilms, setUserData } from './action';

const initialState: StateType = {
  genre: DEFAULT_GENRE,
  films: [],
  film: null,
  reviews: [],
  promo: null,
  similarFilms: [],
  isDataLoading: false,
  errorStatus: null,
  genresList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;

      let genresList = [DEFAULT_GENRE];
      genresList.push(
        ...[...new Set(state.films.map((film) => film.genre))]
          .sort((a, b): number => a < b ? -1 : 1)
          .map((genre) => genre)
      );
      if (genresList.length > 10) {
        genresList = genresList.slice(0, 10);
      }
      state.genresList = genresList;
    })
    .addCase(setIsDataLoading, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setErrorStatus, (state, action) => {
      state.errorStatus = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(setPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action
        .payload
        .filter((film) => film.id !== state.film?.id)
        .slice(0, 4);
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    });
});
