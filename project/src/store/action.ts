import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<{genre: string}>('main/changeGenre');

export const filterFilms = createAction<{genre: string}>('films/filter');
