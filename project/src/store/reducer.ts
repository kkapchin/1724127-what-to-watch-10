import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_GENRE } from '../const';
import { promo } from '../mocks/promo-film';
import { StateType } from '../types/state-type';
import { changeGenre, setAuthorizationStatus, setFilms, setIsDataLoading } from './action';

const initialState: StateType = {
  genre: DEFAULT_GENRE,
  films: [],
  promo: promo,
  similarFilms: [],
  isDataLoading: false,
  genresList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
