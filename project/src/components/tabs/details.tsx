import { Fragment } from 'react';
import { FilmType } from '../../types/film-type';

type DetailsProps = {
  film: FilmType,
}

export default function Details({film}: DetailsProps): JSX.Element {

  const {
    genre,
    director,
    starring,
    runTime,
    released,
  } = film;

  const titleRunTime = () => {
    const hoursCount = Math.floor(runTime / 60);
    const minutesCount = runTime % 60;
    return `${hoursCount}h ${minutesCount < 10 ? `0${minutesCount}` : minutesCount}m`;
  };

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {starring.join(',#').split('#').map((actor) => <Fragment key={actor}>{actor}<br/></Fragment>)}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{titleRunTime()}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}
