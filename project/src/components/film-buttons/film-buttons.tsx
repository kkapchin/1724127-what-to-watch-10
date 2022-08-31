import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { redirectToRoute } from '../../store/action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type FilmButtonsProps = {
  filmsCount: number,
  isInList: boolean | undefined,
  id?: string,
}

function FilmButtons({filmsCount, id, isInList}: FilmButtonsProps): JSX.Element {

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button
        onClick={() => {
          dispatch(redirectToRoute(AppRoute.MyList));
        }}
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
