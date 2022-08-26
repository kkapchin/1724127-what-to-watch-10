import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';
import Tabs from '../../components/tabs/tabs';
import { DEFAULT_GENRE } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { changeGenre, setFilm } from '../../store/action';
import { fetchFilmAction } from '../../store/api-actions';
import { FilmType } from '../../types/film-type';

type FilmProps = {
  films: FilmType[],
}

export default function Film({films}: FilmProps): JSX.Element {

  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(changeGenre(DEFAULT_GENRE));
    dispatch(fetchFilmAction(id));
    return () => {
      dispatch(setFilm(null));
    };
  }, [dispatch, id]);
  const { film, similarFilms } = useAppSelector((state) => state);

  const favoriteFilmsCount = films.filter((movie) => movie.isFavorite).length;

  if(film === null) {
    return (
      <Loader />
    );
  }

  const {
    backgroundImage,
    name,
    genre,
    released,
    posterImage,
  } = film;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilmsCount}</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
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
    </>
  );
}
