import { useState } from 'react';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import Header from '../../components/header/header';
import ShowMoreButton from '../../components/show-more-button.tsx/show-more-button';
import { DEFAULT_FILMS_COUNT, DEFAULT_GENRE } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { FilmType } from '../../types/film-type';

type MainProps = {
  promo: FilmType,
  films: FilmType[],
}

export default function Main({promo, films}: MainProps): JSX.Element {

  const [filmsCount, setFilmsCount] = useState(DEFAULT_FILMS_COUNT);
  const { genresList, genre } = useAppSelector((state) => state);
  let filteredFilms = [];
  if(genre === DEFAULT_GENRE) {
    filteredFilms = films;
  } else {
    filteredFilms = films.filter((film) => film.genre === genre);
  }
  const favoriteFilms = films.filter((film) => film.isFavorite);
  const renderedFilms = filteredFilms.slice(0, filmsCount);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={promo.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt={`${promo.name } poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.released}</span>
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
                  <span className="film-card__count">{favoriteFilms.length}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            setFilmsCount={setFilmsCount}
            genreList={genresList}
          />

          {films && (<FilmsList films={renderedFilms} />)}

          {filmsCount < films.length && (
            <ShowMoreButton
              setFilmsCount={setFilmsCount}
              filmsCount={filmsCount}
            />
          )}
        </section>

        <Footer />
      </div>
    </>
  );
}
