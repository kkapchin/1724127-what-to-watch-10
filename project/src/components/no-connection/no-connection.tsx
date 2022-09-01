import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { redirectToRoute } from '../../store/action';

export default function NoConnection(): JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <div className="user-page">
      <div className="sign-in user-page__content">
        <h1 className="not-found" >
          No internet connection
          <br />
          <small>Please check your connection and try again</small>
        </h1>
        <button
          onClick={() => {dispatch(redirectToRoute(AppRoute.Main));}}
          className="not-found__btn"
        >
          <span>Retry</span>
        </button>
      </div>
    </div>
  );
}
