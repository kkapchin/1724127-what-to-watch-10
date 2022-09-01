import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import NotFound from '../../pages/not-found/not-found';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import { browserHistory } from '../../services/browser-history';
import { selectFilms, selectIsDataLoaded, selectIsDataLoading, selectPromo } from '../../store/film-data/selectors';
import HistoryRouter from '../history-router/history-router';
import NoConnection from '../no-connection/no-connection';
import PrivateRoute from '../private-route/private-route';

export default function App(): JSX.Element {

  const films = useAppSelector(selectFilms);
  const promo = useAppSelector(selectPromo);
  const isDataLoading = useAppSelector(selectIsDataLoading);
  const isDataLoaded = useAppSelector(selectIsDataLoaded);

  if(isDataLoaded && !isDataLoading) {
    return (
      <NoConnection />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main films={films} promo={promo} />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<Film films={films} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFound/>}
        />
      </Routes>
    </HistoryRouter>
  );
}
