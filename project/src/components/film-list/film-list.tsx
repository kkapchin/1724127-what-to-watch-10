import { useState } from 'react';
import { BLANK_FILM } from '../../const';
import { FilmType } from '../../types/film-type';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: FilmType[],
}

export default function FilmList({films}: FilmListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(BLANK_FILM);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          film={film}
          key={film.id}
          setActiveCard={setActiveCard}
          isActive={activeCard === film}
        />
      ))}
    </div>
  );
}
