import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilmButtons from '../../components/film-buttons/film-buttons';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';
import Tabs from '../../components/tabs/tabs';
import { DEFAULT_GENRE } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { fetchFilmAction, fetchReviewsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { changeGenre, setErrorStatus, setFilm } from '../../store/film-data/film-data';
import { selectErrorStatus, selectFilm, selectSimilarFilms } from '../../store/film-data/selectors';
import { FilmType } from '../../types/film-type';
import NotFound from '../not-found/not-found';

type FilmProps = {
  films: FilmType[],
}

export default function Film({films}: FilmProps): JSX.Element {

  const dispatch = useAppDispatch();
  const { id } = useParams();
  const film = useAppSelector(selectFilm);
  const similarFilms = useAppSelector(selectSimilarFilms);
  const errorStatus = useAppSelector(selectErrorStatus);
  const favoriteFilmsCount = films.filter((movie) => movie.isFavorite).length;

  useEffect(() => {
    dispatch(changeGenre(DEFAULT_GENRE));
    dispatch(fetchFilmAction(id));
    dispatch(fetchSimilarFilmsAction(id));
    dispatch(fetchReviewsAction(id));
    return () => {
      dispatch(setErrorStatus(null));
      dispatch(setFilm(null));
    };
  }, [dispatch, id]);

  if(errorStatus) {
    return (
      <NotFound />
    );
  }

  return !film
    ? (<Loader />)
    : (
      <Fragment>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={film.backgroundImage} alt={film.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header />

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
                </p>

                <FilmButtons
                  filmsCount={favoriteFilmsCount}
                  id={id}
                  isInList={film.isFavorite}
                />
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img
                  src={film.posterImage}
                  alt={`${film.name} poster`}
                  width="218"
                  height="327"
                />
              </div>

              <Tabs film={film} />
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmsList films={similarFilms} />
          </section>

          <Footer />
        </div>
      </Fragment>
    );
}
