import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { filmData } from './film-data/film-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Data]: filmData.reducer,
});
