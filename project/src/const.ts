export const EMAIL_REGEX = /\S+@\S+\.\S+/;

export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-zA-Z]).{2,16}$/;

export const DEFAULT_GENRE = 'All genres';

export const FILMS_COUNT_PER_STEP = 8;

export const DEFAULT_FILMS_COUNT = FILMS_COUNT_PER_STEP;

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

export const BLANK_USER_DATA = {
  avatarUrl: '',
  email: '',
  id: Number(null),
  name: '',
  token: '',
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

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Promo = '/promo',
  Favorite = '/favorite'
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}
