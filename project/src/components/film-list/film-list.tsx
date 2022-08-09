import React from 'react';
import { Film, Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Films,
}

export default function FilmList({films}: FilmListProps): JSX.Element {
  const [, setActiveCard] = React.useState({});

  const mouseOverHandler = (film: Film): void => {
    setActiveCard(film);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard film={film} key={film.id} mouseOverHandler={mouseOverHandler}/>)}
    </div>
  );
}
