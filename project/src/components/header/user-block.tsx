import { Fragment, memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { redirectToRoute } from '../../store/action';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUserData } from '../../store/user-process/selectors';

function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);
  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      {authorizationStatus !== AuthorizationStatus.Auth
        ? (
          <li className="user-block__item">
            <Link
              to={AppRoute.SignIn}
              className="user-block__link"
            >
                Sign in
            </Link>
          </li>
        )
        : (
          <Fragment>
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  onClick={() => {
                    dispatch(redirectToRoute(AppRoute.MyList));
                  }}
                  src={userData?.avatarUrl}
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <Link
                to={AppRoute.Main}
                className="user-block__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}
              >
                Sign out
              </Link>
            </li>
          </Fragment>
        )}
    </ul>
  );
}

export default memo(UserBlock);
