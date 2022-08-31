import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

export const redirectToRoute = createAction<AppRoute | string>('what-to-watch/redirectToRoute');
