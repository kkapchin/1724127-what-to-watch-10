import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_GENRE, NameSpace } from '../../const';
import { FilmDataType } from '../../types/state-type';
import { fetchFilmAction, fetchFilmsAction, fetchPromoAction, fetchReviewsAction, fetchSimilarFilmsAction } from '../api-actions';

const initialState: FilmDataType = {
  genre: DEFAULT_GENRE,
  films: [],
  film: null,
  reviews: [],
  promo: null,
  similarFilms: [],
  isDataLoading: false,
  errorStatus: null,
  genresList: [],
};

export const filmData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload;
    },
    setErrorStatus: (state, action) => {
      state.errorStatus = action.payload;
    },
    setFilm: (state, action) => {
      state.film = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
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
        state.isDataLoading = false;
      })
      .addCase(fetchPromoAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchPromoAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action
          .payload
          .filter((film) => film.id !== state.film?.id)
          .slice(0, 4);
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoading = false;
      });
  }
});

export const { changeGenre, setErrorStatus, setFilm } = filmData.actions;
