import { Fragment, useState } from 'react';
import FilmButtons from '../../components/film-buttons/film-buttons';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';
import ShowMoreButton from '../../components/show-more-button.tsx/show-more-button';
import { DEFAULT_FILMS_COUNT, DEFAULT_GENRE } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getDataLoadingStatus, getGenre, getGenresList } from '../../store/film-data/selectors';
import { FilmType } from '../../types/film-type';

type MainProps = {
  promo: FilmType | null,
  films: FilmType[],
}

export default function Main({promo, films}: MainProps): JSX.Element {

  const [filmsCount, setFilmsCount] = useState(DEFAULT_FILMS_COUNT);
  const genre = useAppSelector(getGenre);
  const genresList = useAppSelector(getGenresList);
  const isDataLoading = useAppSelector(getDataLoadingStatus);

  const filteredFilms = genre === DEFAULT_GENRE ? films : films.filter((film) => film.genre === genre);
  const favoriteFilmsCount = films.filter((film) => film.isFavorite).length;
  const renderedFilms = filteredFilms.slice(0, filmsCount);

  return isDataLoading
    ? (<Loader />)
    : (
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
