import { Fragment } from 'react';

type TitleProps = {
  isMyList?: boolean,
  isSignIn?: boolean,
  favoriteFilmsCount?: number,
}

export default function Title({ favoriteFilmsCount, isMyList, isSignIn }: TitleProps): JSX.Element {
  return (
    <h1 className="page-title user-page__title">
      {isMyList && (
        <Fragment>
          {'My list '}
          <span className="user-page__film-count">
            {favoriteFilmsCount}
          </span>
        </Fragment>)}
      {isSignIn && 'Sign in'}
    </h1>
  );
}
