import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_GENRE, NameSpace } from '../../const';
import { FilmDataType } from '../../types/state-type';
import { changeFavoriteStatusAction, fetchFavoritesAction, fetchFilmAction, fetchFilmsAction, fetchPromoAction, fetchReviewsAction, fetchSimilarFilmsAction } from '../api-actions';

const initialState: FilmDataType = {
  genre: DEFAULT_GENRE,
  films: [],
  favoriteFilms: [],
  film: null,
  reviews: [],
  promo: null,
  similarFilms: [],
  isDataLoading: false,
  errorStatus: null,
  genresList: [],
  isNoConnection: false,
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
        state.isNoConnection = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isDataLoading = false;
        state.isNoConnection = true;
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
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isDataLoading = false;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state,action) => {
        if(action.payload.isFavorite) {
          state.favoriteFilms.push(action.payload);
        } else {
          const favoriteFilms = state.favoriteFilms;
          const filmIndex = favoriteFilms.findIndex((film) => film.id === action.payload.id);
          state.favoriteFilms = [
            ...favoriteFilms.slice(0, filmIndex),
            ...favoriteFilms.slice(filmIndex + 1),
          ];
        }
        const films = state.films;
        const filmIndex = films.findIndex((film) => film.id === action.payload.id);
        state.films = [
          ...films.slice(0, filmIndex),
          ...[action.payload],
          ...films.slice(filmIndex + 1),
        ];
        state.film = action.payload;
        if(state.promo?.id === action.payload.id) {
          state.promo = action.payload;
        }
      });
  }
});

export const { changeGenre, setErrorStatus, setFilm } = filmData.actions;
