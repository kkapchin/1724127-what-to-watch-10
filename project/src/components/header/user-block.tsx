import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';

export default function UserBlock(): JSX.Element {
  const { authorizationStatus } = useAppSelector((state) => state);

  if(authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <div className="user-block">
        <Link
          to={AppRoute.SignIn}
          className="user-block__link"
        >
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link
          to={AppRoute.Main}
          className="user-block__link"
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}
