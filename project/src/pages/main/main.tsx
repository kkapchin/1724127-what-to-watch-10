import { Fragment, useState } from 'react';
import FilmButtons from '../../components/film-buttons/film-buttons';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';
import NoConnection from '../../components/no-connection/no-connection';
import ShowMoreButton from '../../components/show-more-button.tsx/show-more-button';
import { DEFAULT_FILMS_COUNT, DEFAULT_GENRE } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectFilms, selectGenre, selectGenresList, selectIsDataLoaded, selectIsDataLoading, selectPromo } from '../../store/film-data/selectors';

export default function Main(): JSX.Element {

  const [filmsCount, setFilmsCount] = useState(DEFAULT_FILMS_COUNT);
  const genre = useAppSelector(selectGenre);
  const genresList = useAppSelector(selectGenresList);
  const films = useAppSelector(selectFilms);
  const promo = useAppSelector(selectPromo);
  const isDataLoading = useAppSelector(selectIsDataLoading);
  const isDataLoaded = useAppSelector(selectIsDataLoaded);

  const filteredFilms = genre === DEFAULT_GENRE ? films : films.filter((film) => film.genre === genre);
  const favoriteFilmsCount = films.filter((film) => film.isFavorite).length;
  const renderedFilms = filteredFilms.slice(0, filmsCount);

  if(isDataLoading) {
    return (
      <Loader />
    );
  }

  return !isDataLoading && !isDataLoaded ? (
    <NoConnection />
  ) : (
    <Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={promo?.backgroundImage}
            alt={promo?.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promo?.posterImage}
                alt={`${promo?.name } poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo?.genre}</span>
                <span className="film-card__year">{promo?.released}</span>
              </p>

              <FilmButtons
                filmsCount={favoriteFilmsCount}
                id={String(promo?.id)}
                isInList={promo?.isFavorite}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            setFilmsCount={setFilmsCount}
            genresList={genresList}
          />

          {films && (<FilmsList films={renderedFilms} />)}

          {filmsCount < filteredFilms.length && (
            <ShowMoreButton
              setFilmsCount={setFilmsCount}
              filmsCount={filmsCount}
            />
          )}
        </section>

        <Footer />
      </div>
    </Fragment>
  );
}
