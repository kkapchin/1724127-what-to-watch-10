import { memo } from 'react';
import Logo from '../logo/logo';
import UserBlock from './user-block';

type HeaderProps = {
  breadcrumbs?: JSX.Element,
  title?: JSX.Element,
  isTitle?: boolean,
  isSignIn?: boolean,
};

function Header({ breadcrumbs, title, isTitle, isSignIn }: HeaderProps): JSX.Element {
  return (
    <header
      className={`page-header ${isTitle ? 'user-page__head' : 'film-card__head'}`}
    >
      <Logo />
      {breadcrumbs}
      {title}
      {!isSignIn && (<UserBlock />)}
    </header>
  );
}

export default memo(Header);
