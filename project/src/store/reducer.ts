import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../const';
import { promo } from '../mocks/promo-film';
import { StateType } from '../types/state-type';
import { changeGenre, filterFilms, setFilms, setIsDataLoading } from './action';

const initialState: StateType = {
  genre: DEFAULT_GENRE,
  allFilms: [],
  films: [],
  promo: promo,
  similarFilms: [],
  isDataLoading: false,
  genresList: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(filterFilms, (state, action) => {
      const genre = action.payload;
      if (genre === DEFAULT_GENRE) {
        state.films = state.allFilms;
      } else {
        state.films = state.allFilms.filter((film) => film.genre === genre);
      }
    })
    .addCase(setFilms, (state, action) => {
      state.allFilms = action.payload;
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
    });
});
