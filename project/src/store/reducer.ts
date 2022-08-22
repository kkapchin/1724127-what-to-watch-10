import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../const';
import { promo } from '../mocks/promo-film';
import { StateType } from '../types/state-type';
import { changeGenre, filterFilms, loadFilms, setIsDataLoading } from './action';

//const SIMILAR_FILMS_COUNT = -4;

const initialState: StateType = {
  genre: DEFAULT_GENRE,
  films: [],
  favoriteFilms: [],
  promo: promo,
  similarFilms: [],
  isDataLoading: false,
  genreList: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(filterFilms, (state, action) => {
      const genre = action.payload;
      if (genre === DEFAULT_GENRE) {
        state.films = initialState.films;
      } else {
        state.films = initialState.films.filter((film) => film.genre === genre);
      }
    })
    .addCase(loadFilms, (state, action) => {
      initialState.films = action.payload;
      state.films = action.payload;

      state.genreList = [DEFAULT_GENRE];
      state.genreList.push(
        ...[...new Set(state.films.map((film) => film.genre))]
          .sort((a, b): number => a < b ? -1 : 1)
          .map((genre) => genre)
      );
      if (state.genreList.length > 10) {
        state.genreList = state.genreList.slice(0, 10);
      }

      state.favoriteFilms = state.films.filter((film) => film.isFavorite);
    })
    .addCase(setIsDataLoading, (state, action) => {
      state.isDataLoading = action.payload;
    });
});
