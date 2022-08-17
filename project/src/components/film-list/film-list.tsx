import { useState } from 'react';
import { BLANK_FILM } from '../../const';
import { Movie } from '../../types/movie';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Movie[],
}

export default function FilmList({films}: FilmListProps): JSX.Element {
  const [, setActiveCard] = useState(BLANK_FILM);

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard film={film} key={film.id} setActiveCard={setActiveCard} />)}
    </div>
  );
}