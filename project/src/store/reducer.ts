import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../const';
import { films } from '../mocks/films';
import { promo } from '../mocks/promo-film';
import { changeGenre, filterFilms } from './action';

const SIMILAR_FILMS_COUNT = -4;

const initialState = {
  genre: DEFAULT_GENRE,
  films: films,
  favoriteFilms: films.filter((film) => film.isFavorite),
  promo: promo,
  similarFilms: films.slice(SIMILAR_FILMS_COUNT),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
    })
    .addCase(filterFilms, (state, action) => {
      const { genre } = action.payload;
      if(genre === DEFAULT_GENRE) {
        state.films = initialState.films;
        return;
      }
      state.films = films.filter((film) => film.genre === genre);
    });
});
