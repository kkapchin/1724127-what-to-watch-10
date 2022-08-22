import { TokenType } from '../types/token-type';

const AUTH_TOKEN_KEY_NAME = 'wtw-token';

export const getToken = (): TokenType => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const saveToken = (token: TokenType): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
