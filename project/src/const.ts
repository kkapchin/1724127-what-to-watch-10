export const BLANK_FILM = {
  id: Number(null),
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: Number(null),
  scoresCount: Number(null),
  director: '',
  starring: [''],
  runTime: Number(null),
  genre: '',
  released: Number(null),
  isFavorite: false,
};

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const DEFAULT_GENRE = 'All genres';

export const FILMS_COUNT_PER_STEP = 8;

export const DEFAULT_FILMS_COUNT = FILMS_COUNT_PER_STEP;

export enum APIRoute {
  Films = '/films',
  Login = '/login',
}
