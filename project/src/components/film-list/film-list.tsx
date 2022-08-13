import React from 'react';
import { Movie } from '../../types/movie';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Movie[],
}

export default function FilmList({films}: FilmListProps): JSX.Element {
  const [, setActiveCard] = React.useState({});

  const mouseOverHandler = (film: Movie): void => {
    setActiveCard(film);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard film={film} key={film.id} mouseOverHandler={mouseOverHandler}/>)}
    </div>
  );
}
