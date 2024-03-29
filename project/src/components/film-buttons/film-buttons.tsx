import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { redirectToRoute } from '../../store/action';
import { changeFavoriteStatusAction } from '../../store/api-actions';
import { selectAuthorizationStatus } from '../../store/user-process/selectors';

const ADD_STATUS = 1;
const DELETE_STATUS = 0;

type FilmButtonsProps = {
  filmsCount: number,
  isInList: boolean | undefined,
  id?: string,
}

function FilmButtons({filmsCount, id, isInList}: FilmButtonsProps): JSX.Element {

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  const handlePlayButtonClick = () => {
    dispatch(redirectToRoute(`player/${id}`));
  };

  const handleMyListButtonClick = () => {
    if(authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.SignIn));
      return;
    }

    if(!isInList) {
      dispatch(changeFavoriteStatusAction({id: Number(id), status: ADD_STATUS}));
      return;
    }

    dispatch(changeFavoriteStatusAction({id: Number(id), status: DELETE_STATUS}));
  };

  return (
    <div className="film-card__buttons">
      <button
        onClick={handlePlayButtonClick}
        className="btn btn--play film-card__button"
        type="button"
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button
        onClick={handleMyListButtonClick}
        className="btn btn--list film-card__button"
        type="button"
      >
        {isInList ? (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#in-list"></use>
          </svg>
        ) : (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
        )}
        <span>My list</span>
        {authorizationStatus === AuthorizationStatus.Auth && (
          <span className="film-card__count">{filmsCount}</span>
        )}
      </button>
      {id && authorizationStatus === AuthorizationStatus.Auth && (
        <Link
          to={`/films/${id}/review`}
          className="btn film-card__button"
        >
          Add review
        </Link>
      )}
    </div>
  );
}

export default memo(FilmButtons);
