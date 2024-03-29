import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Breadcrumbs from '../../components/header/breadcrumbs';
import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';
import NoConnection from '../../components/no-connection/no-connection';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { fetchFilmAction } from '../../store/api-actions';
import { setFilm } from '../../store/film-data/film-data';
import { selectFilm, selectIsDataLoaded, selectIsDataLoading } from '../../store/film-data/selectors';
import NotFound from '../not-found/not-found';

export default function AddReview(): JSX.Element {

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const isDataLoading = useAppSelector(selectIsDataLoading);
  const isDataLoaded = useAppSelector(selectIsDataLoaded);
  const film = useAppSelector(selectFilm);

  useEffect(() => {
    dispatch(fetchFilmAction(id));
    return () => {
      dispatch(setFilm(null));
    };
  }, [dispatch, id]);

  if(isDataLoading) {
    return (
      <Loader />
    );
  }

  if(isDataLoaded && !film) {
    return (
      <NotFound />
    );
  }

  return !isDataLoading && !isDataLoaded ? (
    <NoConnection />
  ) : (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header breadcrumbs={<Breadcrumbs id={film?.id} name={film?.name} />} />

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film?.posterImage}
            alt={`${film?.name} poster`}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
}
