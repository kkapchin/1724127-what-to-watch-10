import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import NotFound from '../../pages/not-found/not-found';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import Loader from '../loader/loader';
import PrivateRoute from '../private-route/private-route';

export default function App(): JSX.Element {

  const {films, promo, isDataLoading} = useAppSelector((state) => state);

  if(isDataLoading) {
    return (
      <Loader />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
              promo={promo}
              films={films}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList films={films} />
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
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <AddReview films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player films={films} />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
