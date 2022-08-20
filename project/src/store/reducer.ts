import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../const';
import { films } from '../mocks/films';
import { promo } from '../mocks/promo-film';
import { State } from '../types/state-type';
import { changeGenre, filterFilms } from './action';

const SIMILAR_FILMS_COUNT = -4;

const initialState: State = {
  genre: DEFAULT_GENRE,
  films: films,
  favoriteFilms: films.filter((film) => film.isFavorite),
  promo: promo,
  similarFilms: films.slice(SIMILAR_FILMS_COUNT),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(filterFilms, (state, action) => {
      const genre = action.payload;
      if(genre === DEFAULT_GENRE) {
        state.films = initialState.films;
      } else {
        state.films = films.filter((film) => film.genre === genre);
      }
    });
});
